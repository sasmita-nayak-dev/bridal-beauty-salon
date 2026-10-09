import { offers } from "@/data/offers";
import { salon } from "@/data/salon";
import { OfferCard } from "@/components/offers/offer-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SignatureCta } from "@/components/home/signature-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Offers & Packages",
  description:
    "Seasonal offers and curated packages for bridal, party and skincare services. Enquire on WhatsApp to confirm details.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <>
      <section className="section-y bg-cream pb-0 sm:pb-0 lg:pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Offers & Packages"
            title="Curated for the Season"
            description="Thoughtful packages and seasonal offers. Details, availability and final pricing are confirmed with the studio when you enquire."
          />
        </div>
      </section>

      <section aria-label="Current offers" className="section-y bg-cream pt-14 sm:pt-16 lg:pt-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-2">
            {offers.map((offer, i) => (
              <Reveal key={offer.id} delay={(i % 2) * 0.1} className="h-full">
                <OfferCard offer={offer} />
              </Reveal>
            ))}
          </div>
          {salon.isDemo && (
            <p className="mx-auto mt-12 max-w-xl text-center text-xs text-espresso-soft">
              Every offer, price and condition on this page is demonstration
              content. Replace it with the studio&apos;s real offers in{" "}
              <code>src/data/offers.ts</code>.
            </p>
          )}
        </div>
      </section>

      <SignatureCta
        eyebrow="Questions?"
        title="Not Sure Which Offer Suits You?"
        description="Tell us about your occasion and we will recommend the right option."
        label="Ask on WhatsApp"
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
