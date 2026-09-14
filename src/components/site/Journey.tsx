import { Eyebrow, Heading, Section } from "./primitives";

const STEPS = [
  { title: "Assess", body: "A starting-level check to understand current strengths and gaps." },
  { title: "Choose", body: "Selecting the right course, batch and target together." },
  { title: "Learn", body: "Module-wise teaching with clear strategies for each task type." },
  { title: "Practise", body: "Daily exercises, speaking activities and written submissions." },
  { title: "Mock Test", body: "Timed, full-length tests in an exam-like setting." },
  { title: "Improve", body: "Individual feedback and targeted revision of weak areas." },
  { title: "Move Forward", body: "Ready for the exam, the interview or the next opportunity." },
];

export function Journey() {
  return (
    <Section id="journey" tone="light">
      <div className="max-w-2xl">
        <Eyebrow>Student Journey</Eyebrow>
        <Heading>Seven steps from first enquiry to next step.</Heading>
      </div>

      <ol className="mt-14 space-y-0">
        {STEPS.map((s, i) => (
          <li key={s.title} className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-6 pb-10 last:pb-0">
            <div className="relative flex flex-col items-center">
              <span className="grid size-12 shrink-0 place-items-center border border-gold/50 bg-background font-[family-name:var(--font-display)] text-lg font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-navy-deep">
                {i + 1}
              </span>
              {i < STEPS.length - 1 && <span className="mt-2 w-px flex-1 bg-border" aria-hidden />}
            </div>
            <div className="min-w-0 pt-2">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
