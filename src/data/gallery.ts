import type { GalleryCategory, GalleryItem, ImageAsset } from "@/types";

const img = (file: string, alt: string, width: number, height: number): ImageAsset => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
});

/**
 * Demo gallery. All images are illustrative placeholder artwork.
 * Only set `isSalonWork: true` for photographs that belong to the salon
 * and are cleared for public use.
 */
export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Bridal", isSalonWork: false, image: img("gallery-1.svg", "Placeholder artwork: bridal portrait", 800, 1000) },
  { id: "g2", category: "Reception", isSalonWork: false, image: img("gallery-2.svg", "Placeholder artwork: reception look", 1200, 800) },
  { id: "g3", category: "Engagement", isSalonWork: false, image: img("gallery-3.svg", "Placeholder artwork: engagement look", 800, 1000) },
  { id: "g4", category: "Bridal", isSalonWork: false, image: img("gallery-4.svg", "Placeholder artwork: bridal detail", 800, 1000) },
  { id: "g5", category: "Hair", isSalonWork: false, image: img("gallery-5.svg", "Placeholder artwork: hairstyling", 1200, 800) },
  { id: "g6", category: "Party", isSalonWork: false, image: img("gallery-6.svg", "Placeholder artwork: party look", 800, 1000) },
  { id: "g7", category: "Bridal", isSalonWork: false, image: img("gallery-7.svg", "Placeholder artwork: bridal portrait", 800, 1000) },
  { id: "g8", category: "Engagement", isSalonWork: false, image: img("gallery-8.svg", "Placeholder artwork: engagement portrait", 1200, 800) },
  { id: "g9", category: "Reception", isSalonWork: false, caption: "Reception glam (sample)", image: img("gallery-9.svg", "Placeholder artwork: reception portrait", 800, 1000) },
  { id: "g10", category: "Hair", isSalonWork: false, caption: "Bridal bun (sample)", image: img("gallery-10.svg", "Placeholder artwork: hairstyle portrait", 800, 1000) },
  { id: "g11", category: "Reception", isSalonWork: false, caption: "Evening look (sample)", image: img("gallery-11.svg", "Placeholder artwork: evening reception look", 1200, 800) },
  { id: "g12", category: "Hair", isSalonWork: false, caption: "Soft waves (sample)", image: img("gallery-12.svg", "Placeholder artwork: soft wave hairstyle", 800, 1000) },
  { id: "g13", category: "Engagement", isSalonWork: false, caption: "Engagement glow (sample)", image: img("gallery-13.svg", "Placeholder artwork: engagement portrait", 800, 1000) },
  { id: "g14", category: "Bridal", isSalonWork: false, caption: "Bridal close-up (sample)", image: img("gallery-14.svg", "Placeholder artwork: bridal close-up", 800, 1000) },
];

export const instagramImages: ImageAsset[] = [1, 2, 3, 4, 5, 6].map((n) =>
  img(`insta-${n}.svg`, `Placeholder artwork ${n} for the social gallery`, 800, 800),
);

export const lookComparison = {
  a: {
    label: "Soft Glam",
    image: img("look-a.svg", "Placeholder artwork for a soft glam look", 800, 1000),
  },
  b: {
    label: "Classic Bridal",
    image: img("look-b.svg", "Placeholder artwork for a classic bridal look", 800, 1000),
  },
};

/**
 * Categories offered as filter buttons on /gallery (plus "All").
 * Items in other categories (e.g. "Party") still appear under "All".
 * Add "Party" here to give it its own filter.
 */
export const galleryFilterCategories: GalleryCategory[] = [
  "Bridal",
  "Engagement",
  "Reception",
  "Hair",
];
