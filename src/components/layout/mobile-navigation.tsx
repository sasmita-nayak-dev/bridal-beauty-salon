"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import type { NavItem } from "@/types";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileNavigationProps = {
  items: NavItem[];
  booking: NavItem;
  phone: string;
};

export function MobileNavigation({ items, booking, phone }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Close when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Scroll lock, Escape to close and a simple focus trap while open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>("a[href], button") ?? [],
      );
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const els = focusables();
      if (els.length === 0) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className="inline-flex size-11 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-colors hover:border-rose-deep hover:text-rose-deep"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[60] overflow-hidden transition-[opacity,visibility] duration-300",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={close}
          className="absolute inset-0 bg-espresso/50"
        />
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] flex-col bg-ivory px-7 pb-8 pt-5 shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl font-semibold tracking-[0.12em]">
              ÉLORA
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-espresso/20"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y divide-gold/25">
              {items.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block py-4 font-serif text-3xl transition-colors hover:text-rose-deep",
                        active ? "text-rose-deep" : "text-espresso",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 space-y-4">
            <ButtonLink href={booking.href} className="w-full">
              {booking.label}
            </ButtonLink>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 text-sm text-espresso-soft hover:text-rose-deep"
            >
              <Phone className="size-4" aria-hidden />
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
