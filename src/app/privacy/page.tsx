import { SectionHeading } from "@/components/shared/section-heading";
import { salon } from "@/data/salon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${salon.name} handles information on this website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section-y bg-cream">
      <div className="container-page max-w-3xl">
        <SectionHeading
          as="h1"
          eyebrow="Legal"
          title="Privacy Policy"
          description="A plain-language summary of how this website handles information."
        />
        {salon.isDemo && (
          <p className="mt-8 border border-gold bg-ivory p-4 text-sm text-espresso-soft">
            Template text for a demonstration website. Before launch, have it
            reviewed against the studio&apos;s actual practices and local law.
          </p>
        )}
        <div className="mt-10 space-y-8 text-base leading-relaxed text-espresso-soft">
          <div>
            <h2 className="font-serif text-2xl text-espresso">What this website stores</h2>
            <p className="mt-2">
              This website has no database, accounts or payment processing. The
              enquiry and booking forms do not send or store what you type.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-espresso">WhatsApp enquiries</h2>
            <p className="mt-2">
              When you choose to contact {salon.shortName} on WhatsApp, the
              message you see, which may include your name, phone number and
              preferred service, is passed to WhatsApp so you can send it. Once
              you send it, it is handled by WhatsApp and by the studio under
              their own practices.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-espresso">Contact</h2>
            <p className="mt-2">
              Questions about privacy can be sent to {salon.email}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
