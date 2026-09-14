import { UserRound } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const SLOTS = [1, 2, 3];

export function Trainers() {
  return (
    <Section id="trainers" tone="white">
      <div className="max-w-2xl">
        <Eyebrow>Our Team</Eyebrow>
        <Heading>Expert trainers.</Heading>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Trainer details are added by the institute. Replace each placeholder below with a real
          photo, name, qualification, specialisation and short bio.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SLOTS.map((n) => (
          <article key={n} className="border border-border bg-background transition-shadow hover:shadow-[0_24px_50px_-34px_var(--navy)]">
            <div className="grid aspect-[4/5] place-items-center border-b border-border bg-secondary">
              <div className="text-center">
                <UserRound className="mx-auto size-10 text-gold" aria-hidden />
                <p className="eyebrow mt-3 text-muted-foreground">[TRAINER PHOTO]</p>
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                [TRAINER NAME]
              </h3>
              <p className="eyebrow mt-2 text-gold">[QUALIFICATION]</p>
              <p className="mt-4 text-sm text-foreground/80">
                Specialisation: <span className="font-medium">[SPECIALISATION]</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">[TRAINER BIO]</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
