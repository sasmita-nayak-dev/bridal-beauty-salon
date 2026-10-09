import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared input styling so every form looks the same. */
export const inputClass =
  "block w-full border border-espresso/30 bg-ivory px-4 py-3 text-base text-espresso placeholder:text-espresso-soft/70 transition-colors focus-visible:border-rose-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-deep aria-[invalid=true]:border-red-700";

/** Props to spread on an input so labels, hints and errors are announced. */
export function fieldAria(id: string, error?: string, hint?: string) {
  const describedBy =
    [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;
  return {
    id,
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": describedBy,
  };
}

type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
};

export function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-espresso">
        {label}
        {required && (
          <span className="text-rose-deep">
            {" "}
            <span aria-hidden>*</span>
            <span className="sr-only">(required)</span>
          </span>
        )}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-espresso-soft">
          {hint}
        </p>
      )}
      <div className="mt-2">{children}</div>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className={cn("mt-2 text-sm font-medium text-red-800")}>
      {message}
    </p>
  );
}
