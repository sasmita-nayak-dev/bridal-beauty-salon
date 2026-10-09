import type { BridalPackage, ProcessStep } from "@/types";

/** Sample prices (INR). Replace with the client's real packages. */
export const bridalPackages: BridalPackage[] = [
  {
    slug: "intimate-bride",
    name: "The Intimate Bride",
    summary: "A refined essentials package for smaller, quieter celebrations.",
    price: 28000,
    features: ["Bridal makeup", "Basic hairstyling", "Finishing touches"],
    whatsappMessage:
      "Hello! I'm interested in The Intimate Bride package. Could you share more details?",
  },
  {
    slug: "signature-bride",
    name: "The Signature Bride",
    summary: "Our most-loved experience, shaped around a look that is yours alone.",
    price: 48000,
    features: [
      "Bridal makeup",
      "Hairstyling",
      "Draping assistance",
      "Personalized look consultation",
    ],
    featured: true,
    whatsappMessage:
      "Hello! I'm interested in The Signature Bride package. Could you share more details?",
  },
  {
    slug: "grand-celebration",
    name: "The Grand Celebration",
    summary: "A complete bridal experience for the grandest of wedding days.",
    price: 78000,
    features: [
      "Bridal makeup",
      "Premium hairstyling",
      "Draping assistance",
      "Optional trial or consultation",
    ],
    whatsappMessage:
      "Hello! I'm interested in The Grand Celebration package. Could you share more details?",
  },
];

/** The bridal journey shown on /bridal. Edit to match the studio's real process. */
export const bridalProcess: ProcessStep[] = [
  {
    title: "Consultation",
    description:
      "We begin with a conversation about your wedding, your outfit, your jewellery and the look you imagine.",
  },
  {
    title: "Look planning",
    description:
      "Together we shape colours, finish and hairstyle so every element works as one.",
  },
  {
    title: "Optional trial",
    description:
      "If you would like to see the look before the day, a trial can be arranged. Availability and pricing are confirmed on enquiry.",
  },
  {
    title: "Wedding day",
    description:
      "Unhurried makeup and hairstyling on the morning, with finishing touches before you step out.",
  },
];

/** Consultation and trial information. Sample wording: confirm with the studio. */
export const consultationInfo = {
  consultation: {
    title: "The Consultation",
    intro:
      "A relaxed conversation to understand your vision. It is the best place to start.",
    points: [
      "Share your wedding date, venue style and outfit details",
      "Bring photos of outfits, jewellery and looks you admire",
      "Discuss skin concerns and preferences",
      "Receive a package recommendation and a clear quote",
    ],
  },
  trial: {
    title: "The Optional Trial",
    intro:
      "A trial is optional. It lets you see and refine your look before the wedding.",
    points: [
      "Try the look and hairstyle in advance",
      "Make adjustments with your artist",
      "Trial availability, timing and pricing are confirmed by the studio",
      "Sample content: replace with the studio's own trial policy",
    ],
  },
};
