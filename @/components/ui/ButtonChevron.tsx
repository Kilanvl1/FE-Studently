import { Button } from "./Button";
import { ChevronRight } from "lucide-react";
import { ButtonProps } from "./Button";

export const ButtonChevron = ({ children, ...props }: ButtonProps) => {
  return (
    <Button {...props}>
      {children}
      <ChevronRight className="ml-3 w-3 h-3" />
    </Button>
  );
};
