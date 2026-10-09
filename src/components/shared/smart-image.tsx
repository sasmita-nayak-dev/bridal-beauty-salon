import Image from "next/image";
import type { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

type SmartImageProps = {
  image: ImageAsset;
  className?: string;
  sizes: string;
  priority?: boolean;
  /** Fill the parent (parent must be positioned and sized) */
  fill?: boolean;
};

/**
 * Wrapper around next/image. SVG placeholders skip the optimizer;
 * swap in JPG/WebP photos and they are optimised automatically.
 */
export function SmartImage({
  image,
  className,
  sizes,
  priority,
  fill = true,
}: SmartImageProps) {
  const isSvg = image.src.endsWith(".svg");
  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : undefined}
        unoptimized={isSvg}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : undefined}
      unoptimized={isSvg}
      className={className}
    />
  );
}
