const SITE_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Journey", href: "#journey" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const COURSE_LINKS = [
  "IELTS Academic & General",
  "Computer Delivered IELTS",
  "PTE",
  "Spoken English",
  "Computer Courses",
  "International Online Courses",
];

const SOCIALS = ["[FACEBOOK URL]", "[INSTAGRAM URL]", "[YOUTUBE URL]"];

export function Footer() {
  return (
    <footer className="bg-navy px-5 pt-20 pb-10 text-white/70 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
            TOUCHWOOD
          </p>
          <p className="eyebrow mt-1 text-gold">IELTS &amp; Spoken Institute</p>
          <p className="mt-5 text-sm leading-relaxed">
            IELTS, PTE, Spoken English and Computer Courses in Banga, Punjab — structured
            preparation with personal attention.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-white">Explore</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {SITE_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-white">Courses</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {COURSE_LINKS.map((c) => (
              <li key={c}>
                <a href="#courses" className="transition-colors hover:text-gold">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-white">Contact</h2>
          <ul className="mt-5 space-y-2.5 text-sm break-words">
            <li>[PHONE NUMBER]</li>
            <li>[WHATSAPP NUMBER]</li>
            <li>[EMAIL ADDRESS]</li>
            <li>[FULL ADDRESS]</li>
          </ul>
          <h2 className="eyebrow mt-8 text-white">Social</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s}>
                <a href={s} className="transition-colors hover:text-gold">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-6xl border-t border-white/12 pt-6 text-xs">
        <p>© {new Date().getFullYear()} Touchwood IELTS &amp; Spoken Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}
