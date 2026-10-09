import type { TeamMember } from "@/types";

/**
 * SAMPLE TEAM CONTENT. Every name, role, biography and credential below is a
 * placeholder. Replace with real team details and only list qualifications
 * the team member genuinely holds.
 */
export const team: TeamMember[] = [
  {
    id: "team-1",
    name: "Sample Team Member One",
    role: "Lead Bridal Artist (sample role)",
    bio: "Sample biography. Describe this artist's approach to bridal looks, in the studio's own words.",
    credentials: "Sample credentials placeholder. Add verified qualifications only.",
    image: {
      src: "/images/team-1.svg",
      alt: "Placeholder portrait for a team member (replace with a real photograph)",
      width: 800,
      height: 1000,
    },
    isPlaceholder: true,
  },
  {
    id: "team-2",
    name: "Sample Team Member Two",
    role: "Hair Stylist (sample role)",
    bio: "Sample biography. Describe this stylist's specialities, such as bridal hair or occasion styling.",
    credentials: "Sample credentials placeholder. Add verified qualifications only.",
    image: {
      src: "/images/team-2.svg",
      alt: "Placeholder portrait for a team member (replace with a real photograph)",
      width: 800,
      height: 1000,
    },
    isPlaceholder: true,
  },
  {
    id: "team-3",
    name: "Sample Team Member Three",
    role: "Skincare Specialist (sample role)",
    bio: "Sample biography. Describe this specialist's skincare approach and the treatments they offer.",
    credentials: "Sample credentials placeholder. Add verified qualifications only.",
    image: {
      src: "/images/team-3.svg",
      alt: "Placeholder portrait for a team member (replace with a real photograph)",
      width: 800,
      height: 1000,
    },
    isPlaceholder: true,
  },
];
