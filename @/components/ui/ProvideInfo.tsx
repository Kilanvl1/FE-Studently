import { cn } from "@/lib/utils";

type ProvideInfoProps = {
  children: React.ReactNode;
  className?: string;
};
export const ProvideInfo = ({ className, children }: ProvideInfoProps) => {
  return (
    <ul
      className={cn(
        className,
        "flex flex-col gap-y-4 list-disc border p-4 px-6 rounded-md"
      )}
    >
      {children}
    </ul>
  );
};
