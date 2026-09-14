import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, Section } from "./primitives";

const FILTERS = ["All", "Classrooms", "Sessions", "Events", "Campus"] as const;
type Filter = (typeof FILTERS)[number];

const ITEMS: { id: number; category: Exclude<Filter, "All">; ratio: string }[] = [
  { id: 1, category: "Classrooms", ratio: "aspect-[4/5]" },
  { id: 2, category: "Sessions", ratio: "aspect-square" },
  { id: 3, category: "Events", ratio: "aspect-[4/3]" },
  { id: 4, category: "Campus", ratio: "aspect-[4/5]" },
  { id: 5, category: "Sessions", ratio: "aspect-[4/3]" },
  { id: 6, category: "Classrooms", ratio: "aspect-square" },
  { id: 7, category: "Events", ratio: "aspect-[4/5]" },
  { id: 8, category: "Campus", ratio: "aspect-[4/3]" },
];

export function Gallery() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <Section id="gallery" tone="white">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-2xl">
          <Eyebrow>Inside Touchwood</Eyebrow>
          <Heading>A look around the institute.</Heading>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "border px-4 py-2 text-[0.65rem] font-semibold tracking-[0.16em] uppercase transition-colors",
                active === f
                  ? "border-gold bg-gold text-navy-deep"
                  : "border-border text-muted-foreground hover:border-gold hover:text-navy",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {visible.map((item) => (
          <figure
            key={item.id}
            className={cn(
              "group relative grid break-inside-avoid place-items-center overflow-hidden border border-border bg-secondary",
              item.ratio,
            )}
          >
            <div className="text-center transition-transform duration-500 group-hover:scale-105">
              <ImageIcon className="mx-auto size-8 text-gold" aria-hidden />
              <figcaption className="eyebrow mt-3 text-muted-foreground">
                [GALLERY IMAGE — {item.category}]
              </figcaption>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/70" />
            <span className="pointer-events-none absolute bottom-5 left-5 text-[0.65rem] font-semibold tracking-[0.18em] text-white uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.category}
            </span>
          </figure>
        ))}
      </div>
    </Section>
  );
}
