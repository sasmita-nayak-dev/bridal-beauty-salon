import { galleryFilterCategories, galleryItems } from "@/data/gallery";
import { salon } from "@/data/salon";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SectionHeading } from "@/components/shared/section-heading";
import { SignatureCta } from "@/components/home/signature-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Browse bridal, engagement, reception and hairstyling looks. Filter by category and open any image for a closer look.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="section-y bg-cream pb-0 sm:pb-0 lg:pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="The Portfolio"
            title="Looks We Love to Create"
            description="Browse by occasion and select any image to view it larger. Use the arrow keys to move between images."
          />
        </div>
      </section>

      <section aria-label="Gallery" className="section-y bg-cream pt-12 sm:pt-14 lg:pt-16">
        <div className="container-page">
          <GalleryGrid items={galleryItems} filters={galleryFilterCategories} />
          {salon.isDemo && (
            <p className="mt-8 text-center text-xs text-espresso-soft">
              Demonstration artwork shown. Real client photography, used with
              permission, replaces these images for each studio.
            </p>
          )}
        </div>
      </section>

      <SignatureCta
        eyebrow="Inspired?"
        title="Let's Create Your Look."
        description="Share a look you love and we will talk through how to make it yours."
        label="Discuss Your Look"
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
