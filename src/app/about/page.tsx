import { Gem, HeartHandshake, Sparkles } from "lucide-react";
import { team } from "@/data/team";
import { salon } from "@/data/salon";
import { TeamCard } from "@/components/about/team-card";
import { SignatureCta } from "@/components/home/signature-cta";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import type { ImageAsset } from "@/types";

export const metadata = pageMetadata({
  title: "About the Studio",
  description: `Meet ${salon.name}: our philosophy, our approach to beauty, our team and the studio experience.`,
  path: "/about",
});

const story: ImageAsset = {
  src: "/images/about-story.svg",
  alt: "Editorial portrait for the brand story (placeholder artwork; replace with a licensed or salon-owned photograph)",
  width: 1000,
  height: 1250,
};

const studioWide: ImageAsset = {
  src: "/images/about-studio.svg",
  alt: "The studio interior (placeholder artwork; replace with a photograph of the real salon)",
  width: 1200,
  height: 800,
};

const studioTall: ImageAsset = {
  src: "/images/about-studio-2.svg",
  alt: "A styling station in the studio (placeholder artwork; replace with a photograph of the real salon)",
  width: 800,
  height: 1000,
};

const values = [
  {
    icon: HeartHandshake,
    title: "Listen First",
    text: "Every look begins with a conversation about you, your occasion and your traditions.",
  },
  {
    icon: Gem,
    title: "Considered Details",
    text: "Skin, outfit, jewellery and hair are planned together so the whole look feels harmonious.",
  },
  {
    icon: Sparkles,
    title: "Calm, Unhurried Care",
    text: "A relaxed studio where your preparation is as enjoyable as the celebration itself.",
  },
];

const approach = [
  "Prepare the skin so makeup sits beautifully",
  "Enhance your natural features rather than mask them",
  "Choose finishes that photograph well and feel comfortable",
  "Plan touch-up guidance for long celebrations",
];

const experience = [
  "A welcoming, unhurried consultation",
  "Comfortable styling stations with considered lighting",
  "Room for family to be part of the preparation",
  "Clear communication about timings and pricing",
];

export default function AboutPage() {
  return (
    <>
      {/* Brand story */}
      <section className="bg-cream">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-6 font-serif text-[2.9rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
              Beauty That Begins{" "}
              <em className="font-normal text-rose-deep">With Listening.</em>
            </h1>
            <span className="gold-rule mt-8" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-espresso-soft sm:text-lg">
              {salon.name} was imagined as a quiet, welcoming place where
              every client is treated as an individual. We celebrate bridal
              traditions and modern beauty alike, always shaped around the
              person in the chair.
            </p>
            {salon.isDemo && (
              <p className="mt-6 max-w-xl text-xs text-espresso-soft">
                Sample brand story for demonstration. Each studio replaces this
                with its own history and values.
              </p>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-2 translate-x-2 translate-y-2 border border-gold/60 sm:-inset-4 sm:translate-x-4 sm:translate-y-4"
              />
              <div className="relative h-full w-full overflow-hidden bg-blush">
                <SmartImage
                  image={story}
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-y bg-ivory">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What We Believe"
            description="Three simple principles guide everything we do."
          />
          <ul className="mt-16 grid gap-px bg-gold/30 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="bg-ivory">
                <Reveal delay={i * 0.1} className="h-full">
                  <div className="h-full p-8 text-center sm:p-10">
                    <Icon className="mx-auto size-7 text-gold-deep" strokeWidth={1.3} aria-hidden />
                    <h3 className="mt-5 font-serif text-2xl text-espresso">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-espresso-soft">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Beauty approach */}
      <section className="section-y bg-cream">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">Our Beauty Approach</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
              Enhance, <em className="text-rose-deep">Never Disguise.</em>
            </h2>
            <span className="gold-rule mt-8" />
            <p className="mt-8 max-w-lg text-base leading-relaxed text-espresso-soft sm:text-lg">
              We believe the best makeup lets you look like yourself on your
              best day. That means careful preparation, thoughtful colour
              choices and finishes that feel as good as they look.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="divide-y divide-gold/30 border-y border-gold/30">
              {approach.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 py-5">
                  <span aria-hidden className="font-serif text-2xl text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-espresso">{item}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-y bg-ivory">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Team"
            title="The Hands Behind the Look"
            description={
              salon.isDemo
                ? "Sample team members for demonstration. Names, roles, biographies and credentials are placeholders to be replaced."
                : undefined
            }
          />
          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={(i % 3) * 0.1}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Salon experience */}
      <section className="section-y bg-espresso text-ivory">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="grid grid-cols-5 items-end gap-4">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden bg-blush/30">
                <SmartImage image={studioTall} sizes="(min-width: 1024px) 28vw, 55vw" />
              </div>
              <div className="relative col-span-2 aspect-[3/4] overflow-hidden bg-blush/30">
                <SmartImage image={studioWide} sizes="(min-width: 1024px) 18vw, 36vw" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-gold">The Salon Experience</p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] sm:text-5xl">
              A Calm Place to Prepare
            </h2>
            <span className="gold-rule mt-8" />
            <ul className="mt-8 space-y-4">
              {experience.map((item) => (
                <li key={item} className="flex gap-3 text-ivory/85">
                  <span aria-hidden className="text-gold">
                    ✦
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="light" size="lg" className="mt-10">
              Visit the Studio
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <SignatureCta
        eyebrow="Begin Your Journey"
        title="We Would Love to Meet You."
        description="Explore our services or send an enquiry. We will be happy to help you plan."
        label="Make an Enquiry"
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
