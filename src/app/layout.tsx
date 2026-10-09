import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { salon } from "@/data/salon";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-json-ld";

const cormorant = localFont({
  src: [
    {
      path: "../fonts/cormorant-garamond-latin-wght-normal.woff2",
      style: "normal",
      weight: "300 700",
    },
    {
      path: "../fonts/cormorant-garamond-latin-wght-italic.woff2",
      style: "italic",
      weight: "300 700",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = localFont({
  src: "../fonts/dm-sans-latin-wght-normal.woff2",
  weight: "100 1000",
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(salon.seo.siteUrl),
  // Demo sites stay out of search results until isDemo is set to false
  robots: { index: !salon.isDemo, follow: !salon.isDemo },
  title: {
    default: `${salon.name} | Bridal Makeup & Beauty`,
    template: `%s | ${salon.name}`,
  },
  description: salon.description,
  openGraph: {
    title: salon.name,
    description: salon.description,
    siteName: salon.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: salon.name,
    description: salon.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-espresso focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <LocalBusinessJsonLd />
        <AnnouncementBar />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
