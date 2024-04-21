import { Globe } from "lucide-react";
export const Header = () => {
  return (
    <header className="p-4 fixed bg-myYellow-base w-full">
      <nav className="flex max-w-screen-lg gap-x-1 mx-auto items-center">
        <Globe className="text-myPurple-base" />
        <h1 className="font-semibold text-lg">YAN.</h1>
      </nav>
    </header>
  );
};
