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
import { SectionHeading } from "@/components/nivara/SectionHeading";
import { TiltCard } from "@/components/nivara/TiltCard";
import { MagneticButton } from "@/components/nivara/MagneticButton";

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
        <section id="inquire" className="mx-auto w-full max-w-6xl px-4 pb-28">
          <SectionHeading eyebrow="Get in touch">
            Ready to build something <span className="accent-word">worth shipping?</span>
          </SectionHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <TiltCard className="flex flex-col justify-center md:col-span-2">
              <h3 className="text-2xl">Tell us about your project</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Share a few details and we&apos;ll come back with a plan, a timeline
                and a price within one business day — no obligation, no sales
                pressure.
              </p>
              <div className="mt-6">
                <MagneticButton onClick={() => setOpen(true)} className="px-6 py-3.5">
                  Start a project
                </MagneticButton>
              </div>
            </TiltCard>
            <TiltCard className="flex flex-col justify-center gap-5">
              <div>
                <span className="chip w-fit">Email</span>
                
                  href="mailto:nivaratechnologies@gmail.com"
                  className="mt-2 block text-sm text-foreground hover:text-primary"
                >
                  nivaratechnologies@gmail.com
                </a>
              </div>
              <div>
                <span className="chip w-fit">Phone</span>
                
                  href="tel:+919493667272"
                  className="mt-2 block text-sm text-foreground hover:text-primary"
                >
                  +91 94936 67272
                </a>
              </div>
              <div>
                <span className="chip w-fit">Response time</span>
                <p className="mt-2 text-sm text-muted-foreground">
                  Within 1 business day
                </p>
              </div>
            </TiltCard>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact onClick={() => setOpen(true)} />
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
