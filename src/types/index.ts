export type ImageAsset = {
  /** Local path (in /public) or an https URL allowed in next.config.ts */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SeoConfig = {
  /** Public origin of the deployed site, no trailing slash */
  siteUrl: string;
  /**
   * LocalBusiness structured data is emitted ONLY when `enabled` is true and a
   * verified `address` is provided. Leave disabled for demo content.
   */
  localBusiness: {
    enabled: boolean;
    type: "BeautySalon" | "HealthAndBeautyBusiness";
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
};

export type SalonConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  announcement: string;
  /** Display phone, e.g. "+91 98765 43210" */
  phone: string;
  /** Digits only with country code, used for wa.me and tel: links */
  whatsapp: string;
  email: string;
  address: {
    lines: string[];
    note?: string;
  };
  hours: { days: string; time: string }[];
  social: { instagram: string; facebook?: string };
  /** Google Maps directions or place link. Replace with the studio's real link. */
  mapsUrl: string;
  whatsappMessages: {
    default: string;
    look: string;
    booking: string;
    bridal: string;
  };
  seo: SeoConfig;
  /** Shown wherever sample content appears. Set to false for real clients. */
  isDemo: boolean;
  copyrightYear: number;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  /** Sample price, in INR */
  startingPrice: number;
  /** Approximate duration shown to visitors, e.g. "Approx. 2 hours" */
  duration: string;
  /** Short bullet points shown on the detailed service card */
  highlights: string[];
  /** Prefilled WhatsApp message for the inquiry button */
  inquiryMessage: string;
  image: ImageAsset;
  href: string;
};

export type BridalPackage = {
  slug: string;
  name: string;
  summary: string;
  /** Sample price, in INR */
  price: number;
  features: string[];
  featured?: boolean;
  whatsappMessage: string;
};

export type GalleryCategory =
  | "Bridal"
  | "Engagement"
  | "Reception"
  | "Party"
  | "Hair";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: ImageAsset;
  /** Short caption shown in the lightbox. Falls back to the image alt text. */
  caption?: string;
  /** True only when the photo belongs to the salon and is cleared for use */
  isSalonWork: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  context: string;
  /** Demo entries are labelled on the page. Set false for genuine reviews. */
  isPlaceholder: boolean;
};

export type Offer = {
  id: string;
  title: string;
  description: string;
  /** Service titles this offer applies to */
  appliesTo: string[];
  /** One-line benefit or discount statement. Only state what the studio will honour. */
  highlight: string;
  /** Optional sample price in INR */
  samplePrice?: number;
  samplePriceLabel?: string;
  terms: string;
  whatsappMessage: string;
  image: ImageAsset;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Replace with verified qualifications. Never invent credentials. */
  credentials: string;
  image: ImageAsset;
  /** Sample entries are labelled on the page. Set false for real team members. */
  isPlaceholder: boolean;
};

export type TimeSlot = {
  id: string;
  label: string;
  period: "Morning" | "Afternoon" | "Evening";
};
