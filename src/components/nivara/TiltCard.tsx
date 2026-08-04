import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useFinePointer, useReducedMotionPref } from "@/hooks/use-motion-prefs";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees. */
  max?: number;
};

/** Bento card with staggered entrance, hover lift and a subtle cursor-follow 3D tilt. */
export function TiltCard({ children, className, max = 6 }: TiltCardProps) {
  const reduced = useReducedMotionPref();
  const fine = useFinePointer();
  const interactive = fine && !reduced;

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 220, damping: 20, mass: 0.4 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={reduced ? {} : { y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={
        interactive
          ? { rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }
          : {}
      }
      className={cn("bento-card p-6", className)}
    >
      {children}
    </motion.div>
  );
}

export const bentoStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};
