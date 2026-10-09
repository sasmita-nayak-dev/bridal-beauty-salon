import { Info } from "lucide-react";
import { BookingWizard } from "@/components/booking/booking-wizard";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book an Appointment (Demo)",
  description:
    "An interactive demonstration of requesting an appointment: choose a service, date and time, then prepare a WhatsApp inquiry. No appointment is reserved.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section className="bg-cream pb-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Reserve Your Date"
            title="Request an Appointment"
            description="Choose your service, date and time, then send your inquiry on WhatsApp."
          />
          <div
            role="note"
            className="mx-auto mt-10 flex max-w-2xl gap-3 border border-gold bg-ivory p-5 text-sm leading-relaxed text-espresso"
          >
            <Info className="mt-0.5 size-5 shrink-0 text-gold-deep" aria-hidden />
            <p>
              <strong className="font-medium">Demonstration only.</strong> No
              appointment is reserved, and nothing you enter is stored or sent
              by this website. The final step opens WhatsApp with a prefilled
              message, and the studio confirms availability when they reply.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-cream pt-12 sm:pt-14 lg:pt-16">
        <div className="container-page">
          <BookingWizard />
        </div>
      </section>
    </>
  );
}
