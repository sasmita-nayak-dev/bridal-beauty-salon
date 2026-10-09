"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";
import { salon } from "@/data/salon";

type GalleryLightboxProps = {
  items: GalleryItem[];
  /** Index into `items`, or null when closed */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

/**
 * Image preview built on the native <dialog> element: focus is trapped,
 * Escape closes it, the page behind is inert and focus returns to the
 * thumbnail that opened it. Arrow keys move between images.
 */
export function GalleryLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const item = index !== null ? items[index] : undefined;
  const total = items.length;

  const go = (direction: 1 | -1) => {
    if (index === null || total < 2) return;
    onIndexChange((index + direction + total) % total);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label="Image preview"
      onClose={onClose}
      onClick={(e) => {
        // A click on the backdrop targets the dialog element itself
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
      }}
      className="m-auto max-h-dvh w-[min(64rem,100vw)] max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-espresso/90"
    >
      {item && (
        <div className="flex max-h-dvh flex-col bg-ivory">
          <div className="flex items-center justify-between gap-4 border-b border-gold/30 px-4 py-3 sm:px-6">
            <p className="text-sm text-espresso" aria-live="polite">
              <span className="eyebrow">{item.category}</span>
              <span className="ml-3 text-espresso-soft">
                {(index ?? 0) + 1} of {total}
              </span>
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex size-11 items-center justify-center rounded-full border border-espresso/25 text-espresso transition-colors hover:border-rose-deep hover:text-rose-deep"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center bg-cream p-3 sm:p-8">
            <SmartImage
              key={item.id}
              image={item.image}
              fill={false}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto max-h-[62dvh] w-auto max-w-full animate-fade-up object-contain"
            />
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-espresso shadow transition-colors hover:text-rose-deep sm:left-4"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/95 text-espresso shadow transition-colors hover:text-rose-deep sm:right-4"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </>
            )}
          </div>

          <div className="border-t border-gold/30 px-4 py-4 sm:px-6">
            <p className="font-serif text-xl text-espresso">
              {item.caption ?? item.image.alt}
            </p>
            {!item.isSalonWork && salon.isDemo && (
              <p className="mt-1 text-xs text-espresso-soft">
                Demonstration artwork. Real studio photography replaces this
                image for each client.
              </p>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
