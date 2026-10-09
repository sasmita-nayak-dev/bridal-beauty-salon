import { bridalProcess } from "@/data/packages";
import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";
import type { ImageAsset } from "@/types";

const main: ImageAsset = {
  src: "/images/bridal-detail.svg",
  alt: "Bridal styling detail (placeholder artwork; replace with a licensed or salon-owned photograph)",
  width: 800,
  height: 1000,
};

const accent: ImageAsset = {
  src: "/images/gallery-14.svg",
  alt: "Bridal close-up (placeholder artwork; replace with a licensed or salon-owned photograph)",
  width: 800,
  height: 1000,
};

export function BridalPhilosophy() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative mx-auto w-full max-w-md pb-16 pr-10 lg:max-w-none lg:pr-16">
            <div className="relative aspect-[4/5] overflow-hidden bg-blush/40">
              <SmartImage image={main} sizes="(min-width: 1024px) 40vw, 80vw" />
            </div>
            <div className="absolute bottom-0 right-0 aspect-[4/5] w-2/5 overflow-hidden border-4 border-cream bg-blush/40">
              <SmartImage image={accent} sizes="(min-width: 1024px) 16vw, 32vw" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">Our Bridal Philosophy</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
            A Look That Feels Like You,{" "}
            <em className="text-rose-deep">Only More Radiant.</em>
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-lg text-base leading-relaxed text-espresso-soft sm:text-lg">
            We believe bridal beauty should honour who you are. Rather than
            applying a trend, we listen, plan and shape a look around your
            skin, your outfit and your family&apos;s traditions, so you recognise
            yourself in every photograph.
          </p>

          <ol className="mt-10 space-y-6">
            {bridalProcess.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden
                  className="font-serif text-3xl leading-none text-gold-deep"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-espresso-soft">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
