import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Inquire", href: "#inquire" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "GitHub", href: "https://github.com" },
];

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-t border-border px-4 py-12"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <span className="font-display text-xl font-extrabold tracking-[-0.06em]">NIVARA</span>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl text-xs text-muted-foreground">
        Nivara Technologies · © {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}
