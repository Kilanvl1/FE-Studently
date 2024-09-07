import { cn } from "app/utils";

type ProvideInfoProps = {
  children: React.ReactNode;
  className?: string;
};
export const ProvideInfo = ({ className, children }: ProvideInfoProps) => {
  return (
    <ul
      className={cn(
        className,
        "flex flex-col gap-y-4 list-disc p-4 rounded-md"
      )}
    >
      {children}
    </ul>
  );
};
