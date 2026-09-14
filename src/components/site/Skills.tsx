import { Headphones, BookOpen, PenLine, Mic } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const SKILLS = [
  { icon: Headphones, name: "Listening", body: "Accent familiarity, note-taking and question-type accuracy." },
  { icon: BookOpen, name: "Reading", body: "Skimming, scanning and time control across passage types." },
  { icon: PenLine, name: "Writing", body: "Task structure, coherence and vocabulary with written feedback." },
  { icon: Mic, name: "Speaking", body: "Fluency, pronunciation and confident part-by-part responses." },
];

const PIPELINE = ["Learn", "Practise", "Mock Test", "Feedback", "Improve"];

export function Skills() {
  return (
    <Section id="skills" tone="navy">
      <div className="max-w-2xl">
        <Eyebrow>The Four Modules</Eyebrow>
        <Heading className="text-white">Every IELTS skill, trained deliberately.</Heading>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s) => (
          <article
            key={s.name}
            className="border border-white/12 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-gold/60"
          >
            <s.icon className="size-7 text-gold" aria-hidden />
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
              {s.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{s.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-white/12 pt-12">
        <p className="eyebrow text-gold">How Preparation Progresses</p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PIPELINE.map((step, i) => (
            <li key={step} className="relative flex items-center gap-4 bg-white/[0.04] px-5 py-4">
              <span className="font-[family-name:var(--font-display)] text-2xl leading-none text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium tracking-wide text-white">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
