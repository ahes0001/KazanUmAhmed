import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "start" && "max-w-2xl text-start",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl leading-tight font-medium text-foreground md:text-4xl lg:text-5xl">
        {heading}
      </h2>
    </div>
  );
}
