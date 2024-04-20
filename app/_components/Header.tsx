import { Globe } from "lucide-react";
export const Header = () => {
  return (
    <header className="flex p-4 items-center gap-x-1  mx-auto fixed bg-myYellow-base">
      <nav className="max-w-[1440px] w-full">
        <Globe className="text-myPurple-base" />
        <h1 className="font-semibold text-lg">YAN.</h1>
      </nav>
    </header>
  );
};
