import { services } from "@/data/services";
import { salon } from "@/data/salon";
import { ServiceCard } from "@/components/services/service-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { SignatureCta } from "@/components/home/signature-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Bridal, engagement, reception and party makeup, hair styling and skincare. Browse services with sample prices and approximate durations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream pb-6 pt-16 sm:pt-20 lg:pt-28">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Our Services"
            title="Beauty for Every Occasion"
            description="From the wedding morning to an evening out, every service is shaped around you. Prices and durations below are illustrative samples."
          />
        </div>
      </section>

      <section aria-labelledby="catalog-heading" className="section-y bg-cream pt-12 sm:pt-16 lg:pt-20">
        <div className="container-page">
          <h2 id="catalog-heading" className="sr-only">
            Service catalog
          </h2>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1} className="h-full">
                <ServiceCard service={service} variant="detailed" />
              </Reveal>
            ))}
          </div>
          {salon.isDemo && (
            <p className="mx-auto mt-14 max-w-xl text-center text-xs text-espresso-soft">
              All prices and durations are demonstration samples. Each studio
              sets its own price list, and final pricing is confirmed on
              enquiry.
            </p>
          )}
        </div>
      </section>

      <SignatureCta
        eyebrow="Plan Your Visit"
        title="Not Sure Where to Begin?"
        description="Tell us about your occasion and we will suggest the right services for you."
        label="Ask on WhatsApp"
        secondary={{ label: "Try the Booking Demo", href: "/book" }}
      />
    </>
  );
}
