import { Eyebrow, GoldButton, Heading, Section } from "./primitives";

export function Intro() {
  return (
    <Section tone="white" className="text-center">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Welcome to Touchwood</Eyebrow>
        <Heading>Your journey starts with the right guidance.</Heading>
        <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Language learning is personal. Our approach is built on understanding where each
          student stands today, teaching the skills that actually move them forward, and
          creating enough practice and feedback for real confidence to develop. No shortcuts,
          no false promises — just structured preparation and steady progress.
        </p>
        <div className="mt-10">
          <GoldButton href="#about">Discover Touchwood</GoldButton>
        </div>
      </div>
    </Section>
  );
}
