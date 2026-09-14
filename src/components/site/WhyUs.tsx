import { Users, UserCheck, Lightbulb, Repeat, ClipboardCheck, Library, MessagesSquare } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const FEATURES = [
  { icon: Users, title: "Expert Trainers", body: "Sessions led by trainers who teach the exam and the language, not just the answers." },
  { icon: UserCheck, title: "Personalised Attention", body: "Focused batches so every student's weak areas actually get addressed." },
  { icon: Lightbulb, title: "Practical Learning", body: "Concepts applied immediately through tasks, discussion and usage." },
  { icon: Repeat, title: "Regular Practice", body: "Consistent daily practice that turns preparation into habit." },
  { icon: ClipboardCheck, title: "Mock Tests", body: "Full-length practice under exam-like conditions, followed by review." },
  { icon: Library, title: "Study Material", body: "Organised material for each module so students always know what to revise." },
];

export function WhyUs() {
  return (
    <Section id="why-us" tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Why Touchwood</Eyebrow>
        <Heading>Six reasons students stay with us.</Heading>
      </div>

      <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <article key={f.title} className="group bg-background p-8 transition-colors hover:bg-secondary">
            <f.icon className="size-7 text-gold" aria-hidden />
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-5 border border-gold/40 bg-navy p-8 sm:flex-row sm:items-center md:p-10">
        <MessagesSquare className="size-8 shrink-0 text-gold" aria-hidden />
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            Fluency Focused
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Whatever the course, the goal is the same — students who can use English naturally,
            under pressure and in real conversation.
          </p>
        </div>
      </div>
    </Section>
  );
}
