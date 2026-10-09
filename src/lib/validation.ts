/**
 * Pure form helpers shared by the booking demo and the contact form.
 * No browser or framework APIs, so they are easy to test.
 */

export type FieldErrors<K extends string> = Partial<Record<K, string>>;

/** Trim, drop control characters and collapse repeated whitespace. */
export function cleanText(value: string, maxLength = 500): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength);
}

const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M} .'’-]*$/u;

export function validateName(value: string): string | null {
  const name = cleanText(value, 100);
  if (!name) return "Please enter your name.";
  if (name.length < 2) return "Your name looks too short.";
  if (name.length > 60) return "Please keep your name under 60 characters.";
  if (!NAME_PATTERN.test(name)) {
    return "Please use letters only in your name (spaces, apostrophes and hyphens are fine).";
  }
  return null;
}

/** Strip spaces, dashes and brackets from a phone number. */
export function normalisePhone(value: string): string {
  return value.replace(/[\s\-().]/g, "");
}

/**
 * Accepts an optional leading "+" followed by 10 to 15 digits.
 * Generic on purpose so the template works for studios in any country.
 */
export function validatePhone(value: string): string | null {
  const raw = value.trim();
  if (!raw) return "Please enter your phone number.";
  const phone = normalisePhone(raw);
  if (!/^\+?\d+$/.test(phone)) {
    return "Phone numbers can only contain digits, spaces and an optional + at the start.";
  }
  const digits = phone.replace("+", "");
  if (digits.length < 10) return "That number looks too short. Please include all digits.";
  if (digits.length > 15) return "That number looks too long. Please check it.";
  return null;
}

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;

/** True when `iso` is a real calendar date in YYYY-MM-DD form. */
export function isValidIsoDate(iso: string): boolean {
  const match = ISO_DATE.exec(iso);
  if (!match) return false;
  const [, y, m, d] = match.map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return (
    date.getUTCFullYear() === y &&
    date.getUTCMonth() === m - 1 &&
    date.getUTCDate() === d
  );
}

/**
 * Validates a preferred date. `today` and `maxDate` are ISO strings supplied
 * by the caller (kept as arguments so this function stays deterministic).
 */
export function validateDate(
  value: string,
  today: string,
  maxDate: string,
): string | null {
  if (!value) return "Please choose a preferred date.";
  if (!isValidIsoDate(value)) return "Please enter a valid date.";
  if (today && value < today) return "Please choose today or a future date.";
  if (maxDate && value > maxDate) {
    return "Please choose a date within the next year.";
  }
  return null;
}

export function validateMessage(value: string): string | null {
  const message = cleanText(value, 2000);
  if (!message) return "Please tell us a little about what you need.";
  if (message.length < 10) return "Please add a little more detail (at least 10 characters).";
  if (value.trim().length > 500) return "Please keep your message under 500 characters.";
  return null;
}

/** Format YYYY-MM-DD as e.g. "Saturday, 14 November 2026" without time zone drift. */
export function formatDisplayDate(iso: string): string {
  if (!isValidIsoDate(iso)) return iso;
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}
