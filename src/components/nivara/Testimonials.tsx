// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";
// import { TiltCard, bentoStagger } from "./TiltCard";
// import { SectionHeading } from "./SectionHeading";

// export function Testimonials() {
//   return (
//     <section className="mx-auto w-full max-w-6xl px-4 pb-24">
//       <SectionHeading eyebrow="Testimonials">
//         Hear what our <span className="accent-word">clients</span> have to say
//       </SectionHeading>

//       <motion.div
//         variants={bentoStagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid grid-cols-1 gap-4 md:grid-cols-3"
//       >
//         <TiltCard className="flex flex-col justify-between md:col-span-2" max={4}>
//           <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
//           <blockquote className="mt-6 text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug text-foreground">
//             &ldquo;Nivara Technologies turned our ideas into a clean and professional website. The team was responsive, easy to work with,
//             and delivered exactly what we needed".&rdquo;
//           </blockquote>
//           <footer className="mt-8 flex items-center gap-3">
//             <span className="h-9 w-9 rounded-full border border-border-strong bg-card-elevated" />
//             <span className="text-sm text-muted-foreground">
//               [— Gripsta Team]
//             </span>
//           </footer>
//         </TiltCard>
//         <TiltCard className="flex flex-col justify-center">
//           <p className="text-sm leading-relaxed text-muted-foreground">
//             We&apos;re a young studio, so we&apos;d rather show honest placeholders than
//             invent praise. Real reviews land here as projects ship.
//           </p>
//           <span className="chip mt-5 w-fit">Awaiting first reviews</span>
//         </TiltCard>
//       </motion.div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TiltCard, bentoStagger } from "./TiltCard";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24">
      <SectionHeading eyebrow="Testimonials">
        Hear what our <span className="accent-word">clients</span> have to say
      </SectionHeading>

      <motion.div
        variants={bentoStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        {/* Featured Testimonial */}
        <TiltCard className="flex flex-col justify-between md:col-span-2" max={4}>
          <Quote className="h-8 w-8 text-primary" aria-hidden="true" />

          <blockquote className="mt-6 text-[clamp(1.15rem,2.4vw,1.6rem)] leading-snug text-foreground">
            &ldquo;Nivara Technologies understood our vision and delivered a clean,
            professional website that perfectly represents our brand. The entire
            process was smooth, and the team exceeded our expectations.&rdquo;
          </blockquote>

          <footer className="mt-8 flex items-center gap-3">
            <span className="h-9 w-9 rounded-full border border-border-strong bg-card-elevated" />
            <span className="text-sm font-medium text-muted-foreground">
              — Gripsta Team
            </span>
          </footer>
        </TiltCard>

        {/* Company Values */}
        <TiltCard className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-foreground">
            Built with Trust
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every project is delivered with a focus on quality, transparency,
            and long-term client relationships.
          </p>

          <span className="chip mt-5 w-fit">
            Client Satisfaction
          </span>
        </TiltCard>
      </motion.div>
    </section>
  );
}
