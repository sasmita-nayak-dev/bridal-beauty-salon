import type { NavItem, SalonConfig } from "@/types";

/**
 * Central configuration for the salon.
 * Every detail below is a clearly marked DEMONSTRATION value.
 * Replace each one with the client's real details before launch.
 */
export const salon: SalonConfig = {
  name: "ÉLORA BEAUTY STUDIO",
  shortName: "Élora",
  tagline: "Bridal beauty, thoughtfully crafted.",
  description:
    "A demonstration website for a premium Indian bridal beauty studio: bridal makeup, hair styling and skincare experiences.",
  announcement: "Bridal Season 2026 — Discover Your Signature Bridal Look",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@example.com",
  address: {
    lines: ["12 Sample Lane, Demo Nagar", "Your City, State 000000"],
    note: "Demonstration address",
  },
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bridal+beauty+studio",
  whatsappMessages: {
    default: "Hello! I'd like to know more about your bridal beauty services.",
    look: "Hello! I'd love to discuss my signature look for a special occasion.",
    booking: "Hello! I'd like to book an appointment.",
    bridal: "Hello! I'd like to enquire about bridal makeup for my wedding.",
  },
  seo: {
    // Set NEXT_PUBLIC_SITE_URL in the deployment environment, or edit here.
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
    localBusiness: {
      // Keep false until the studio's real, verified address is entered below.
      enabled: false,
      type: "BeautySalon",
      // address: {
      //   streetAddress: "",
      //   addressLocality: "",
      //   addressRegion: "",
      //   postalCode: "",
      //   addressCountry: "IN",
      // },
    },
  },
  isDemo: true,
  copyrightYear: 2026,
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Offers", href: "/offers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const bookingLink: NavItem = {
  label: "Book Appointment",
  href: "/book",
};
