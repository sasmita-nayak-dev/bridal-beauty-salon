import type { MetadataRoute } from "next";
import { salon } from "@/data/salon";
import { publicRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = salon.seo.siteUrl.replace(/\/$/, "");
  return publicRoutes.map((route) => ({
    url: route === "/" ? base : `${base}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/bridal" ? 0.9 : 0.7,
  }));
}
