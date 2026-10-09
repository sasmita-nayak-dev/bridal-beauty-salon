import { formatINR } from "@/lib/utils";
import { formatDisplayDate } from "@/lib/validation";
import type { Service, TimeSlot } from "@/types";
import { cn } from "@/lib/utils";

type BookingSummaryProps = {
  service?: Service;
  date: string;
  slot?: TimeSlot;
  name: string;
  phone: string;
  className?: string;
};

const empty = "Not chosen yet";

export function BookingSummary({
  service,
  date,
  slot,
  name,
  phone,
  className,
}: BookingSummaryProps) {
  const rows: { label: string; value?: string }[] = [
    { label: "Service", value: service?.title },
    { label: "Preferred date", value: date ? formatDisplayDate(date) : undefined },
    { label: "Preferred time", value: slot?.label },
    { label: "Name", value: name.trim() || undefined },
    { label: "Phone", value: phone.trim() || undefined },
  ];
  return (
    <section
      aria-labelledby="booking-summary-heading"
      className={cn("border border-gold/40 bg-ivory p-6 sm:p-8", className)}
    >
      <h2
        id="booking-summary-heading"
        className="font-serif text-2xl text-espresso"
      >
        Your Booking Summary
      </h2>
      <span className="gold-rule mt-4" />
      <dl className="mt-6 space-y-4 text-sm">
        {rows.map(({ label, value }) => (
          <div key={label}>
            <dt className="eyebrow">{label}</dt>
            <dd className={value ? "mt-1 text-espresso" : "mt-1 text-espresso-soft/80 italic"}>
              {value ?? empty}
            </dd>
          </div>
        ))}
      </dl>
      {service && (
        <p className="mt-6 border-t border-gold/30 pt-4 text-xs leading-relaxed text-espresso-soft">
          Sample starting price {formatINR(service.startingPrice)} ·{" "}
          {service.duration.toLowerCase()}. Final price and timing are
          confirmed by the studio.
        </p>
      )}
    </section>
  );
}
