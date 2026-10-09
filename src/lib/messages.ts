import { salon } from "@/data/salon";
import { cleanText, formatDisplayDate, normalisePhone } from "@/lib/validation";

export type BookingMessageInput = {
  serviceTitle: string;
  /** YYYY-MM-DD */
  date: string;
  timeLabel: string;
  name: string;
  phone: string;
};

/**
 * Builds the plain-text WhatsApp inquiry for the booking demo.
 * The wording makes clear this is a request, not a confirmed appointment.
 */
export function buildBookingMessage(input: BookingMessageInput): string {
  return [
    `Hello ${salon.name}! I'd like to enquire about an appointment.`,
    "",
    `Service: ${input.serviceTitle}`,
    `Preferred date: ${formatDisplayDate(input.date)}`,
    `Preferred time: ${input.timeLabel}`,
    `Name: ${cleanText(input.name, 60)}`,
    `Phone: ${normalisePhone(input.phone.trim())}`,
    "",
    "Please let me know if this is available. I understand nothing is confirmed until the studio replies.",
  ].join("\n");
}

export type ContactMessageInput = {
  name: string;
  phone: string;
  topic: string;
  message: string;
};

export function buildContactMessage(input: ContactMessageInput): string {
  return [
    `Hello ${salon.name}!`,
    "",
    `Enquiry about: ${input.topic}`,
    "",
    cleanText(input.message, 500),
    "",
    `Name: ${cleanText(input.name, 60)}`,
    `Phone: ${normalisePhone(input.phone.trim())}`,
  ].join("\n");
}
