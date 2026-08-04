import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "./MagneticButton";
import { useReducedMotionPref } from "@/hooks/use-motion-prefs";

const headline = ["We", "build", "websites", "that", "feel", "inevitable"];
const accentWords = new Set(["websites"]);
const badges = ["Cloud-native builds", "React & TypeScript", "Deployed on Cloudflare"];

export function Hero({ onInquire }: { onInquire: () => void }) {
  const orbRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    if (reduced || !orbRef.current || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        rotate: 360,
        duration: 42,
        repeat: -1,
        ease: "none",
      });
      gsap.to(orbRef.current, {
        y: -18,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(orbRef.current, {
        scale: 0.72,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20"
    >
      {/* Abstract animated centerpiece */}
      <div
        ref={orbRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-[55%] opacity-70"
      >
        <div className="grain-glow absolute inset-0 rounded-full blur-3xl" />
        <div className="absolute inset-16 rounded-full border border-border-strong" />
        <div className="absolute inset-28 rounded-full border border-[color-mix(in_oklab,var(--primary)_45%,transparent)]" />
        <div className="absolute inset-40 rotate-45 rounded-[2.5rem] border border-border-strong" />
      </div>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
        className="max-w-4xl text-center text-[clamp(2.75rem,9vw,6rem)]"
      >
        {headline.map((word) => (
          <motion.span
            key={word}
            variants={{
              hidden: { opacity: 0, y: "0.4em", filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className={`mr-[0.22em] inline-block ${accentWords.has(word) ? "accent-word" : ""}`}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-7 max-w-xl text-center text-base text-muted-foreground"
      >
        Nivara Technologies designs and engineers premium websites and web applications
        for teams who care how their product feels.
      </motion.p>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
        className="mt-7 flex flex-wrap items-center justify-center gap-2"
      >
        {badges.map((b) => (
          <motion.li
            key={b}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {b}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10"
      >
        <MagneticButton onClick={onInquire} className="px-8 py-4 text-base">
          Start a project
        </MagneticButton>
      </motion.div>
    </section>
  );
}
