import type { ImageAsset, Service } from "@/types";

const img = (file: string, alt: string, width = 800, height = 1000): ImageAsset => ({
  src: `/images/${file}`,
  alt,
  width,
  height,
});

/** Sample prices (INR) and durations. Replace with the client's real price list. */
export const services: Service[] = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    description:
      "A personalised bridal look, designed around your outfit, your skin and your traditions.",
    startingPrice: 25000,
    duration: "Approx. 3–4 hours",
    highlights: [
      "Look planned around your outfit and jewellery",
      "Skin preparation before makeup",
      "Finishing touches and touch-up guidance",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Bridal Makeup.",
    image: {
      src: "https://drive.usercontent.google.com/download?id=1eiOlaVurBw0mFBVS0z_hsAJNrZ1amiE6&export=view",
      alt: "Bridal makeup look",
      width: 800,
      height: 1000,
    },
    href: "/services#bridal-makeup",
  },
  {
    slug: "engagement-makeup",
    title: "Engagement Makeup",
    description:
      "Luminous, camera-ready beauty for the ceremony that begins your celebrations.",
    startingPrice: 12000,
    duration: "Approx. 2–3 hours",
    highlights: [
      "Luminous, camera-friendly finish",
      "Complements your outfit and hair",
      "Comfortable for a long ceremony",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Engagement Makeup.",
    image: {
      src: "https://drive.usercontent.google.com/download?id=1GljhWD7Q6piUmWUXhOF6fJ72jPPzNMTM&export=view",
      alt: "Engagement makeup look",
      width: 800,
      height: 1000,
    },
    href: "/services#engagement-makeup",
  },
  {
    slug: "reception-makeup",
    title: "Reception Makeup",
    description:
      "An evening look with polished definition that holds beautifully through the night.",
    startingPrice: 15000,
    duration: "Approx. 2–3 hours",
    highlights: [
      "Defined evening finish",
      "Designed to hold through the event",
      "Pairs with hairstyling on request",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Reception Makeup.",
    image: {
      src: "https://drive.usercontent.google.com/download?id=1qbalF2lzbYdCJxiiFIboyb3yptHrWbvu&export=view",
      alt: "Reception makeup look",
      width: 800,
      height: 1000,
    },
    href: "/services#reception-makeup",
  },
  {
    slug: "party-makeup",
    title: "Party Makeup",
    description:
      "Effortless glamour for sangeet nights, family functions and every occasion in between.",
    startingPrice: 4500,
    duration: "Approx. 1–1.5 hours",
    highlights: [
      "Soft glam to statement looks",
      "Quick, polished and photo-ready",
      "Ideal for sangeet and family functions",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Party Makeup.",
    image: img("service-party.svg", "Illustrative artwork for party makeup"),
    href: "/services#party-makeup",
  },
  {
    slug: "hair-styling",
    title: "Hair Styling",
    description:
      "From soft waves to classic buns, styled to complement your look and your jewellery.",
    startingPrice: 3000,
    duration: "Approx. 1–2 hours",
    highlights: [
      "Waves, buns, braids and updos",
      "Styled around jewellery and dupatta",
      "Can be added to any makeup service",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Hair Styling.",
    image: img("service-hair.svg", "Illustrative artwork for hair styling"),
    href: "/services#hair-styling",
  },
  {
    slug: "skincare-facials",
    title: "Skincare and Facials",
    description:
      "Restorative treatments that prepare your skin to look its best, today and on the day.",
    startingPrice: 2500,
    duration: "Approx. 1–1.5 hours",
    highlights: [
      "Treatment chosen for your skin type",
      "Pre-event skin preparation",
      "Relaxing, restorative experience",
    ],
    inquiryMessage: "Hello! I'd like to enquire about Skincare and Facials.",
    image: img("service-skincare.svg", "Illustrative artwork for skincare and facials"),
    href: "/services#skincare-facials",
  },
];
