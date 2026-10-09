import { CalendarHeart, Sparkles } from "lucide-react";
import { consultationInfo } from "@/data/packages";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { salon } from "@/data/salon";

const panels = [
  { key: "consultation", icon: CalendarHeart, data: consultationInfo.consultation },
  { key: "trial", icon: Sparkles, data: consultationInfo.trial },
] as const;

export function BridalConsultation() {
  return (
    <section id="consultation" className="section-y bg-espresso text-ivory">
      <div className="container-page">
        <SectionHeading
          tone="light"
          eyebrow="Consultation & Trial"
          title="Begin With a Conversation"
          description="Every bridal booking starts with a consultation. A trial is optional and can be added if you would like to preview your look."
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {panels.map(({ key, icon: Icon, data }, i) => (
            <Reveal key={key} delay={i * 0.1} className="h-full">
              <div className="h-full border border-gold/40 p-8 sm:p-10">
                <Icon className="size-8 text-gold" strokeWidth={1.3} aria-hidden />
                <h3 className="mt-5 font-serif text-3xl">{data.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                  {data.intro}
                </p>
                <ul className="mt-6 space-y-3 border-t border-gold/30 pt-6">
                  {data.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ivory/90">
                      <span aria-hidden className="text-gold">
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <WhatsAppButton
            message="Hello! I'd like to arrange a bridal consultation."
            label="Request a Consultation"
            variant="light"
            size="lg"
          />
          {salon.isDemo && (
            <p className="mt-4 text-xs text-ivory/60">
              Demonstration content: consultation and trial details are
              samples.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
