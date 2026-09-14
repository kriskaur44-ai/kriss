import { UserRound } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const TRAINERS = [
  {
    name: "Ajay Arora",
    qualification: "Certified IELTS Expert",
    specialisation: "IELTS & PTE Coaching",
    bio: "Education, Accountancy & Taxation",
    focus: "Student Success | Quality Education | Global Opportunities",
  },
  {
    name: "Advocate Amandeep Kaur",
    qualification: "Law Graduate, IELTS Specialist",
    specialisation: "Professional English & Exam Prep",
    bio: "Educationist (National & International)",
    focus: "Student Success | Quality Education | Global Opportunities",
  },
  {
    name: "Jyoti",
    qualification: "B.A. English Honors",
    specialisation: "Spoken English & Communication",
    bio: "Spoken English & Writing Specialist",
    focus: "Writing & Speaking",
  },
  {
    name: "Krispreet Kaur",
    qualification: "TEFL Certified",
    specialisation: "Language Skills Development",
    bio: "Communication & Fluency | Reading Specialist",
    focus: "Score Building & Skill Mastery",
  },
  {
    name: "Priyanka",
    qualification: "English Graduate",
    specialisation: "Writing & Grammar",
    bio: "PTE English Proficiency Specialist",
    focus: "Reading & Writing",
  },
  {
    name: "Khushboo",
    qualification: "Communication Specialist",
    specialisation: "Listening & Pronunciation",
    bio: "Computer Skills & IT Trainer",
    focus: "Technology & Digital Learning",
  },
];

export function Trainers() {
  return (
    <Section id="trainers" tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Our Team</Eyebrow>
        <Heading>Expert trainers.</Heading>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Our team of experienced professionals brings decades of expertise in English language training and exam preparation.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TRAINERS.map((trainer) => (
          <article key={trainer.name} className="border border-border bg-background transition-shadow hover:shadow-[0_24px_50px_-34px_var(--navy)]">
            <div className="p-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                {trainer.name}
              </h3>
              <p className="mt-4 text-base font-semibold leading-relaxed text-gold">{trainer.bio}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">Focus: {trainer.focus}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
