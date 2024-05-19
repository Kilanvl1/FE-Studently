import { Button, ButtonProps } from "./button";
import { ChevronRight } from "lucide-react";

export const ButtonChevron = ({ children, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      {children}
      <ChevronRight className="ml-3 w-3 h-3" />
    </Button>
  );
};
