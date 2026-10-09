import type { TeamMember } from "@/types";
import { SmartImage } from "@/components/shared/smart-image";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-blush/40">
        <SmartImage
          image={member.image}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="pt-6">
        <h3 className="font-serif text-2xl font-medium text-espresso">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-gold-deep">
          {member.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-espresso-soft">
          {member.bio}
        </p>
        <p className="mt-4 border-t border-gold/30 pt-4 text-xs text-espresso-soft">
          {member.credentials}
        </p>
        {member.isPlaceholder && (
          <p className="mt-3 inline-block bg-cream px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-espresso-soft">
            Sample team content, replace before launch
          </p>
        )}
      </div>
    </article>
  );
}
