import { instagramImages } from "@/data/gallery";
import { salon } from "@/data/salon";
import { SectionHeading } from "@/components/shared/section-heading";
import { SmartImage } from "@/components/shared/smart-image";
import { InstagramIcon } from "@/components/shared/icons";
import { ButtonLink } from "@/components/ui/button";

export function InstagramSection() {
  return (
    <section className="section-y bg-ivory">
      <div className="container-page">
        <SectionHeading
          eyebrow="On Instagram"
          title="Follow Our Inspiration"
          description="A curated moodboard of beauty details. These sample images are not live Instagram posts."
        />
        <ul className="mt-14 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {instagramImages.map((image, i) => (
            <li key={image.src}>
              <a
                href={salon.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our Instagram profile (image ${i + 1}, opens in a new tab)`}
                className="group relative block aspect-square overflow-hidden bg-blush/40"
              >
                <SmartImage
                  image={image}
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 46vw"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-espresso/0 text-ivory opacity-0 transition-all duration-300 group-hover:bg-espresso/40 group-hover:opacity-100 group-focus-visible:bg-espresso/40 group-focus-visible:opacity-100">
                  <InstagramIcon className="size-7" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <ButtonLink href={salon.social.instagram} external variant="outline">
            <InstagramIcon className="size-4" />
            Follow on Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
