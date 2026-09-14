import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const COURSES = [
  {
    name: "IELTS Academic & General",
    desc: "Complete paper-based preparation for study, work and migration pathways.",
    points: ["Listening, Reading, Writing, Speaking modules", "Task-type strategies", "Guided writing correction"],
  },
  {
    name: "Computer Delivered IELTS",
    desc: "Exam preparation adapted to the on-screen test format and timing.",
    points: ["On-screen practice sessions", "Typing & navigation skills", "CD-format mock tests"],
  },
  {
    name: "PTE",
    desc: "Structured coaching for the computer-based PTE Academic test.",
    points: ["Speaking & writing templates", "Integrated task practice", "Scored practice attempts"],
  },
  {
    name: "Spoken English",
    desc: "Everyday fluency for interviews, workplaces and daily conversation.",
    points: ["Grammar in use", "Pronunciation & clarity", "Daily speaking activities"],
  },
  {
    name: "Computer Courses",
    desc: "Practical digital skills for study, office work and online exams.",
    points: ["Basics & typing", "Office applications", "Internet & email essentials"],
  },
  {
    name: "International Online Courses",
    desc: "Live online batches for students learning from outside Banga.",
    points: ["Live interactive classes", "Shared study material", "Flexible batch options"],
  },
];

export function Courses() {
  return (
    <Section id="courses" tone="light">
      <div className="max-w-2xl">
        <Eyebrow>Our Programmes</Eyebrow>
        <Heading>Courses designed for clear outcomes.</Heading>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <article
            key={c.name}
            className="group flex flex-col border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_24px_50px_-32px_var(--navy)]"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-[family-name:var(--font-display)] text-xl leading-snug font-semibold text-navy">
                {c.name}
              </h3>
              <ArrowUpRight className="mt-1 size-5 shrink-0 text-gold opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

            <ul className="mt-5 space-y-2 text-sm text-foreground/80">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>

            <dl className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-5 text-[0.65rem] tracking-[0.12em] uppercase">
              <div>
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="mt-1 font-semibold text-navy">[COURSE DURATION]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Fee</dt>
                <dd className="mt-1 font-semibold text-navy">[COURSE FEE]</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Batch</dt>
                <dd className="mt-1 font-semibold text-navy">[BATCH TIMING]</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
