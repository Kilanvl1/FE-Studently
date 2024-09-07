import { Logo } from "app/_components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="py-4 px-5 fixed w-full z-20 min-h-16 bg-backgroundGradient-start 2xl:hidden">
      <nav className="flex justify-between gap-x-1 items-center">
        <Logo />
        <MobileMenu />
      </nav>
    </header>
  );
};
