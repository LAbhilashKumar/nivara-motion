// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Layers, Code2, ShoppingBag, LifeBuoy, PenTool, Gauge, Sparkles } from "lucide-react";
// import { TiltCard, bentoStagger } from "./TiltCard";
// import { SectionHeading } from "./SectionHeading";

// const rotating = [
//   {
//     icon: Sparkles,
//     title: "Product & Brand Design",
//     copy: "Interface systems, motion language and brand expression built to hold up across every screen.",
//     tags: ["Design systems", "Motion", "Prototyping"],
//   },
//   {
//     icon: PenTool,
//     title: "Marketing Sites",
//     copy: "Story-led pages engineered for speed, clarity and conversion — not template sameness.",
//     tags: ["Landing pages", "CMS", "SEO"],
//   },
//   {
//     icon: Code2,
//     title: "Web Applications",
//     copy: "Typed React front-ends over reliable backends, with auth, data and dashboards done properly.",
//     tags: ["React", "TypeScript", "APIs"],
//   },
//   {
//     icon: Gauge,
//     title: "Performance Work",
//     copy: "Audits and rebuilds that cut load time, tighten Core Web Vitals and keep interactions instant.",
//     tags: ["Core Web Vitals", "Edge", "Caching"],
//   },
// ];

// const cards = [
//   {
//     icon: Layers,
//     title: "Web Design",
//     copy: "Distinct visual direction, wireframes to polished UI.",
//     tags: ["UI/UX", "Figma"],
//   },
//   {
//     icon: Code2,
//     title: "Web Development",
//     copy: "Fast, accessible, maintainable front-end engineering.",
//     tags: ["React", "Tailwind"],
//   },
//   {
//     icon: ShoppingBag,
//     title: "E-commerce",
//     copy: "Storefronts and checkouts built to convert and scale.",
//     tags: ["Payments", "Catalog"],
//   },
//   {
//     icon: LifeBuoy,
//     title: "Ongoing Support",
//     copy: "Retained care: iteration, monitoring and improvements.",
//     tags: ["Retainers", "Uptime"],
//   },
// ];

// function RotatingCard() {
//   const [index, setIndex] = useState(0);
//   const [paused, setPaused] = useState(false);

//   useEffect(() => {
//     if (paused) return;
//     const t = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 3600);
//     return () => clearInterval(t);
//   }, [paused]);

//   const item = rotating[index]!;
//   const Icon = item.icon;

//   return (
//     <TiltCard
//       className="flex min-h-[19rem] flex-col justify-between md:col-span-2 md:row-span-2"
//       max={5}
//     >
//       <div
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => setPaused(false)}
//         onFocus={() => setPaused(true)}
//         onBlur={() => setPaused(false)}
//         className="flex h-full flex-col justify-between"
//       >
//         <span className="chip w-fit">Featured</span>
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={item.title}
//             initial={{ opacity: 0, scale: 0.97, y: 10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.98, y: -8 }}
//             transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//             className="my-8"
//           >
//             <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
//               <Icon className="h-6 w-6" aria-hidden="true" />
//             </span>
//             <h3 className="text-[clamp(1.5rem,3vw,2.15rem)]">{item.title}</h3>
//             <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
//               {item.copy}
//             </p>
//             <div className="mt-5 flex flex-wrap gap-2">
//               {item.tags.map((t) => (
//                 <span key={t} className="chip">
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <div className="flex items-center gap-2" role="tablist" aria-label="Featured services">
//           {rotating.map((r, i) => (
//             <button
//               key={r.title}
//               role="tab"
//               aria-selected={i === index}
//               aria-label={r.title}
//               onClick={() => setIndex(i)}
//               className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
//                 i === index ? "w-7 bg-primary" : "w-2 bg-border-strong hover:bg-muted-foreground"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </TiltCard>
//   );
// }

// export function Services() {
//   return (
//     <section id="services" className="mx-auto w-full max-w-6xl px-4 py-24">
//       <SectionHeading eyebrow="Services">
//         What we help you <span className="accent-word">build</span>
//       </SectionHeading>

//       <motion.div
//         variants={bentoStagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-80px" }}
//         className="grid grid-cols-1 gap-4 md:grid-cols-4"
//       >
//         <RotatingCard />
//         {cards.map((c) => {
//           const Icon = c.icon;
//           return (
//             <TiltCard key={c.title} className="flex flex-col md:col-span-2">
//               <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary">
//                 <Icon className="h-5 w-5" aria-hidden="true" />
//               </span>
//               <h3 className="text-xl">{c.title}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {c.tags.map((t) => (
//                   <span key={t} className="chip">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </TiltCard>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// }
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Layers, Code2, Palette, LifeBuoy, PenTool, Gauge, Sparkles, MessageCircle } from "lucide-react";
import { TiltCard, bentoStagger } from "./TiltCard";
import { SectionHeading } from "./SectionHeading";

const rotating = [
  {
    icon: Sparkles,
    title: "Product & Brand Design",
    copy: "Interface systems, motion language and brand expression built to hold up across every screen.",
    tags: ["Design systems", "Motion", "Prototyping"],
  },
  {
    icon: PenTool,
    title: "Marketing Sites",
    copy: "Story-led pages engineered for speed, clarity and conversion — not template sameness.",
    tags: ["Landing pages", "CMS", "SEO"],
  },
  {
    icon: Code2,
    title: "Web Applications",
    copy: "Typed React front-ends over reliable backends, with auth, data and dashboards done properly.",
    tags: ["React", "TypeScript", "APIs"],
  },
  {
    icon: Gauge,
    title: "Performance Work",
    copy: "Audits and rebuilds that cut load time, tighten Core Web Vitals and keep interactions instant.",
    tags: ["Core Web Vitals", "Edge", "Caching"],
  },
];

const cards = [
  {
    icon: Layers,
    title: "Web Design",
    copy: "Distinct visual direction, wireframes to polished UI.",
    tags: ["UI/UX", "Figma"],
  },
  {
    icon: Code2,
    title: "Web Development",
    copy: "Fast, accessible, maintainable front-end engineering.",
    tags: ["React", "Tailwind"],
  },
  {
    icon: Palette,
    title: "Logo Making",
    copy: "Distinct, memorable brand marks built to work everywhere your business shows up.",
    tags: ["Branding", "Identity"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    copy: "Automated flows for support, orders and lead capture, right inside WhatsApp.",
    tags: ["Chatbots", "CRM"],
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    copy: "Retained care: iteration, monitoring and improvements.",
    tags: ["Retainers", "Uptime"],
  },
];

function RotatingCard() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 3600);
    return () => clearInterval(t);
  }, [paused]);

  const item = rotating[index]!;
  const Icon = item.icon;

  return (
    <TiltCard
      className="flex min-h-[19rem] flex-col justify-between md:col-span-2 md:row-span-2"
      max={5}
    >
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex h-full flex-col justify-between"
      >
        <span className="chip w-fit">Featured</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.97, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="my-8"
          >
            <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="text-[clamp(1.5rem,3vw,2.15rem)]">{item.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {item.copy}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2" role="tablist" aria-label="Featured services">
          {rotating.map((r, i) => (
            <button
              key={r.title}
              role="tab"
              aria-selected={i === index}
              aria-label={r.title}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                i === index ? "w-7 bg-primary" : "w-2 bg-border-strong hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-4 py-24">
      <SectionHeading eyebrow="Services">
        What we help you <span className="accent-word">build</span>
      </SectionHeading>

      <motion.div
        variants={bentoStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-4"
      >
        <RotatingCard />
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <TiltCard key={c.title} className="flex flex-col md:col-span-2">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-[color-mix(in_oklab,var(--primary)_18%,transparent)] text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          );
        })}
      </motion.div>
    </section>
  );
}
