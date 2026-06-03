import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

function Glow({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glowVariants>) {
  const centered = variant === "center";

  return (
    <div
      data-slot="glow"
      className={cn(glowVariants({ variant }), className)}
      {...props}
    >
      <div
        className={cn(
          "absolute left-1/2 h-[340px] w-[78%] -translate-x-1/2 rounded-[999px] opacity-85 blur-[72px] sm:h-[520px]",
          centered ? "-translate-y-1/2" : "top-0"
        )}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,211,238,0.85) 0%, rgba(34,211,238,0.35) 45%, rgba(34,211,238,0) 75%)",
        }}
      />
      <div
        className={cn(
          "absolute left-1/2 h-[220px] w-[50%] -translate-x-1/2 rounded-[999px] opacity-95 blur-[40px] sm:h-[320px]",
          centered ? "-translate-y-1/2" : "top-0"
        )}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.95) 0%, rgba(56,189,248,0.4) 55%, rgba(56,189,248,0) 80%)",
        }}
      />
    </div>
  );
}

export default Glow;
