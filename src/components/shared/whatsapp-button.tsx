import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";
import type { ComponentProps } from "react";

type WhatsAppButtonProps = {
  /** Prefilled message. Defaults to the salon's general enquiry message. */
  message?: string;
  label?: string;
  variant?: ComponentProps<typeof ButtonLink>["variant"];
  size?: ComponentProps<typeof ButtonLink>["size"];
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "primary",
  size,
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <ButtonLink
      href={whatsappUrl(message)}
      external
      variant={variant}
      size={size}
      className={className}
    >
      {showIcon && <MessageCircle className="size-4" aria-hidden />}
      {label}
      <span className="sr-only"> (opens WhatsApp in a new tab)</span>
    </ButtonLink>
  );
}
