import { Brush, Gem, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const pillars = [
  { title: "Personalized Bridal Looks", icon: Brush },
  { title: "Professional Beauty Services", icon: Sparkles },
  { title: "Attention to Every Detail", icon: Gem },
  { title: "A Thoughtful Client Experience", icon: HeartHandshake },
];

export function TrustSection() {
  return (
    <section
      aria-label="What we stand for"
      className="border-y border-gold/30 bg-ivory"
    >
      <div className="container-page">
        <ul className="grid grid-cols-1 divide-y divide-gold/25 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map(({ title, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08}>
                <div className="flex items-center gap-4 px-2 py-7 lg:flex-col lg:gap-3 lg:px-6 lg:py-10 lg:text-center">
                  <Icon className="size-6 shrink-0 text-gold-deep" strokeWidth={1.4} aria-hidden />
                  <p className="font-serif text-xl leading-snug text-espresso">
                    {title}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
