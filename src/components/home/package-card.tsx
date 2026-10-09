import { Check } from "lucide-react";
import type { BridalPackage } from "@/types";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { cn, formatINR } from "@/lib/utils";

export function PackageCard({ pkg }: { pkg: BridalPackage }) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col p-8 sm:p-10",
        pkg.featured
          ? "border border-gold bg-espresso text-ivory lg:-my-4 lg:py-14"
          : "border border-gold/30 bg-ivory text-espresso",
      )}
    >
      {pkg.featured && (
        <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-gold px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-espresso">
          Most Loved
        </p>
      )}
      <h3 className="font-serif text-3xl font-medium">{pkg.name}</h3>
      <p
        className={cn(
          "mt-3 text-sm leading-relaxed",
          pkg.featured ? "text-ivory/75" : "text-espresso-soft",
        )}
      >
        {pkg.summary}
      </p>
      <p className="mt-8">
        <span className="font-serif text-5xl">{formatINR(pkg.price)}</span>
        <span
          className={cn(
            "mt-1 block text-xs",
            pkg.featured ? "text-ivory/60" : "text-espresso-soft",
          )}
        >
          Sample price. Final pricing is confirmed on enquiry.
        </span>
      </p>
      <span
        className={cn(
          "mt-8 block h-px w-full",
          pkg.featured ? "bg-gold/50" : "bg-gold/40",
        )}
      />
      <ul className="mt-8 flex-1 space-y-4">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "mt-0.5 size-4 shrink-0",
                pkg.featured ? "text-gold" : "text-rose-deep",
              )}
              aria-hidden
            />
            {feature}
          </li>
        ))}
      </ul>
      <WhatsAppButton
        message={pkg.whatsappMessage}
        label="Enquire on WhatsApp"
        variant={pkg.featured ? "light" : "outline"}
        className="mt-10 w-full"
      />
    </article>
  );
}
