import { Plus } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const FAQS = [
  {
    q: "Which IELTS formats do you prepare students for?",
    a: "We prepare students for IELTS Academic and General Training, covering all four modules — Listening, Reading, Writing and Speaking.",
  },
  {
    q: "What is Computer Delivered IELTS and do you coach for it?",
    a: "Computer Delivered IELTS is the on-screen version of the test. We run practice sessions in the same format so students are comfortable with screen reading, typing and on-screen timing.",
  },
  {
    q: "Do you offer PTE coaching?",
    a: "Yes. PTE preparation covers the speaking, writing, reading and listening task types of the computer-based test, along with scored practice attempts.",
  },
  {
    q: "I only want to improve my Spoken English. Is that possible?",
    a: "Absolutely. Our Spoken English course is separate from exam preparation and focuses on everyday fluency, grammar in use, pronunciation and confidence.",
  },
  {
    q: "Are mock tests included?",
    a: "Mock tests are a core part of preparation. Students sit full-length practice tests under exam-like conditions and then review the results with a trainer.",
  },
  {
    q: "Where is the institute located?",
    a: "Touchwood IELTS & Spoken Institute is located at Railway Road, Near Punjab and Sindh Bank, Banga Rural, Banga, Punjab 144505.",
  },
  {
    q: "What are the course fees and batch timings?",
    a: "Fees and timings depend on the course selected — [COURSE FEE] and [BATCH TIMING]. Contact us for current details.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="light">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <Heading>Frequently asked.</Heading>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {FAQS.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                <span className="font-[family-name:var(--font-display)] text-lg font-medium text-navy">
                  {f.q}
                </span>
                <Plus
                  className="size-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
