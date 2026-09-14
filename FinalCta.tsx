import { GoldButton, OutlineButton } from "./primitives";

export function FinalCta() {
  return (
    <section className="bg-navy-deep px-5 py-24 text-center sm:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <span className="gold-rule mx-auto" aria-hidden />
        <h2 className="mt-8 font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold text-white sm:text-5xl">
          Your next step starts today.
        </h2>
        <p className="mt-6 leading-relaxed text-white/65">
          Tell us your goal and we will help you choose the right course and batch.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <GoldButton href="#contact">Enquire Now</GoldButton>
          <OutlineButton href="https://wa.me/[WHATSAPP_NUMBER]" dark>
            Chat on WhatsApp
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
