import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col border border-gold/30 bg-ivory p-8 sm:p-10">
      <Quote className="size-8 text-gold" strokeWidth={1.2} aria-hidden />
      <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-espresso sm:text-2xl">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-8 border-t border-gold/30 pt-5">
        <p className="text-sm font-medium text-espresso">{testimonial.author}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">
          {testimonial.context}
        </p>
        {testimonial.isPlaceholder && (
          <p className="mt-3 inline-block bg-cream px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-espresso-soft">
            Demo placeholder, not a genuine review
          </p>
        )}
      </figcaption>
    </figure>
  );
}
