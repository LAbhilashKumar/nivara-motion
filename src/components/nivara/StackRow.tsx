import { motion } from "framer-motion";
import { TiltCard, bentoStagger } from "./TiltCard";

const stack = [
  { name: "React", note: "UI runtime" },
  { name: "TypeScript", note: "Type safety" },
  { name: "Tailwind", note: "Styling" },
  { name: "Supabase", note: "Data & auth" },
  { name: "Cloudflare", note: "Edge hosting" },
];

export function StackRow() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-24">
      <motion.div
        variants={bentoStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
      >
        <TiltCard className="flex flex-col justify-center">
          <h3 className="text-2xl">
            Tools we <span className="accent-word">build with</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A deliberately small, modern stack we know deeply.
          </p>
        </TiltCard>
        <TiltCard className="md:col-span-2" max={4}>
          <ul className="flex h-full flex-wrap content-center items-center gap-3">
            {stack.map((s) => (
              <li
                key={s.name}
                className="group flex items-center gap-3 rounded-full border border-border-strong bg-[oklch(1_0_0_/_3%)] px-4 py-2.5 transition-colors hover:border-primary"
              >
                <span className="h-2 w-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
                <span className="text-sm font-medium text-foreground">{s.name}</span>
                <span className="text-xs text-muted-foreground">{s.note}</span>
              </li>
            ))}
          </ul>
        </TiltCard>
      </motion.div>
    </section>
  );
}
