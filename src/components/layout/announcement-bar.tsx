import { salon } from "@/data/salon";

export function AnnouncementBar() {
  return (
    <div className="bg-espresso px-5 py-2.5 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] text-ivory sm:text-xs">
      <p>
        <span className="text-gold">✦</span>
        <span className="mx-3">{salon.announcement}</span>
        <span className="text-gold">✦</span>
      </p>
    </div>
  );
}
