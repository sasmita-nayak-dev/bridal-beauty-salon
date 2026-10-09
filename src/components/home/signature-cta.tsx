import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Reveal } from "@/components/shared/reveal";
import { SmartImage } from "@/components/shared/smart-image";
import { ButtonLink } from "@/components/ui/button";
import { salon } from "@/data/salon";
import type { ImageAsset } from "@/types";

const bg: ImageAsset = {
  src: "/images/cta.svg",
  alt: "",
  width: 1600,
  height: 1000,
};

type SignatureCtaProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Prefilled WhatsApp message */
  message?: string;
  label?: string;
  /** Optional second action, e.g. a link to another page */
  secondary?: { label: string; href: string };
};

export function SignatureCta({
  id,
  eyebrow = "By Appointment",
  title = "Let's Create Your Signature Look.",
  description = "Tell us about your occasion and we will begin planning a look that feels entirely your own.",
  message = salon.whatsappMessages.look,
  label = "Discuss Your Look",
  secondary,
}: SignatureCtaProps) {
  return (
    <section id={id} className="relative isolate overflow-hidden bg-espresso">
      <div aria-hidden className="absolute inset-0 -z-10 opacity-60">
        <SmartImage image={bg} sizes="100vw" />
      </div>
      <div className="container-page section-y text-center">
        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.1] text-ivory sm:text-6xl">
            {title}
          </h2>
          <span className="gold-rule mx-auto mt-8" />
          <p className="mx-auto mt-8 max-w-xl text-ivory/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton
              message={message}
              label={label}
              variant="light"
              size="lg"
            />
            {secondary && (
              <ButtonLink
                href={secondary.href}
                variant="outline"
                size="lg"
                className="border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso"
              >
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
