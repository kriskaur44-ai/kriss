import { Quote } from "lucide-react";
import { Eyebrow, Heading, Section } from "./primitives";

const SLOTS = [1, 2, 3];

export function Testimonials() {
  return (
    <Section id="testimonials" tone="navy">
      <div className="max-w-2xl">
        <Eyebrow>Student Voices</Eyebrow>
        <Heading className="text-white">In their own words.</Heading>
        <p className="mt-6 leading-relaxed text-white/65">
          Only verified student feedback will be published here. Each card below is a placeholder
          waiting for a real testimonial.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {SLOTS.map((n) => (
          <figure key={n} className="flex h-full flex-col border border-white/12 bg-white/[0.04] p-8">
            <Quote className="size-8 text-gold" aria-hidden />
            <blockquote className="mt-6 flex-1 leading-relaxed text-white/80">
              &ldquo;[REAL STUDENT TESTIMONIAL TO BE ADDED]&rdquo;
            </blockquote>
            <figcaption className="mt-7 border-t border-white/12 pt-5">
              <span className="block font-[family-name:var(--font-display)] text-lg text-white">
                [STUDENT NAME]
              </span>
              <span className="eyebrow mt-1 block text-gold">[COURSE]</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
