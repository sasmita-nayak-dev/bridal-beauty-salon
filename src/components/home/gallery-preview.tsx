import { galleryItems } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";
import { salon } from "@/data/salon";

/** Ordered so each desktop row (6 columns) is filled: 2+4, 4+2, 2+2+2 */
const previewOrder = ["g1", "g2", "g5", "g3", "g4", "g6", "g7"];
const preview = previewOrder
  .map((id) => galleryItems.find((item) => item.id === id))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function GalleryPreview() {
  return (
    <section id="portfolio" className="section-y bg-cream">
      <div className="container-page">
        <SectionHeading
          eyebrow="Bridal Portfolio"
          title="Every Bride, Her Own Story"
          description="A glimpse of the looks we love to create, from timeless classics to modern, luminous finishes."
        />
        <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[26rem] lg:grid-cols-6">
          {preview.map((item, i) => {
            const landscape = item.image.width > item.image.height;
            return (
              <li
                key={item.id}
                className={
                  landscape
                    ? "col-span-2 lg:col-span-4"
                    : "col-span-1 lg:col-span-2"
                }
              >
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <figure
                    className={`group relative h-full overflow-hidden bg-blush/40 lg:aspect-auto ${
                      landscape ? "aspect-[3/2]" : "aspect-[4/5]"
                    }`}
                  >
                    <SmartImage
                      image={item.image}
                      sizes={
                        landscape
                          ? "(min-width: 1024px) 64vw, 92vw"
                          : "(min-width: 1024px) 30vw, 46vw"
                      }
                      className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <figcaption className="absolute bottom-3 left-3 bg-ivory/95 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-espresso sm:bottom-4 sm:left-4">
                      {item.category}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
        {salon.isDemo && (
          <p className="mt-6 text-center text-xs text-espresso-soft">
            Demonstration artwork shown. Real client photography replaces these
            images for each studio.
          </p>
        )}
        <div className="mt-10 text-center">
          <ButtonLink href="/gallery" size="lg">
            View Full Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
