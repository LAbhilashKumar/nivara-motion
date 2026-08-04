// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { MagneticButton } from "./MagneticButton";

// const links = [
//   { label: "Services", href: "#services" },
//   { label: "Process", href: "#process" },
//   { label: "Inquire", href: "#inquire" },
// ];

// export function Navbar({ onInquire }: { onInquire: () => void }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -28, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
//     >
//       <nav
//         aria-label="Primary"
//         className={`flex w-full max-w-3xl items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
//           scrolled
//             ? "border-border-strong bg-[oklch(0.145_0.004_285_/_82%)] backdrop-blur-xl"
//             : "border-border bg-[oklch(0.205_0.005_285_/_50%)] backdrop-blur-md"
//         }`}
//       >
//         <a
//           href="#top"
//           className="ml-2 font-display text-lg font-extrabold tracking-[-0.06em] text-foreground"
//         >
//           NIVARA
//         </a>
//         <ul className="ml-auto hidden items-center gap-1 sm:flex">
//           {links.map((l) => (
//             <li key={l.label}>
//               <a
//                 href={l.href}
//                 className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-[oklch(1_0_0_/_5%)] hover:text-foreground"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <MagneticButton
//           onClick={onInquire}
//           className="ml-auto px-5 py-2 text-xs sm:ml-2"
//           radius={6}
//         >
//           Let&apos;s Talk
//         </MagneticButton>
//       </nav>
//     </motion.header>
//   );
// }


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { MagneticButton } from "./MagneticButton";

// const links = [
//   { label: "Services", href: "#services" },
//   { label: "Process", href: "#process" },
//   { label: "Inquire", href: "#inquire" },
// ];

// export function Navbar({ onInquire }: { onInquire: () => void }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -28, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
//     >
//       <nav
//         aria-label="Primary"
//         className={`flex w-full max-w-3xl items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
//           scrolled
//             ? "border-border-strong bg-[oklch(0.145_0.012_254.3_/_82%)] backdrop-blur-xl"
//             : "border-border bg-[oklch(0.215_0.022_254.3_/_50%)] backdrop-blur-md"
//         }`}
//       >
//         <a
//           href="#top"
//           className="ml-2 font-display text-lg font-extrabold tracking-[-0.06em] text-brand-navy"
//         >
//           NIVARA
//         </a>
//         <ul className="ml-auto hidden items-center gap-1 sm:flex">
//           {links.map((l) => (
//             <li key={l.label}>
//               <a
//                 href={l.href}
//                 className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-[oklch(1_0_0_/_5%)] hover:text-foreground"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <MagneticButton
//           onClick={onInquire}
//           className="ml-auto px-5 py-2 text-xs sm:ml-2"
//           radius={6}
//         >
//           Let&apos;s Talk
//         </MagneticButton>
//       </nav>
//     </motion.header>
//   );
// }


// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { MagneticButton } from "./MagneticButton";

// const links = [
//   { label: "Services", href: "#services" },
//   { label: "Process", href: "#process" },
//   { label: "Inquire", href: "#inquire" },
// ];

// export function Navbar({ onInquire }: { onInquire: () => void }) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -28, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//       className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
//     >
//       <nav
//         aria-label="Primary"
//         className={`flex w-full max-w-3xl items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
//           scrolled
//             ? "border-border-strong bg-[oklch(0.145_0.012_254.3_/_82%)] backdrop-blur-xl"
//             : "border-border bg-[oklch(0.215_0.022_254.3_/_50%)] backdrop-blur-md"
//         }`}
//       >
//         <a href="#top" className="ml-1 flex items-center gap-2">
//           <img
//             src="/nivara-logo.png"
//             alt="Nivara Technologies"
//             className="h-8 w-8 shrink-0"
//             width={32}
//             height={32}
//           />
//           <span className="font-display text-lg font-extrabold tracking-[-0.06em] text-brand-navy">
//             NIVARA
//           </span>
//         </a>
//         <ul className="ml-auto hidden items-center gap-1 sm:flex">
//           {links.map((l) => (
//             <li key={l.label}>
//               <a
//                 href={l.href}
//                 className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-[oklch(1_0_0_/_5%)] hover:text-foreground"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <MagneticButton
//           onClick={onInquire}
//           className="ml-auto px-5 py-2 text-xs sm:ml-2"
//           radius={6}
//         >
//           Let&apos;s Talk
//         </MagneticButton>
//       </nav>
//     </motion.header>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Inquire", href: "#inquire" },
];

export function Navbar({ onInquire }: { onInquire: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-3xl items-center gap-3 rounded-full border px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "border-border-strong bg-[oklch(0.145_0.012_254.3_/_82%)] backdrop-blur-xl"
            : "border-border bg-[oklch(0.215_0.022_254.3_/_50%)] backdrop-blur-md"
        }`}
      >
        <a href="#top" className="ml-1 flex items-center gap-2">
          <img
            src="/nivara-logo.png"
            alt="Nivara Technologies"
            className="h-8 w-8 shrink-0"
            width={32}
            height={32}
          />
          <span className="font-display text-lg font-extrabold tracking-[-0.06em] text-brand-navy">
            NIVARA<span className="hidden sm:inline"> Technologies</span>
          </span>
        </a>
        <ul className="ml-auto hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-[oklch(1_0_0_/_5%)] hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <MagneticButton
          onClick={onInquire}
          className="ml-auto px-5 py-2 text-xs sm:ml-2"
          radius={6}
        >
          Let&apos;s Talk
        </MagneticButton>
      </nav>
    </motion.header>
  );
}

