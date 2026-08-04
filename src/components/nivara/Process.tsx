import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiltCard, bentoStagger } from "./TiltCard";
import { SectionHeading } from "./SectionHeading";
import { useReducedMotionPref } from "@/hooks/use-motion-prefs";

const steps = [
  { n: "01", title: "Discover", copy: "Goals, audience and constraints, mapped before a pixel moves." },
  { n: "02", title: "Design", copy: "Direction, system and screens — decided visually, not in a doc." },
  { n: "03", title: "Build", copy: "Typed, tested front-end engineering against a clean backend." },
  { n: "04", title: "Launch", copy: "Edge deployment, analytics, SEO and performance verified." },
  { n: "05", title: "Support", copy: "Ongoing iteration so the product keeps earning its keep." },
];

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPref();

  useEffect(() => {
    if (reduced || !lineRef.current || !wrapRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 78%",
            end: "bottom 55%",
            scrub: 0.5,
          },
        },
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Method">
        How a Nivara project <span className="accent-word">moves</span>
      </SectionHeading>

      <div ref={wrapRef} className="relative">
        <div
          aria-hidden="true"
          className="absolute top-14 right-4 left-4 hidden h-px origin-left bg-gradient-to-r from-primary via-border-strong to-transparent lg:block"
          ref={lineRef}
        />
        <motion.ol
          variants={bentoStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map((s) => (
            <li key={s.n} className="contents">
              <TiltCard className="flex flex-col" max={7}>
                <span className="font-display text-sm tracking-widest text-primary">{s.n}</span>
                <h3 className="mt-3 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </TiltCard>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
