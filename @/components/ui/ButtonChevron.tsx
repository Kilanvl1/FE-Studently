import { Button, ButtonProps } from "./button";
import { ChevronRight } from "lucide-react";

export type ButtonChevronProps = ButtonProps & { isLoading?: boolean };

export const ButtonChevron = ({
  children,
  isLoading,
  ...props
}: ButtonChevronProps) => {
  return (
    <Button {...props} loading={isLoading}>
      {children}
      <ChevronRight className="ml-3 w-3 h-3" />
    </Button>
  );
};
