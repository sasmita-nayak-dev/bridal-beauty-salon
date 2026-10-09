"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, ChevronLeft, Info, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { timePeriods, timeSlots } from "@/data/booking";
import { salon } from "@/data/salon";
import { BookingSummary } from "@/components/booking/booking-summary";
import { Field, FieldError, fieldAria, inputClass } from "@/components/shared/form-field";
import { Button, ButtonLink } from "@/components/ui/button";
import { buildBookingMessage } from "@/lib/messages";
import { cn, formatINR, whatsappUrl } from "@/lib/utils";
import {
  type FieldErrors,
  cleanText,
  validateDate,
  validateName,
  validatePhone,
} from "@/lib/validation";

type StepKey = "service" | "date" | "slot" | "details" | "review";
type ErrorKey = "service" | "date" | "slot" | "name" | "phone";

const steps: { key: StepKey; label: string; heading: string }[] = [
  { key: "service", label: "Service", heading: "Choose your service" },
  { key: "date", label: "Date", heading: "Select a preferred date" },
  { key: "slot", label: "Time", heading: "Choose a sample time slot" },
  { key: "details", label: "Details", heading: "Your details" },
  { key: "review", label: "Review", heading: "Review and send your inquiry" },
];

const pad = (n: number) => String(n).padStart(2, "0");
const toIso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

/**
 * Today's and next year's dates, read from the browser clock. Using
 * useSyncExternalStore keeps the server render deterministic (empty string)
 * and avoids reading the clock during prerendering.
 */
const noopSubscribe = () => () => {};
const getToday = () => toIso(new Date());
const getMaxDate = () => {
  const d = new Date();
  d.setFullYear(d.getFullYear() + 1);
  return toIso(d);
};
const getServerDate = () => "";

export function BookingWizard() {
  const today = useSyncExternalStore(noopSubscribe, getToday, getServerDate);
  const maxDate = useSyncExternalStore(noopSubscribe, getMaxDate, getServerDate);

  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState("");
  const [date, setDate] = useState("");
  const [slotId, setSlotId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FieldErrors<ErrorKey>>({});

  const headingRef = useRef<HTMLHeadingElement>(null);
  const shouldFocusHeading = useRef(false);

  const service = services.find((s) => s.slug === serviceSlug);
  const slot = timeSlots.find((s) => s.id === slotId);
  const current = steps[step];
  const isReview = current.key === "review";

  // Move focus to the new step's heading so screen-reader users know it changed
  useEffect(() => {
    if (shouldFocusHeading.current) {
      headingRef.current?.focus();
      shouldFocusHeading.current = false;
    }
  }, [step]);

  const clearError = (key: ErrorKey) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  const validateStep = (key: StepKey): FieldErrors<ErrorKey> => {
    const found: FieldErrors<ErrorKey> = {};
    if (key === "service" && !service) found.service = "Please choose a service to continue.";
    if (key === "date") {
      const message = validateDate(date, today, maxDate);
      if (message) found.date = message;
    }
    if (key === "slot" && !slot) found.slot = "Please choose a time slot to continue.";
    if (key === "details") {
      const nameError = validateName(name);
      const phoneError = validatePhone(phone);
      if (nameError) found.name = nameError;
      if (phoneError) found.phone = phoneError;
    }
    return found;
  };

  const focusFirstError = (found: FieldErrors<ErrorKey>) => {
    const target = found.service
      ? `service-${services[0].slug}`
      : found.date
        ? "booking-date"
        : found.slot
          ? `slot-${timeSlots[0].id}`
          : found.name
            ? "booking-name"
            : "booking-phone";
    document.getElementById(target)?.focus();
  };

  const goTo = (next: number) => {
    shouldFocusHeading.current = true;
    setErrors({});
    setStep(next);
  };

  const handleNext = () => {
    const found = validateStep(current.key);
    if (Object.values(found).some(Boolean)) {
      setErrors(found);
      focusFirstError(found);
      return;
    }
    goTo(step + 1);
  };

  const reset = () => {
    setServiceSlug("");
    setDate("");
    setSlotId("");
    setName("");
    setPhone("");
    goTo(0);
  };

  const message =
    service && slot
      ? buildBookingMessage({
          serviceTitle: service.title,
          date,
          timeLabel: slot.label,
          name,
          phone,
        })
      : "";

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
      <div>
        {/* Progress */}
        <nav aria-label="Booking progress">
          <p className="text-sm text-espresso-soft sm:hidden">
            Step {step + 1} of {steps.length}: {current.label}
          </p>
          <ol className="hidden items-center sm:flex">
            {steps.map((s, i) => {
              const done = i < step;
              const active = i === step;
              return (
                <li
                  key={s.key}
                  aria-current={active ? "step" : undefined}
                  className={cn("flex items-center", i < steps.length - 1 && "flex-1")}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-full border text-sm transition-colors duration-300",
                      active && "border-rose-deep bg-rose-deep text-white",
                      done && "border-gold bg-gold text-espresso",
                      !active && !done && "border-espresso/30 text-espresso-soft",
                    )}
                  >
                    {done ? <Check className="size-4" aria-hidden /> : i + 1}
                  </span>
                  <span
                    className={cn(
                      "ml-3 text-xs font-medium uppercase tracking-[0.16em]",
                      active ? "text-espresso" : "text-espresso-soft",
                    )}
                  >
                    {s.label}
                    {done && <span className="sr-only"> (completed)</span>}
                    {active && <span className="sr-only"> (current step)</span>}
                  </span>
                  {i < steps.length - 1 && (
                    <span aria-hidden className="mx-4 h-px flex-1 bg-gold/40" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div key={current.key} className="animate-step-in mt-10">
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="font-serif text-3xl text-espresso outline-none sm:text-4xl"
          >
            {current.heading}
          </h2>

          {/* STEP: service */}
          {current.key === "service" && (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <fieldset
                className="mt-6"
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <legend className="text-sm text-espresso-soft">
                  Sample prices and durations are shown for illustration.
                </legend>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <div key={s.slug} className="relative">
                      <input
                        type="radio"
                        id={`service-${s.slug}`}
                        name="service"
                        value={s.slug}
                        checked={serviceSlug === s.slug}
                        onChange={() => {
                          setServiceSlug(s.slug);
                          clearError("service");
                        }}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`service-${s.slug}`}
                        className="block h-full cursor-pointer border border-espresso/25 bg-ivory p-5 transition-colors hover:border-gold peer-checked:border-rose-deep peer-checked:bg-blush/30 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-rose-deep"
                      >
                        <span className="block font-serif text-xl text-espresso">
                          {s.title}
                        </span>
                        <span className="mt-1 block text-xs text-espresso-soft">
                          From {formatINR(s.startingPrice)} (sample) · {s.duration}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <FieldError id="service-error" message={errors.service} />
              <StepActions step={step} onBack={() => goTo(step - 1)} />
            </form>
          )}

          {/* STEP: date */}
          {current.key === "date" && (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <Field
                id="booking-date"
                label="Preferred date"
                required
                error={errors.date}
                hint="Choose the day you would like to visit. The studio confirms availability."
                className="mt-6 max-w-sm"
              >
                <input
                  {...fieldAria("booking-date", errors.date, "hint")}
                  type="date"
                  value={date}
                  min={today || undefined}
                  max={maxDate || undefined}
                  onChange={(e) => {
                    setDate(e.target.value);
                    clearError("date");
                  }}
                  className={inputClass}
                />
              </Field>
              <p className="mt-4 flex max-w-sm gap-2 text-xs text-espresso-soft">
                <Info className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
                Studio hours:{" "}
                {salon.hours.map((h) => `${h.days}, ${h.time}`).join(" · ")}.
              </p>
              <StepActions step={step} onBack={() => goTo(step - 1)} />
            </form>
          )}

          {/* STEP: time slot */}
          {current.key === "slot" && (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <fieldset
                className="mt-6"
                aria-describedby={errors.slot ? "slot-error" : undefined}
              >
                <legend className="text-sm text-espresso-soft">
                  Sample slots only. Availability is not checked.
                </legend>
                <div className="mt-5 space-y-6">
                  {timePeriods.map((period) => (
                    <div key={period}>
                      <p className="eyebrow">{period}</p>
                      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {timeSlots
                          .filter((t) => t.period === period)
                          .map((t) => (
                            <div key={t.id} className="relative">
                              <input
                                type="radio"
                                id={`slot-${t.id}`}
                                name="slot"
                                value={t.id}
                                checked={slotId === t.id}
                                onChange={() => {
                                  setSlotId(t.id);
                                  clearError("slot");
                                }}
                                className="peer sr-only"
                              />
                              <label
                                htmlFor={`slot-${t.id}`}
                                className="block cursor-pointer border border-espresso/25 bg-ivory px-3 py-3 text-center text-sm transition-colors hover:border-gold peer-checked:border-rose-deep peer-checked:bg-rose-deep peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-rose-deep"
                              >
                                {t.label}
                              </label>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
              <FieldError id="slot-error" message={errors.slot} />
              <StepActions step={step} onBack={() => goTo(step - 1)} />
            </form>
          )}

          {/* STEP: details */}
          {current.key === "details" && (
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleNext();
              }}
            >
              <p className="mt-4 max-w-md text-sm text-espresso-soft">
                We only ask for what is needed to write your WhatsApp message.
                Nothing is stored on this website.
              </p>
              <div className="mt-6 grid max-w-md gap-6">
                <Field id="booking-name" label="Your name" required error={errors.name}>
                  <input
                    {...fieldAria("booking-name", errors.name)}
                    type="text"
                    autoComplete="name"
                    maxLength={60}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      clearError("name");
                    }}
                    className={inputClass}
                  />
                </Field>
                <Field
                  id="booking-phone"
                  label="Phone number"
                  required
                  error={errors.phone}
                  hint="Include your country code if outside India, e.g. +91 98765 43210"
                >
                  <input
                    {...fieldAria("booking-phone", errors.phone, "hint")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      clearError("phone");
                    }}
                    className={inputClass}
                  />
                </Field>
              </div>
              <StepActions step={step} onBack={() => goTo(step - 1)} nextLabel="Review" />
            </form>
          )}

          {/* STEP: review */}
          {isReview && service && slot && (
            <div className="mt-6 space-y-8">
              <div
                role="note"
                className="border border-gold bg-cream p-5 text-sm leading-relaxed text-espresso"
              >
                <p className="font-medium">This is a demonstration.</p>
                <p className="mt-1 text-espresso-soft">
                  No appointment is reserved and nothing is stored or sent by
                  this website. The button below only opens WhatsApp with a
                  prefilled message. The studio confirms availability when they
                  reply.
                </p>
              </div>

              <BookingSummary
                service={service}
                date={date}
                slot={slot}
                name={cleanText(name, 60)}
                phone={phone}
              />

              <section aria-labelledby="preview-heading">
                <h3 id="preview-heading" className="font-serif text-2xl text-espresso">
                  Confirmation preview
                </h3>
                <p className="mt-1 text-sm text-espresso-soft">
                  This is exactly what your WhatsApp message will say. Nothing
                  is sent until you press send inside WhatsApp.
                </p>
                <pre
                  className="mt-4 max-w-full overflow-x-auto whitespace-pre-wrap break-words rounded-lg rounded-tl-none border border-gold/40 bg-blush/30 p-5 font-sans text-sm leading-relaxed text-espresso"
                >
                  {message}
                </pre>
              </section>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={whatsappUrl(message)} external size="lg">
                  <MessageCircle className="size-4" aria-hidden />
                  Open WhatsApp to Send Inquiry
                  <span className="sr-only"> (opens in a new tab)</span>
                </ButtonLink>
                <Button type="button" variant="outline" size="lg" onClick={() => goTo(step - 1)}>
                  Edit Details
                </Button>
                <Button type="button" variant="ghost" size="lg" onClick={reset}>
                  Start Over
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {!isReview && (
        <aside aria-label="Booking summary" className="lg:sticky lg:top-28 lg:self-start">
          <BookingSummary
            service={service}
            date={date}
            slot={slot}
            name={name}
            phone={phone}
          />
        </aside>
      )}
    </div>
  );
}

function StepActions({
  step,
  onBack,
  nextLabel = "Continue",
}: {
  step: number;
  onBack: () => void;
  nextLabel?: string;
}) {
  return (
    <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
      {step > 0 && (
        <Button type="button" variant="outline" onClick={onBack}>
          <ChevronLeft className="size-4" aria-hidden />
          Back
        </Button>
      )}
      <Button type="submit">{nextLabel}</Button>
    </div>
  );
}
