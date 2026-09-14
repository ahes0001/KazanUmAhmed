import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  size?: "default" | "sm" | "lg" | "icon";
}

/**
 * An anchor element styled exactly like the shadcn Button.
 * Use this when you need a real link with button appearance.
 */
export function LinkButton({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  );
}
