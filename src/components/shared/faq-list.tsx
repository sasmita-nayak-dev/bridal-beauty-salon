import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

/** Accessible accordion built on native <details>: keyboard and screen-reader friendly with no JavaScript. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-gold/30 border-y border-gold/30">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-serif text-xl text-espresso marker:content-none hover:text-rose-deep sm:text-2xl [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown
              className="size-5 shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-180"
              aria-hidden
            />
          </summary>
          <p className="max-w-2xl pb-6 text-base leading-relaxed text-espresso-soft">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
