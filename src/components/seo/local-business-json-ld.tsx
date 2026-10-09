import { salon } from "@/data/salon";

/**
 * Emits LocalBusiness structured data ONLY when the studio has explicitly
 * enabled it AND supplied a verified postal address in src/data/salon.ts.
 * Nothing is inferred or invented: no ratings, reviews, awards or hours.
 */
export function LocalBusinessJsonLd() {
  const { enabled, type, address } = salon.seo.localBusiness;
  if (!enabled || !address) return null;

  const sameAs = [salon.social.instagram, salon.social.facebook].filter(
    (url): url is string => Boolean(url),
  );

  const data = {
    "@context": "https://schema.org",
    "@type": type,
    name: salon.name,
    url: salon.seo.siteUrl,
    telephone: salon.phone,
    email: salon.email,
    address: { "@type": "PostalAddress", ...address },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
