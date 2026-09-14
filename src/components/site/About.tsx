import aboutImg from "@/assets/hero-1.jpeg";
import { Eyebrow, Heading, Section } from "./primitives";

const PILLARS = [
  {
    title: "Personalised Guidance",
    body: "Teaching adapted to each student's current level, target and pace.",
  },
  {
    title: "Practical Learning",
    body: "Sessions built around real usage — speaking, writing and applied tasks.",
  },
  {
    title: "Structured Preparation",
    body: "A clear module-by-module path so nothing important is left to chance.",
  },
  {
    title: "Confidence Building",
    body: "Regular practice and supportive feedback so students speak without hesitation.",
  },
];

export function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -top-5 -left-5 hidden size-32 border-t-2 border-l-2 border-gold lg:block" />
          <img
            src={aboutImg}
            alt="Students preparing at the institute"
            loading="lazy"
            width={1200}
            height={1400}
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <Eyebrow>About the Institute</Eyebrow>
          <Heading>An institute built around the student, not the syllabus.</Heading>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Touchwood IELTS &amp; Spoken Institute in Banga, Punjab supports learners preparing
            for international exams and those who simply want to speak English with confidence.
            Every batch is kept focused so trainers can give attention where it is needed most.
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-background p-6">
                <dt className="font-[family-name:var(--font-display)] text-lg font-semibold text-navy">
                  {p.title}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
