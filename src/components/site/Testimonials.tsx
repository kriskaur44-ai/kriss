import { useState } from "react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, Section } from "./primitives";

const TESTIMONIALS = [
  {
    name: "Prince",
    course: "Verified Student",
    text: "TOUCH WOOD coaching centre is excellent! They offer multiple facilities, one-on-one mentoring, no extra fees, clean facilities, and high-quality courses. Highly recommended!",
    rating: 5,
  },
  {
    name: "Muskan",
    course: "Verified Student",
    text: "Touch Wood is a highly specialised coaching centre that offers exceptional one-on-one mentoring for students. The clean facilities provide the perfect environment for focused learning. The personalized attention and expert guidance make it an excellent choice for academic success.",
    rating: 5,
  },
  {
    name: "Harkamal Singh",
    course: "Verified Student",
    text: "I am extremely satisfied with TOUCH WOOD Coaching Centres. The prices are reasonable, the classrooms are well-sanitised, and they offer multiple facilities including library access and career counselling. I highly recommend TOUCH WOOD for anyone looking for quality coaching at an affordable price.",
    rating: 5,
  },
  {
    name: "Simranjot Kaur",
    course: "Verified Student",
    text: "I had a fantastic experience at TOUCH WOOD Coaching Centres. The best part is their transparent pricing – no extra fees! The AC classrooms and clean facilities create a conducive learning environment. I highly recommend TOUCH WOOD for anyone seeking quality coaching with excellent amenities.",
    rating: 5,
  },
];

export function Testimonials() {
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setGlowingIndex(index);
    setTimeout(() => setGlowingIndex(null), 1000);
  };

  return (
    <Section id="testimonials" tone="navy">
      <style>{`
        @keyframes glow-pulse {
          0% {
            box-shadow: 0 0 10px rgba(218, 165, 32, 0.3), inset 0 0 10px rgba(218, 165, 32, 0.1);
            border-color: rgba(218, 165, 32, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(218, 165, 32, 0.8), inset 0 0 20px rgba(218, 165, 32, 0.3);
            border-color: rgba(218, 165, 32, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(218, 165, 32, 0.3), inset 0 0 10px rgba(218, 165, 32, 0.1);
            border-color: rgba(218, 165, 32, 0.3);
          }
        }
        .testimonial-glow {
          animation: glow-pulse 1s ease-out;
        }
      `}</style>
      <div className="max-w-2xl">
        <Eyebrow>Student Voices</Eyebrow>
        <Heading className="text-white">In their own words.</Heading>
        <p className="mt-6 leading-relaxed text-white/65">
          Real feedback from our students about their experience at Touchwood IELTS & Spoken Institute.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <figure
            key={testimonial.name}
            onClick={() => handleClick(index)}
            className={cn(
              "flex h-full flex-col border border-white/12 bg-white/[0.04] p-8 cursor-pointer transition-all duration-300",
              glowingIndex === index && "testimonial-glow"
            )}
          >
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <Quote className="mt-4 size-8 text-gold" aria-hidden />
            <blockquote className="mt-6 flex-1 leading-relaxed text-white/80">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <figcaption className="mt-7 border-t border-white/12 pt-5">
              <span className="block font-[family-name:var(--font-display)] text-lg text-white">
                {testimonial.name}
              </span>
              <span className="eyebrow mt-1 block text-gold">{testimonial.course}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
