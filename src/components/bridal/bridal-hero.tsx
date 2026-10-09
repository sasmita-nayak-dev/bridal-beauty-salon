import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ButtonLink } from "@/components/ui/button";
import { salon } from "@/data/salon";
import type { ImageAsset } from "@/types";

const image: ImageAsset = {
  src: "/images/bridal-hero.svg",
  alt: "Editorial bridal portrait (placeholder artwork; replace with a licensed or salon-owned photograph)",
  width: 1000,
  height: 1250,
};

const details = ["Personal consultation", "Optional trial", "Draping assistance"];

export function BridalHero() {
  return (
    <section className="relative isolate overflow-hidden bg-espresso text-ivory">
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-4 -z-10 select-none font-serif text-[9rem] italic leading-none text-gold/10 sm:text-[16rem] lg:text-[22rem]"
      >
        Bridal
      </span>
      <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:min-h-[48rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-24">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow text-gold">The Bridal Atelier</p>
            <h1 className="mt-6 font-serif text-[2.9rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Every Bride Deserves a Look{" "}
              <em className="font-normal text-blush">Made Only for Her.</em>
            </h1>
            <span className="gold-rule mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
              From the first consultation to the final touch on your wedding
              morning, we shape bridal beauty around your outfit, your
              traditions and the way you wish to feel.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/75">
              {details.map((d) => (
                <li key={d} className="flex items-center gap-2">
                  <span aria-hidden className="text-gold">
                    ✦
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#packages" variant="light" size="lg">
                View Bridal Packages
              </ButtonLink>
              <WhatsAppButton
                message={salon.whatsappMessages.bridal}
                label="Enquire on WhatsApp"
                variant="outline"
                size="lg"
                className="border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso"
              />
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-2 -translate-x-2 translate-y-2 border border-gold/70 sm:-inset-4 sm:-translate-x-4 sm:translate-y-4"
            />
            <div className="relative h-full w-full overflow-hidden bg-blush">
              <SmartImage
                image={image}
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
