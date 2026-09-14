import heroImg from "@/assets/hero.jpg";
import { GoldButton, OutlineButton } from "./primitives";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Classroom at Touchwood IELTS & Spoken Institute"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,var(--navy-deep)_10%,color-mix(in_oklab,var(--navy)_88%,transparent)_55%,color-mix(in_oklab,var(--navy-deep)_75%,transparent)_100%)]" />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 pb-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">
            <span className="mr-3 inline-block h-px w-10 translate-y-[-3px] bg-gold align-middle" />
            Banga, Punjab · India
          </p>
          <h1 className="mt-7 font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build Your English.
            <span className="block text-gold">Achieve Your Goals.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Focused coaching in IELTS, PTE, Spoken English and Computer Courses — guided
            preparation, regular practice and honest feedback at every step.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] font-semibold tracking-[0.18em] text-white/70 uppercase">
            {["IELTS", "PTE", "Spoken English", "Computer Courses"].map((t, i) => (
              <li key={t} className="flex items-center gap-4">
                {i > 0 && <span className="size-1 rounded-full bg-gold" aria-hidden />}
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <GoldButton href="#contact">Enquire Now</GoldButton>
            <OutlineButton href="#courses" dark>
              Explore Courses
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
