import { Input, InputProps } from "./input";
import { Label } from "./label";

type InputWithLabelProps = InputProps & {
  label: string;
};

export function InputWithLabel({
  label,
  onChange,
  type,
  id,
  placeholder,
  value,
  ...props
}: InputWithLabelProps) {
  return (
    <div className="grid w-full items-center gap-1.5 my-5">
      <Label htmlFor={id} className="font-normal text-base">
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
}
