import Link from "next/link";
import { ArrowUpRight, Check, Clock } from "lucide-react";
import type { Service } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { formatINR } from "@/lib/utils";

type ServiceCardProps = {
  service: Service;
  /** "compact" links to the catalog (homepage). "detailed" is used on /services. */
  variant?: "compact" | "detailed";
};

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const detailed = variant === "detailed";
  return (
    <article
      id={detailed ? service.slug : undefined}
      className={detailed ? "group flex h-full flex-col" : "group relative"}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-blush/40">
        <SmartImage
          image={service.image}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 border border-ivory/0 transition-colors duration-500 group-hover:border-ivory/70"
        />
      </div>
      <div className={detailed ? "flex flex-1 flex-col pt-6" : "pt-6"}>
        <h3 className="font-serif text-2xl font-medium text-espresso sm:text-[1.7rem]">
          {detailed ? (
            service.title
          ) : (
            <Link
              href={service.href}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {service.title}
            </Link>
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-espresso-soft">
          {service.description}
        </p>

        {detailed && (
          <ul className="mt-5 space-y-2.5">
            {service.highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-espresso">
                <Check className="mt-0.5 size-4 shrink-0 text-rose-deep" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        )}

        <div
          className={
            detailed
              ? "mt-6 border-t border-gold/30 pt-4"
              : "mt-4 flex items-center justify-between border-t border-gold/30 pt-4"
          }
        >
          <p className="text-sm text-espresso">
            From{" "}
            <span className="font-serif text-xl">
              {formatINR(service.startingPrice)}
            </span>{" "}
            <span className="text-xs text-espresso-soft">(sample price)</span>
          </p>
          {detailed ? (
            <p className="mt-1.5 flex items-center gap-2 text-sm text-espresso-soft">
              <Clock className="size-4 text-gold-deep" aria-hidden />
              {service.duration} <span className="text-xs">(approximate)</span>
            </p>
          ) : (
            <ArrowUpRight
              className="size-5 text-rose-deep transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          )}
        </div>

        {detailed && (
          <WhatsAppButton
            message={service.inquiryMessage}
            label="Enquire"
            variant="outline"
            className="mt-6 w-full"
          />
        )}
      </div>
    </article>
  );
}
