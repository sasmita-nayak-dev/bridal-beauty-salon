import type { Metadata } from "next";
import { salon } from "@/data/salon";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/services" */
  path: string;
};

/** Consistent title, description, canonical and Open Graph data per route. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${salon.name}`,
      description,
      url: path,
      siteName: salon.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${salon.name}`,
      description,
    },
  };
}
