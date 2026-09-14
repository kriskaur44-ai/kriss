import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  tone = "white",
  className,
  children,
}: {
  id?: string;
  tone?: "white" | "light" | "navy";
  className?: string;
  children: ReactNode;
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy text-white"
      : tone === "light"
        ? "bg-secondary text-foreground"
        : "bg-background text-foreground";

  return (
    <section id={id} className={cn("scroll-mt-24 px-5 py-20 sm:px-8 md:py-28", toneClass, className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={cn("eyebrow", dark ? "text-gold" : "text-gold")}>
      <span className="mr-3 inline-block h-px w-8 translate-y-[-3px] bg-gold align-middle" />
      {children}
    </p>
  );
}

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "mt-5 text-3xl leading-[1.15] font-semibold tracking-tight sm:text-4xl md:text-5xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function GoldButton({
  href,
  children,
  className,
  type,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-deep uppercase transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_10px_30px_-12px_var(--gold)]",
    className,
  );
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function OutlineButton({
  href,
  children,
  dark = false,
  className,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300",
        dark
          ? "border-white/35 text-white hover:border-gold hover:text-gold"
          : "border-navy/25 text-navy hover:border-gold hover:text-navy",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[2px] bg-gold/12 px-1.5 py-0.5 font-medium text-gold-soft/90 mix-blend-normal">
      {children}
    </span>
  );
}
