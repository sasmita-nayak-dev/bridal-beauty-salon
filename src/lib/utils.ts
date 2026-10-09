import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { salon } from "@/data/salon";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function whatsappUrl(message: string = salon.whatsappMessages.default) {
  return `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:+${salon.whatsapp}`;
}
