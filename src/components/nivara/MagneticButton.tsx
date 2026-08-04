import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useFinePointer, useReducedMotionPref } from "@/hooks/use-motion-prefs";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "accent" | "ghost";
  type?: "button" | "submit";
  radius?: number;
  ariaLabel?: string;
};

const styles = {
  accent:
    "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_14px_40px_-18px_var(--primary)]",
  ghost:
    "bg-[oklch(1_0_0_/_4%)] text-foreground border border-border-strong hover:bg-[oklch(1_0_0_/_8%)]",
};

/** Pill button that drifts toward the cursor within a bounded radius. */
export function MagneticButton({
  children,
  onClick,
  className,
  variant = "accent",
  type = "button",
  radius = 10,
  ariaLabel,
}: Props) {
  const reduced = useReducedMotionPref();
  const fine = useFinePointer();
  const magnetic = fine && !reduced;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 18, mass: 0.3 });
  const y = useSpring(my, { stiffness: 300, damping: 18, mass: 0.3 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!magnetic) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * radius * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * radius * 2);
  };

  return (
    <motion.button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x, y }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        styles[variant],
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
