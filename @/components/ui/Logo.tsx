import Image from "next/image";
import logo from "../../../public/Logo.svg";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`flex gap-x-1 items-center ${className}`}>
      <Image src={logo} alt="Logo" width={35} height={35} />
      <h1 className="font-semibold text-lg ">Studently</h1>
    </Link>
  );
};
