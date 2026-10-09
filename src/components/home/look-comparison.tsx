import { lookComparison } from "@/data/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal } from "@/components/shared/reveal";

/**
 * Two separate looks shown side by side. These are NOT before/after images of
 * one client. When the salon supplies genuine paired photos, swap this for a
 * drag slider in Part 2.
 */
export function LookComparison() {
  const looks = [lookComparison.a, lookComparison.b];
  return (
    <section className="section-y bg-ivory">
      <div className="container-page">
        <SectionHeading
          eyebrow="Two Moods"
          title="Soft Glam or Classic Bridal"
          description="Two distinct approaches to bridal beauty. Every look is tailored to the individual."
        />
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
          {looks.map((look, i) => (
            <Reveal key={look.label} delay={i * 0.12}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden bg-blush/40">
                  <SmartImage
                    image={look.image}
                    sizes="(min-width: 896px) 420px, 92vw"
                  />
                </div>
                <figcaption className="mt-4 text-center font-serif text-2xl text-espresso">
                  {look.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-espresso-soft">
          Illustrative placeholders. These are two separate looks, not a
          before-and-after of the same client.
        </p>
      </div>
    </section>
  );
}
