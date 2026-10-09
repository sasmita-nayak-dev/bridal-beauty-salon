import { services } from "@/data/services";
import { ServiceCard } from "@/components/services/service-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section id="services" className="section-y bg-ivory">
      <div className="container-page">
        <SectionHeading
          eyebrow="Signature Services"
          title="Beauty, Curated for You"
          description="Discover thoughtfully designed beauty experiences for every occasion."
        />
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
        <div className="mt-16 text-center">
          <ButtonLink href="/services" variant="outline">
            View All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
