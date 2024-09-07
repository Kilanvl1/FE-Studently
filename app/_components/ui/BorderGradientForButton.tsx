import { ReactNode } from "react";
import { cn } from "app/utils";
import { cva, VariantProps } from "class-variance-authority";

const borderGradientForButtonStyles = cva("", {
  variants: {
    fillColor: {
      black: "bg-black",
      white: "bg-white",
      transparent: "bg-transparent",
    },
    roundedSize: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
    },
    borderWidth: {
      sm: "-inset-[1px]",
      md: "-inset-[2px]",
      lg: "-inset-[3px]",
    },
    gradientDirection: {
      toR: "bg-gradient-to-r",
      toL: "bg-gradient-to-l",
      toT: "bg-gradient-to-t",
      toB: "bg-gradient-to-b",
    },
    gradientColors: {
      purple: "from-borderGradient-start to-borderGradient-end",

      green: "from-gradients-greenBlue-start to-gradients-greenBlue-end",
    },
  },
});
type BorderGradientForButtonProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof borderGradientForButtonStyles>;

export const BorderGradientForButton = ({
  children,
  fillColor = "black",
  roundedSize = "2xl",
  borderWidth = "md",
  gradientDirection = "toR",
  gradientColors = "purple",
  className,
}: BorderGradientForButtonProps) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={cn(
          `absolute`,
          borderGradientForButtonStyles({
            roundedSize,
            borderWidth,
            gradientDirection,
            gradientColors,
          })
        )}
        aria-hidden="true"
      ></div>
      <div
        className={cn(
          `relative inset-0 z-10`,
          borderGradientForButtonStyles({ fillColor, roundedSize })
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};
