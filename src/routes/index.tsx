import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { About } from "@/components/site/About";
import { Courses } from "@/components/site/Courses";
import { Skills } from "@/components/site/Skills";
import { WhyUs } from "@/components/site/WhyUs";
import { Journey } from "@/components/site/Journey";
import { Trainers } from "@/components/site/Trainers";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { ContactInfo } from "@/components/site/ContactInfo";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

const TITLE = "Touchwood IELTS & Spoken Institute — Banga, Punjab";
const DESCRIPTION =
  "IELTS, Computer Delivered IELTS, PTE, Spoken English and Computer Courses in Banga, Punjab. Structured preparation, mock tests and personal attention.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <About />
        <Courses />
        <Skills />
        <WhyUs />
        <Journey />
        <Trainers />
        <Testimonials />
        <Gallery />
        <Faq />
        <ContactInfo />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
