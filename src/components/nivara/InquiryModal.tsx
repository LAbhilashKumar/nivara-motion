import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { MagneticButton } from "./MagneticButton";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[+]?[\d\s()-]{7,20}$/, "Please enter a valid phone number"),
  acknowledged: z.literal(true, { message: "Please tick the box so we can contact you" }),
});

export function InquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ack, setAck] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const nodes = panelRef.current.querySelectorAll<HTMLElement>(
          'button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!nodes.length) return;
        const first = nodes[0]!;
        const last = nodes[nodes.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setDone(false);
      setName("");
      setPhone("");
      setAck(false);
      setErrors({});
    }, 300);
    return () => clearTimeout(t);
  }, [open]);

  const submit = async () => {
    const parsed = schema.safeParse({ name, phone, acknowledged: ack });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      acknowledged: true,
    });
    setSubmitting(false);
    if (error) {
      setErrors({ form: "Something went wrong. Please try again." });
      return;
    }
    setDone(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            onClick={onClose}
            className="absolute inset-0 bg-[oklch(0.08_0.004_285_/_70%)] backdrop-blur-md"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquire-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
            className="bento-card relative z-10 w-full max-w-md p-7"
          >
            <button
              onClick={onClose}
              aria-label="Close inquiry form"
              className="absolute top-4 right-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-[oklch(1_0_0_/_6%)] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <X className="h-4 w-4" />
            </button>

            {done ? (
              <div className="flex flex-col items-center py-8 text-center">
                <motion.span
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <motion.span
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </motion.span>
                </motion.span>
                <h2 id="inquire-title" className="text-2xl">
                  Request received
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — we&apos;ll call you shortly to talk through your project.
                </p>
                <MagneticButton variant="ghost" onClick={onClose} className="mt-7">
                  Close
                </MagneticButton>
              </div>
            ) : (
              <>
                <h2 id="inquire-title" className="text-2xl">
                  Tell us about your <span className="accent-word">project</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Leave your details and we&apos;ll reach out within one business day.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="mb-1.5 block text-xs text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="lead-name"
                      ref={firstFieldRef}
                      value={name}
                      maxLength={100}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-input bg-[oklch(1_0_0_/_3%)] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                      placeholder="Your full name"
                    />
                    {errors["name"] && (
                      <p className="mt-1.5 text-xs text-primary">{errors["name"]}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="mb-1.5 block text-xs text-muted-foreground">
                      Phone number
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      value={phone}
                      maxLength={20}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-input bg-[oklch(1_0_0_/_3%)] px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                      placeholder="+1 555 000 1234"
                    />
                    {errors["phone"] && (
                      <p className="mt-1.5 text-xs text-primary">{errors["phone"]}</p>
                    )}
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={ack}
                      onChange={(e) => setAck(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--primary)]"
                    />
                    I agree to be contacted by Nivara Technologies about my project.
                  </label>
                  {errors["acknowledged"] && (
                    <p className="text-xs text-primary">{errors["acknowledged"]}</p>
                  )}
                  {errors["form"] && <p className="text-xs text-primary">{errors["form"]}</p>}
                </div>

                <MagneticButton
                  onClick={submit}
                  className="mt-6 w-full py-3.5"
                  radius={6}
                >
                  {submitting ? "Sending…" : "Send inquiry"}
                </MagneticButton>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
