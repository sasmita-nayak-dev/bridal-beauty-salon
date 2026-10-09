import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-rose-deep text-white hover:bg-espresso shadow-[0_1px_0_rgba(255,255,255,0.2)_inset]",
        outline:
          "border border-espresso/30 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory",
        light:
          "bg-ivory text-espresso hover:bg-blush",
        ghost: "text-espresso hover:text-rose-deep",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6",
        lg: "h-14 px-10",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    /** Use for external destinations such as WhatsApp or Maps */
    external?: boolean;
  };

export function ButtonLink({
  href,
  variant,
  size,
  className,
  external,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

/** Native <button> with the same visual variants as ButtonLink. */
export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
