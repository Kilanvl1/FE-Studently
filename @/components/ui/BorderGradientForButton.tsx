import { ReactNode } from "react";

type BorderGradientForButtonProps = {
  children: ReactNode;
  className?: string;
};

export const BorderGradientForButton = ({
  children,
  className,
}: BorderGradientForButtonProps) => {
  return (
    <div className={`relative rounded-2xl ${className}`}>
      <div
        className="absolute -inset-[2px] bg-gradient-to-r from-borderGradient-start to-borderGradient-end rounded-2xl z-0"
        aria-hidden="true"
      ></div>

      <div
        className="absolute inset-0 bg-black rounded-2xl z-0"
        aria-hidden="true"
      ></div>

      {children}
    </div>
  );
};
