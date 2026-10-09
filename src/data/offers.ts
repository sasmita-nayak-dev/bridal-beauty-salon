import type { ImageAsset, Offer } from "@/types";

const img = (file: string, alt: string): ImageAsset => ({
  src: `/images/${file}`,
  alt,
  width: 800,
  height: 1000,
});

/**
 * SAMPLE offers. Replace with the studio's real offers.
 * Only state discounts and benefits the studio will honour, and do not add
 * countdown timers or scarcity claims.
 */
export const offers: Offer[] = [
  {
    id: "early-booking",
    title: "Early Booking Consultation",
    description:
      "Sample offer: a complimentary look consultation when you enquire about your bridal date early.",
    appliesTo: ["Bridal Makeup", "Bridal packages"],
    highlight: "Sample benefit: complimentary consultation",
    terms: "Sample terms. Replace with the salon's actual conditions.",
    whatsappMessage:
      "Hello! I'd like to know more about the early booking consultation offer.",
    image: img("service-bridal.svg", "Illustrative artwork for the early booking offer"),
  },
  {
    id: "bridal-party",
    title: "Bridal Party Package",
    description:
      "Sample offer: curated styling for the bride's family and friends on the wedding day.",
    appliesTo: ["Party Makeup", "Hair Styling"],
    highlight: "Sample group styling package",
    samplePrice: 6500,
    samplePriceLabel: "Sample price per guest",
    terms: "Sample terms. Replace with the salon's actual conditions.",
    whatsappMessage:
      "Hello! I'd like to know more about the bridal party package.",
    image: img("service-party.svg", "Illustrative artwork for the bridal party package"),
  },
  {
    id: "skin-prep",
    title: "Pre-Wedding Skin Prep",
    description:
      "Sample offer: a skincare plan leading up to your wedding, planned around your skin and your timeline.",
    appliesTo: ["Skincare and Facials", "Bridal Makeup"],
    highlight: "Sample series of skincare sessions",
    samplePrice: 9500,
    samplePriceLabel: "Sample price for the series",
    terms: "Sample terms. Replace with the salon's actual conditions.",
    whatsappMessage:
      "Hello! I'd like to know more about the pre-wedding skin prep offer.",
    image: img("service-skincare.svg", "Illustrative artwork for the pre-wedding skin prep offer"),
  },
  {
    id: "festive-glam",
    title: "Festive Glam Combination",
    description:
      "Sample offer: makeup and hairstyling combined for festive evenings and family celebrations.",
    appliesTo: ["Party Makeup", "Hair Styling"],
    highlight: "Sample combined makeup and hair price",
    samplePrice: 6500,
    samplePriceLabel: "Sample combined price",
    terms: "Sample terms. Replace with the salon's actual conditions.",
    whatsappMessage:
      "Hello! I'd like to know more about the festive glam combination.",
    image: img("service-hair.svg", "Illustrative artwork for the festive glam combination"),
  },
];
