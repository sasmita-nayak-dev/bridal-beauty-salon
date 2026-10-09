import { Check } from "lucide-react";
import type { Offer } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { formatINR } from "@/lib/utils";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article
      id={offer.id}
      className="group grid overflow-hidden border border-gold/30 bg-ivory sm:grid-cols-[2fr_3fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-blush/40 sm:aspect-auto sm:min-h-full">
        <SmartImage
          image={offer.image}
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 36vw, 92vw"
          className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col p-7 sm:p-9">
        <p className="eyebrow">{offer.highlight}</p>
        <h3 className="mt-3 font-serif text-3xl font-medium text-espresso">
          {offer.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-espresso-soft">
          {offer.description}
        </p>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">
            Applies to
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {offer.appliesTo.map((service) => (
              <li
                key={service}
                className="flex items-center gap-1.5 bg-cream px-3 py-1.5 text-xs text-espresso"
              >
                <Check className="size-3.5 text-rose-deep" aria-hidden />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {offer.samplePrice !== undefined && (
          <p className="mt-6">
            <span className="font-serif text-4xl text-espresso">
              {formatINR(offer.samplePrice)}
            </span>
            <span className="mt-1 block text-xs text-espresso-soft">
              {offer.samplePriceLabel ?? "Sample price"}. Final pricing is
              confirmed on enquiry.
            </span>
          </p>
        )}

        <p className="mt-6 border-t border-gold/30 pt-4 text-xs text-espresso-soft">
          {offer.terms}
        </p>

        <WhatsAppButton
          message={offer.whatsappMessage}
          label="Enquire About This Offer"
          className="mt-6 sm:self-start"
        />
      </div>
    </article>
  );
}
