import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";
import type { ImageAsset } from "@/types";

const image: ImageAsset = {
  src: "/images/bridal-feature.svg",
  alt: "Bridal styling session (placeholder artwork; replace with a licensed photograph)",
  width: 1000,
  height: 1250,
};

const steps = [
  "Personal consultations",
  "Bridal look planning",
  "Makeup and hairstyling",
  "Optional trials",
];

export function BridalFeature() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden lg:max-w-none">
            <SmartImage image={image} sizes="(min-width: 1024px) 45vw, 90vw" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">The Bridal Experience</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
            More Than Makeup. <em className="text-rose-deep">A Memory in the Making.</em>
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-lg text-base leading-relaxed text-espresso-soft sm:text-lg">
            Your bridal journey begins long before the wedding morning. We take
            the time to understand your vision, your outfit and your
            traditions, then shape a look that feels unmistakably yours.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-3">
                <span className="font-serif text-lg text-gold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-espresso">{step}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/bridal" size="lg" className="mt-10">
            Discover the Bridal Experience
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
