import Link from "next/link";
import { bookingLink, navigation, salon } from "@/data/salon";
import { ButtonLink } from "@/components/ui/button";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { DesktopNavLinks } from "@/components/layout/desktop-nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-ivory/95">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label={`${salon.name} home`}
        >
          <span className="font-serif text-2xl font-semibold tracking-[0.12em] text-espresso sm:text-[1.7rem]">
            ÉLORA
          </span>
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.42em] text-gold-deep">
            Beauty Studio
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <DesktopNavLinks items={navigation} />
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href={bookingLink.href}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {bookingLink.label}
          </ButtonLink>
          <MobileNavigation
            items={navigation}
            booking={bookingLink}
            phone={salon.phone}
          />
        </div>
      </div>
    </header>
  );
}
