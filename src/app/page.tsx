import { HeroSection } from "@/components/home/hero-section";
import { TrustSection } from "@/components/home/trust-section";
import { ServicesSection } from "@/components/home/services-section";
import { BridalFeature } from "@/components/home/bridal-feature";
import { PackagesSection } from "@/components/home/packages-section";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { LookComparison } from "@/components/home/look-comparison";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { SignatureCta } from "@/components/home/signature-cta";
import { InstagramSection } from "@/components/home/instagram-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <BridalFeature />
      <PackagesSection />
      <GalleryPreview />
      <LookComparison />
      <TestimonialsSection />
      <SignatureCta />
      <InstagramSection />
      <ContactSection />
    </>
  );
}
