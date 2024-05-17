import Image from "next/image";
import { Container } from "./Container";
import { Logo } from "@/components/ui/Logo";
export const Header = () => {
  return (
    <header className="py-4 px-5 fixed w-full z-20 min-h-16 bg-backgroundGradient-start 2xl:hidden">
      <nav className="flex gap-x-1 mx-auto items-center">
        <Logo />
      </nav>
    </header>
  );
};
