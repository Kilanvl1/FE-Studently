import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BorderGradientForButtonProps = {
  children: ReactNode;
  className?: string;
  fillColor?: string;
  roundedSize?: string;
  borderWidthClass?: string;
  gradientDirection?: string;
};

export const BorderGradientForButton = ({
  children,
  className,
  fillColor = "bg-black",
  roundedSize = "rounded-2xl",
  borderWidthClass = "-inset-[2px]",
  gradientDirection = "bg-gradient-to-r",
}: BorderGradientForButtonProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={cn(
          `absolute from-borderGradient-start to-borderGradient-end`,
          roundedSize,
          borderWidthClass,
          gradientDirection
        )}
        aria-hidden="true"
      ></div>
      <div
        className={cn(`relative inset-0 z-10`, fillColor, roundedSize)}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};
