import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Trainers", href: "#trainers" },
  { label: "Why Us", href: "#why-us" },
  { label: "Journey", href: "#journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300",
        scrolled ? "bg-navy/95 shadow-lg" : "bg-navy/55",
      )}

    >
      <nav
        aria-label="Main"
        className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#home" className="min-w-0 leading-tight">
          <span className="block font-[family-name:var(--font-display)] text-base font-semibold tracking-wide text-white sm:text-lg">
            TOUCHWOOD
          </span>
          <span className="eyebrow block text-[0.55rem] text-gold sm:text-[0.6rem]">
            IELTS &amp; Spoken Institute
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.72rem] font-medium tracking-[0.12em] text-white/80 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold px-5 py-3 text-[0.68rem] font-semibold tracking-[0.16em] text-navy-deep uppercase transition-colors hover:bg-gold-soft"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-2 text-white xl:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/10 bg-navy/97 px-5 pb-8 backdrop-blur-xl xl:hidden"
      >
        <ul className="flex flex-col">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/8 py-3.5 text-sm tracking-[0.1em] text-white/85 uppercase hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 block bg-gold py-3.5 text-center text-[0.7rem] font-semibold tracking-[0.18em] text-navy-deep uppercase"
        >
          Enquire Now
        </a>
      </div>
    </header>
  );
}
