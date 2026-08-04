import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function FloatingContact({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 bottom-5 z-50 sm:right-6 sm:bottom-6"
        >
          <MagneticButton
            onClick={onClick}
            className="px-6 py-3.5 shadow-[0_20px_50px_-18px_var(--primary)]"
            ariaLabel="Open the inquiry form"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Let&apos;s talk
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
