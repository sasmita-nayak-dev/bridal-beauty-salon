import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/home/testimonial-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

export function TestimonialsSection() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page">
        <SectionHeading eyebrow="Kind Words" title="Words That Mean Everything" />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1} className="h-full">
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
