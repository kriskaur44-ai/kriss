import { MapPin } from "lucide-react";
import { GoldButton } from "./primitives";

export function MapSection() {
  return (
    <section id="location" aria-label="Location" className="scroll-mt-24 bg-background">
      <div className="grid min-h-[22rem] place-items-center border-y border-border bg-secondary px-5 py-20 text-center">
        <div className="max-w-md">
          <MapPin className="mx-auto size-9 text-gold" aria-hidden />
          <p className="eyebrow mt-5 text-muted-foreground">[GOOGLE MAPS EMBED URL]</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-navy">
            Visit us in Banga, Punjab
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">[FULL ADDRESS]</p>
          <div className="mt-8">
            <GoldButton href="[GOOGLE MAPS EMBED URL]">Get Directions</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
