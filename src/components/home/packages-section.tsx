import { bridalPackages } from "@/data/packages";
import { PackageCard } from "@/components/home/package-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ButtonLink } from "@/components/ui/button";

type PackagesSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Show the "Explore all bridal details" link (homepage only) */
  showMoreLink?: boolean;
  headingAs?: "h1" | "h2";
};

export function PackagesSection({
  id = "packages",
  eyebrow = "Bridal Packages",
  title = "Find Your Bridal Experience",
  description = "Three thoughtfully designed packages. All prices shown are illustrative samples.",
  showMoreLink = true,
  headingAs = "h2",
}: PackagesSectionProps) {
  return (
    <section id={id} className="section-y bg-ivory">
      <div className="container-page">
        <SectionHeading
          as={headingAs}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="mt-20 grid gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-8">
          {bridalPackages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.1} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
        {showMoreLink && (
          <div className="mt-16 text-center">
            <ButtonLink href="/bridal" variant="ghost">
              Explore all bridal details →
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
