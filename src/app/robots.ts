import type { MetadataRoute } from "next";
import { salon } from "@/data/salon";

/**
 * While `salon.isDemo` is true the site asks crawlers not to index it, so
 * sample addresses and prices never appear in search results. Set isDemo to
 * false for a real launch to allow indexing.
 */
export default function robots(): MetadataRoute.Robots {
  const base = salon.seo.siteUrl.replace(/\/$/, "");
  return {
    rules: salon.isDemo
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
