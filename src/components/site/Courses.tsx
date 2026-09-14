import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const COURSES = [
  {
    name: "IELTS Academic & General",
    desc: "Complete paper-based preparation for study, work and migration pathways.",
    points: ["✓ Online & Offline Available", "Listening, Reading, Writing, Speaking modules", "Task-type strategies", "Guided writing correction"],
  },
  {
    name: "Computer Delivered IELTS",
    desc: "Exam preparation adapted to the on-screen test format and timing.",
    points: ["✓ Online & Offline Available", "On-screen practice sessions", "Typing & navigation skills", "CD-format mock tests"],
  },
  {
    name: "PTE Academic",
    desc: "Structured coaching for the computer-based PTE Academic test.",
    points: ["✓ Online & Offline Available", "Speaking & writing templates", "Integrated task practice", "Scored practice attempts"],
  },
  {
    name: "PTE Core",
    desc: "Preparation for employment and visa requirements with PTE Core.",
    points: ["✓ Online & Offline Available", "Core-specific modules", "Real test format practice", "Migration pathway support"],
  },
  {
    name: "CELPIP",
    desc: "Canadian English Language Proficiency Index Program training.",
    points: ["✓ Online & Offline Available", "Canadian accent & culture", "Listening & speaking focus", "Mock test simulations"],
  },
  {
    name: "TOEFL iBT",
    desc: "Test of English as a Foreign Language preparation for US universities.",
    points: ["✓ Online & Offline Available", "Reading, Writing, Listening, Speaking", "Internet-based test format", "Academic vocabulary building"],
  },
  {
    name: "Duolingo English Test",
    desc: "Quick, convenient English proficiency test preparation.",
    points: ["✓ Online & Offline Available", "Personalized learning path", "Rapid certification (48 hours)", "University acceptance worldwide"],
  },
  {
    name: "Life Skills Levels (A1, A2, B1, B2)",
    desc: "English for everyday situations and European Framework certification.",
    points: ["✓ Online & Offline Available", "A1: Basic survival English", "A2: Elementary proficiency", "B1: Intermediate independence", "B2: Upper-intermediate fluency"],
  },
  {
    name: "Spoken English",
    desc: "Everyday fluency for interviews, workplaces and daily conversation.",
    points: ["✓ Online & Offline Available", "Grammar in use", "Pronunciation & clarity", "Daily speaking activities"],
  },
  {
    name: "Computer Courses",
    desc: "Practical digital skills for study, office work and online exams.",
    points: ["✓ Online & Offline Available", "Basics & typing", "Office applications", "Internet & email essentials"],
  },
  {
    name: "International Online Courses",
    desc: "Live online language and skill courses for national and international students worldwide.",
    points: [
      "French Language Courses (A1-B2)",
      "German Language Courses (A1-B2)",
      "Spanish Language Courses (A1-B2)",
      "Professional English for Work",
      "IELTS/PTE Online Preparation",
      "Live interactive classes with native speakers",
      "Flexible scheduling for global students",
      "Recorded sessions for asynchronous learning"
    ],
  },
  {
    name: "Nanny Course",
    desc: "Professional nanny training for childcare professionals and caregivers worldwide.",
    points: [
      "✓ Online & Offline Available",
      "Child development & care protocols",
      "Safety, health & first aid essentials",
      "Professional communication skills",
      "Activity planning & child engagement"
    ],
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
          </article>
        ))}
      </div>
    </Section>
  );
}
