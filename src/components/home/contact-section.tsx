import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { salon } from "@/data/salon";
import { SectionHeading } from "@/components/shared/section-heading";
import { InstagramIcon } from "@/components/shared/icons";
import { ButtonLink } from "@/components/ui/button";
import { telUrl, whatsappUrl } from "@/lib/utils";

type ContactSectionProps = {
  /** Use "page" on /contact: h1 heading, social links, no link back to /contact */
  variant?: "home" | "page";
};

export function ContactSection({ variant = "home" }: ContactSectionProps) {
  const isPage = variant === "page";
  const items = [
    {
      icon: MapPin,
      label: "Visit",
      content: (
        <>
          {salon.address.lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
          {salon.address.note && (
            <span className="mt-1 block text-xs text-espresso-soft">
              ({salon.address.note})
            </span>
          )}
        </>
      ),
    },
    {
      icon: Clock,
      label: "Hours",
      content: salon.hours.map((h) => (
        <span key={h.days} className="block">
          {h.days}: {h.time}
        </span>
      )),
    },
    {
      icon: Phone,
      label: "Call",
      content: (
        <a href={telUrl()} className="underline-offset-4 hover:underline">
          {salon.phone}
        </a>
      ),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      content: (
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          Message us
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="section-y bg-cream">
      <div className="container-page">
        <SectionHeading
          as={isPage ? "h1" : "h2"}
          eyebrow={isPage ? "Get in Touch" : "Visit the Studio"}
          title={isPage ? "Contact the Studio" : "We Would Love to Meet You"}
          description="Reach out to reserve your date or arrange a consultation."
        />
        <dl className="mt-16 grid gap-px bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, content }) => (
            <div key={label} className="bg-cream p-8 text-center">
              <Icon className="mx-auto size-6 text-gold-deep" strokeWidth={1.4} aria-hidden />
              <dt className="eyebrow mt-4">{label}</dt>
              <dd className="mt-3 text-espresso">{content}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {!isPage && (
            <ButtonLink href="/contact" size="lg">
              Contact Us
            </ButtonLink>
          )}
          <ButtonLink
            href={salon.mapsUrl}
            external
            variant={isPage ? "primary" : "outline"}
            size="lg"
          >
            Get Directions
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>
        </div>

        {isPage && (
          <div className="mt-12 text-center">
            <p className="eyebrow">Follow Along</p>
            <ul className="mt-4 flex items-center justify-center gap-3">
              <li>
                <a
                  href={salon.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-espresso/25 px-5 text-sm transition-colors hover:border-rose-deep hover:text-rose-deep"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              {salon.social.facebook && (
                <li>
                  <a
                    href={salon.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-espresso/25 px-5 text-sm transition-colors hover:border-rose-deep hover:text-rose-deep"
                  >
                    Facebook
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
