import { Globe } from "lucide-react";
export const Header = () => {
  return (
    <div className="flex p-4 items-center gap-x-1">
      <Globe className="text-purple-900" />
      <h1 className="font-semibold text-lg">YAN.</h1>
    </div>
  );
};
