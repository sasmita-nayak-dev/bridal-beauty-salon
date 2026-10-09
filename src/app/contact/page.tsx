import { MessageCircle } from "lucide-react";
import { ContactSection } from "@/components/home/contact-section";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { ButtonLink } from "@/components/ui/button";
import { salon } from "@/data/salon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${salon.name}: address, phone, WhatsApp, opening hours and directions. Send an enquiry to begin planning your look.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <ContactSection variant="page" />

      <section id="enquiry" className="section-y bg-ivory">
        <div className="container-page grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Send an Enquiry"
              title="Tell Us About Your Occasion"
              description="Complete the form and we will prepare a WhatsApp message for you to send."
            />
            <div className="mt-10">
              <ContactInquiryForm />
            </div>
          </div>

          <aside className="self-start bg-espresso p-8 text-ivory sm:p-10">
            <MessageCircle className="size-8 text-gold" strokeWidth={1.3} aria-hidden />
            <h2 className="mt-5 font-serif text-3xl">The Quickest Way to Reach Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-ivory/75">
              WhatsApp is our primary contact method. Message us directly and
              we will reply with availability and details.
            </p>
            <WhatsAppButton variant="light" className="mt-8 w-full" />
            <ButtonLink
              href={salon.mapsUrl}
              external
              variant="outline"
              className="mt-3 w-full border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso"
            >
              Get Directions
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
            {salon.isDemo && (
              <p className="mt-6 border-t border-gold/30 pt-4 text-xs text-ivory/60">
                Demonstration contact details. Replace the address, phone and
                links in <code>src/data/salon.ts</code>.
              </p>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
