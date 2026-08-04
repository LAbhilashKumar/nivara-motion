import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SmoothScroll } from "@/components/nivara/SmoothScroll";
import { Navbar } from "@/components/nivara/Navbar";
import { Hero } from "@/components/nivara/Hero";
import { Services } from "@/components/nivara/Services";
import { StackRow } from "@/components/nivara/StackRow";
import { Process } from "@/components/nivara/Process";
import { Testimonials } from "@/components/nivara/Testimonials";
import { FloatingContact } from "@/components/nivara/FloatingContact";
import { InquiryModal } from "@/components/nivara/InquiryModal";
import { Footer } from "@/components/nivara/Footer";

const title = "Nivara Technologies — Premium Websites & Web Apps";
const description =
  "Nivara Technologies is a web development studio designing and building premium, fast, cloud-native websites and web applications in React and TypeScript.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <Navbar onInquire={() => setOpen(true)} />
      <main>
        <Hero onInquire={() => setOpen(true)} />
        <Services />
        <StackRow />
        <Process />
        <Testimonials />
        <section id="inquire" className="mx-auto w-full max-w-6xl px-4 pb-28 text-center">
          <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,5vw,3.25rem)]">
            Ready to build something <span className="accent-word">worth shipping?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Tell us about the project — we&apos;ll come back with a plan, a timeline and a price.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingContact onClick={() => setOpen(true)} />
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
