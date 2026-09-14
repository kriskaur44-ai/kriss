import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, Heading, Section } from "./primitives";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";

const FILTERS = ["All"] as const;
type Filter = (typeof FILTERS)[number];

const ITEMS: { id: number; image: string }[] = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
  { id: 7, image: gallery7 },
  { id: 8, image: gallery8 },
  { id: 10, image: gallery10 },
];

export function Gallery() {
  const [active, setActive] = useState<Filter>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const visible = active === "All" ? ITEMS : [];

  const selectedImageData = selectedImage ? ITEMS.find(item => item.id === selectedImage) : null;

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

      {/* Compact Gallery - Full Photos No Cropping */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {visible.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item.id)}
            className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-90"
          >
            <img
              src={item.image}
              alt={`Gallery image ${item.id}`}
              loading="lazy"
              width={600}
              height={600}
              className="w-full h-auto object-contain bg-secondary transition-transform duration-500 group-hover:scale-105 border border-border/30"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="text-white text-[10px] font-medium bg-black/60 px-2 py-0.5 rounded">
                View
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImageData.image}
              alt={`Gallery image ${selectedImageData.id}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="size-6 text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              Click outside to close • Image {selectedImageData.id} of {visible.length}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
