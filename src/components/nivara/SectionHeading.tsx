import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 ${className}`}
    >
      <span className="chip mb-4">{eyebrow}</span>
      <h2 className="max-w-2xl text-[clamp(1.9rem,5vw,3.25rem)]">{children}</h2>
    </motion.div>
  );
}
