"use client";

import { useState } from "react";
import { Info, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { Field, fieldAria, inputClass } from "@/components/shared/form-field";
import { Button, ButtonLink } from "@/components/ui/button";
import { buildContactMessage } from "@/lib/messages";
import { whatsappUrl } from "@/lib/utils";
import {
  type FieldErrors,
  validateMessage,
  validateName,
  validatePhone,
} from "@/lib/validation";

type ErrorKey = "name" | "phone" | "message";

const topics = [
  "Bridal makeup",
  ...services.filter((s) => s.slug !== "bridal-makeup").map((s) => s.title),
  "Something else",
];

/**
 * Frontend-only enquiry form. It validates input, then prepares a WhatsApp
 * message. Nothing is sent to or stored by this website.
 */
export function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors<ErrorKey>>({});
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  const clear = (key: ErrorKey) => {
    setPreparedUrl(null);
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found: FieldErrors<ErrorKey> = {};
    const nameError = validateName(name);
    const phoneError = validatePhone(phone);
    const messageError = validateMessage(message);
    if (nameError) found.name = nameError;
    if (phoneError) found.phone = phoneError;
    if (messageError) found.message = messageError;

    if (Object.keys(found).length > 0) {
      setErrors(found);
      setPreparedUrl(null);
      const first = found.name ? "contact-name" : found.phone ? "contact-phone" : "contact-message";
      document.getElementById(first)?.focus();
      return;
    }
    setErrors({});
    setPreparedUrl(whatsappUrl(buildContactMessage({ name, phone, topic, message })));
  };

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby="contact-form-note">
      <p
        id="contact-form-note"
        className="flex gap-2 border border-gold/40 bg-cream p-4 text-sm text-espresso-soft"
      >
        <Info className="mt-0.5 size-4 shrink-0 text-gold-deep" aria-hidden />
        <span>
          This form is a frontend demonstration. It does not send or store
          anything. After you complete it, you can open WhatsApp with your
          message ready to send.
        </span>
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="contact-name" label="Your name" required error={errors.name}>
          <input
            {...fieldAria("contact-name", errors.name)}
            type="text"
            autoComplete="name"
            maxLength={60}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clear("name");
            }}
            className={inputClass}
          />
        </Field>
        <Field id="contact-phone" label="Phone number" required error={errors.phone}>
          <input
            {...fieldAria("contact-phone", errors.phone)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={20}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              clear("phone");
            }}
            className={inputClass}
          />
        </Field>
        <Field id="contact-topic" label="I am enquiring about" className="sm:col-span-2">
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              setPreparedUrl(null);
            }}
            className={inputClass}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id="contact-message"
          label="Your message"
          required
          error={errors.message}
          hint="Tell us about your occasion, date and any preferences (up to 500 characters)."
          className="sm:col-span-2"
        >
          <textarea
            {...fieldAria("contact-message", errors.message, "hint")}
            rows={5}
            maxLength={500}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              clear("message");
            }}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg">
          Prepare WhatsApp Message
        </Button>
      </div>

      <div aria-live="polite" className="mt-6">
        {preparedUrl && (
          <div className="border border-gold bg-ivory p-5">
            <p className="font-medium text-espresso">Your message is ready.</p>
            <p className="mt-1 text-sm text-espresso-soft">
              Nothing has been sent yet. Open WhatsApp, check the message and
              press send to deliver it to the studio.
            </p>
            <ButtonLink href={preparedUrl} external className="mt-4">
              <MessageCircle className="size-4" aria-hidden />
              Open WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </ButtonLink>
          </div>
        )}
      </div>
    </form>
  );
}
