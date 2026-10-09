import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      className={cn(
        "max-w-2xl",
        center && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow", tone === "light" && "text-gold")}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl",
          tone === "light" ? "text-ivory" : "text-espresso",
        )}
      >
        {title}
      </Tag>
      <span className={cn("gold-rule mt-6", center && "mx-auto")} />
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ivory/80" : "text-espresso-soft",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
