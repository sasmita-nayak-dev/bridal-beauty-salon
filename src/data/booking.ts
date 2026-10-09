import type { TimeSlot } from "@/types";

/**
 * SAMPLE time slots for the booking demonstration.
 * Availability is NOT checked: these are illustrative only.
 */
export const timeSlots: TimeSlot[] = [
  { id: "10:00", label: "10:00 AM", period: "Morning" },
  { id: "11:00", label: "11:00 AM", period: "Morning" },
  { id: "12:00", label: "12:00 PM", period: "Afternoon" },
  { id: "13:00", label: "1:00 PM", period: "Afternoon" },
  { id: "14:00", label: "2:00 PM", period: "Afternoon" },
  { id: "15:00", label: "3:00 PM", period: "Afternoon" },
  { id: "16:00", label: "4:00 PM", period: "Evening" },
  { id: "17:00", label: "5:00 PM", period: "Evening" },
];

export const timePeriods: TimeSlot["period"][] = ["Morning", "Afternoon", "Evening"];
