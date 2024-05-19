import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BorderGradientForButtonProps = {
  children: ReactNode;
  className?: string;
  fillColor?: string;
  roundedSize?: string;
  borderWidthClass?: string;
};

export const BorderGradientForButton = ({
  children,
  className,
  fillColor = "bg-black",
  roundedSize = "rounded-2xl",
  borderWidthClass = "-inset-[2px]",
}: BorderGradientForButtonProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={cn(
          `absolute bg-gradient-to-r from-borderGradient-start to-borderGradient-end`,
          roundedSize,
          borderWidthClass
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
