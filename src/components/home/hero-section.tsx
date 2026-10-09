import { ButtonLink } from "@/components/ui/button";
import { SmartImage } from "@/components/shared/smart-image";
import { Reveal } from "@/components/shared/reveal";
import type { ImageAsset } from "@/types";

const heroImage: ImageAsset = {
  src: "https://drive.usercontent.google.com/download?id=1fka2gkz5zoN1cx2DC5OcSDP3JS3x0gsT&export=view",
  alt: "Bridal beauty portrait",
  width: 1000,
  height: 1250,
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:min-h-[44rem] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow">The Art of Bridal Beauty</p>
            <h1 className="mt-6 font-serif text-[2.9rem] font-medium leading-[1.04] tracking-tight text-espresso sm:text-6xl lg:text-7xl">
              Your Most Beautiful Chapter{" "}
              <em className="font-normal text-rose-deep">Begins Here.</em>
            </h1>
            <span className="gold-rule mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-espresso-soft sm:text-lg">
              Thoughtfully curated bridal makeup and beauty experiences designed
              to celebrate your individuality, your traditions, and your most
              unforgettable moments.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/bridal" size="lg">
                Explore Bridal Packages
              </ButtonLink>
              <ButtonLink href="/gallery" variant="outline" size="lg">
                Discover Our Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-2 translate-y-2 border border-gold/60 sm:-inset-4 sm:translate-x-4 sm:translate-y-4"
            />
            <div className="relative h-full w-full overflow-hidden bg-blush">
              <SmartImage
                image={heroImage}
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
