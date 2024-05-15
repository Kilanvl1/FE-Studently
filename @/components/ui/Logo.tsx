import Image from "next/image";
import logo from "../../../public/Logo.svg";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex gap-x-1 items-center ${className}`}>
      <Image src={logo} alt="Logo" width={35} height={35} />
      <h1 className="font-semibold text-lg ">Studently</h1>
    </div>
  );
};
