import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { bookingLink, navigation, salon } from "@/data/salon";
import { services } from "@/data/services";
import { InstagramIcon } from "@/components/shared/icons";
import { telUrl, whatsappUrl } from "@/lib/utils";

const linkClass =
  "text-sm text-ivory/75 transition-colors hover:text-gold focus-visible:text-gold";

export function SiteFooter() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <p className="font-serif text-3xl font-semibold tracking-[0.12em]">
            ÉLORA
          </p>
          <p className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.42em] text-gold">
            Beauty Studio
          </p>
          <p className="mt-6 max-w-xs font-serif text-xl italic text-ivory/85">
            {salon.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={salon.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram (opens in a new tab)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (opens in a new tab)"
              className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/25 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="size-5" aria-hidden />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Explore</h2>
          <ul className="mt-5 space-y-3">
            {[...navigation, bookingLink].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="eyebrow text-gold">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold">Visit &amp; Contact</h2>
          <address className="mt-5 space-y-4 text-sm not-italic text-ivory/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>
                {salon.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <a href={telUrl()} className="hover:text-gold">
                {salon.phone}
              </a>
            </p>
            {salon.hours.map((h) => (
              <p key={h.days}>
                <span className="block text-ivory">{h.days}</span>
                {h.time}
              </p>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {salon.copyrightYear} {salon.name}.{" "}
            {salon.isDemo && "Demonstration website; all details are samples."}
          </p>
          <Link href="/privacy" className="hover:text-gold">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
