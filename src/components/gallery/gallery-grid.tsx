"use client";

import { useState } from "react";
import { Expand } from "lucide-react";
import type { GalleryCategory, GalleryItem } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { cn } from "@/lib/utils";

type Filter = "All" | GalleryCategory;

type GalleryGridProps = {
  items: GalleryItem[];
  /** Categories that get a filter button (when `showFilters` is true) */
  filters?: GalleryCategory[];
  showFilters?: boolean;
  className?: string;
};

/** Masonry-style gallery with client-side category filters and a lightbox. */
export function GalleryGrid({
  items,
  filters = [],
  showFilters = true,
  className,
}: GalleryGridProps) {
  const [active, setActive] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const available = filters.filter((c) => items.some((i) => i.category === c));
  const visible =
    active === "All" ? items : items.filter((i) => i.category === active);

  const select = (filter: Filter) => {
    setActive(filter);
    setOpenIndex(null);
  };

  return (
    <div className={className}>
      {showFilters && available.length > 0 && (
        <div
          role="group"
          aria-label="Filter gallery by category"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {(["All", ...available] as Filter[]).map((filter) => {
            const pressed = active === filter;
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={pressed}
                onClick={() => select(filter)}
                className={cn(
                  "inline-flex h-11 items-center rounded-full border px-6 text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-colors",
                  pressed
                    ? "border-espresso bg-espresso text-ivory"
                    : "border-espresso/30 text-espresso hover:border-rose-deep hover:text-rose-deep",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}

      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "image" : "images"}
        {active === "All" ? "" : ` in ${active}`}.
      </p>

      <ul
        className={cn(
          "columns-2 gap-3 sm:gap-4 lg:columns-3",
          showFilters && available.length > 0 && "mt-10",
        )}
      >
        {visible.map((item, i) => (
          <li
            key={`${active}-${item.id}`}
            className="mb-3 break-inside-avoid animate-fade-up sm:mb-4"
            style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              aria-label={`Open larger preview: ${item.caption ?? item.image.alt}`}
              className="group relative block w-full overflow-hidden bg-blush/40 text-left"
            >
              <span
                className="relative block w-full"
                style={{
                  aspectRatio: `${item.image.width} / ${item.image.height}`,
                }}
              >
                <SmartImage
                  image={item.image}
                  sizes="(min-width: 1024px) 30vw, 46vw"
                  className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/15 group-focus-visible:bg-espresso/15"
              />
              <span className="absolute bottom-3 left-3 bg-ivory/95 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-espresso">
                {item.category}
              </span>
              <span
                aria-hidden
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-ivory/95 text-espresso opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <Expand className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <GalleryLightbox
        items={visible}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </div>
  );
}
