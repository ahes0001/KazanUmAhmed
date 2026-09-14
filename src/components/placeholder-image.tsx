import { cn } from "@/lib/utils";

/**
 * A clearly labeled placeholder image component.
 * REPLACE: Swap the inner label for an actual <Image /> once assets are ready.
 */
export function PlaceholderImage({
  label,
  className,
  containerClassName,
  rounded = "xl",
}: {
  label: string;
  className?: string;
  containerClassName?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}) {
  const roundedClass =
    {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    }[rounded] ?? "rounded-xl";

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border-2 border-dashed border-foreground/10 bg-muted",
        roundedClass,
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center p-6 text-center",
          className
        )}
      >
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
