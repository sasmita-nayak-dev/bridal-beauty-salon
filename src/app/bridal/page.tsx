import { galleryItems } from "@/data/gallery";
import { bridalFaqs } from "@/data/faqs";
import { salon } from "@/data/salon";
import { BridalHero } from "@/components/bridal/bridal-hero";
import { BridalPhilosophy } from "@/components/bridal/bridal-philosophy";
import { BridalConsultation } from "@/components/bridal/bridal-consultation";
import { PackagesSection } from "@/components/home/packages-section";
import { SignatureCta } from "@/components/home/signature-cta";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { FaqList } from "@/components/shared/faq-list";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bridal Makeup & Packages",
  description:
    "Personalised bridal makeup and hairstyling, signature bridal packages, consultations and optional trials. Enquire about your wedding date on WhatsApp.",
  path: "/bridal",
});

const bridalGallery = galleryItems.filter((item) => item.category === "Bridal");

export default function BridalPage() {
  return (
    <>
      <BridalHero />
      <BridalPhilosophy />

      <section aria-label="Pull quote" className="bg-ivory py-16 sm:py-24">
        <Reveal className="container-page text-center">
          <p className="mx-auto max-w-4xl font-serif text-3xl italic leading-snug text-espresso sm:text-5xl">
            &ldquo;Your wedding look should feel like you, only more radiant.&rdquo;
          </p>
          <span className="gold-rule mx-auto mt-8" />
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-espresso-soft">
            {salon.shortName} bridal philosophy (sample wording)
          </p>
        </Reveal>
      </section>

      <PackagesSection
        eyebrow="Signature Bridal Packages"
        title="Choose Your Bridal Experience"
        description="Three thoughtfully designed packages. All prices shown are illustrative samples and are confirmed on enquiry."
        showMoreLink={false}
      />

      <section id="portfolio" className="section-y bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Bridal Portfolio"
            title="Brides We Have Styled"
            description="Select any image to view it larger."
          />
          <GalleryGrid items={bridalGallery} showFilters={false} className="mt-14" />
          {salon.isDemo && (
            <p className="mt-6 text-center text-xs text-espresso-soft">
              Demonstration artwork shown. Real client photography, used with
              permission, replaces these images for each studio.
            </p>
          )}
          <div className="mt-10 text-center">
            <ButtonLink href="/gallery" variant="outline" size="lg">
              View Full Gallery
            </ButtonLink>
          </div>
        </div>
      </section>

      <BridalConsultation />

      <section id="faq" className="section-y bg-ivory">
        <div className="container-page max-w-4xl">
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently Asked Questions"
            description={
              salon.isDemo
                ? "Sample answers for demonstration. Each studio replaces these with its own policies."
                : undefined
            }
          />
          <div className="mt-14">
            <FaqList items={bridalFaqs} />
          </div>
        </div>
      </section>

      <SignatureCta
        id="inquire"
        eyebrow="Wedding Enquiries"
        title="Tell Us About Your Wedding."
        description="Share your date and the look you imagine. We will reply on WhatsApp to begin planning with you."
        message={salon.whatsappMessages.bridal}
        label="Enquire on WhatsApp"
        secondary={{ label: "Try the Booking Demo", href: "/book" }}
      />
    </>
  );
}
