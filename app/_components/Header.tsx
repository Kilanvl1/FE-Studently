import { Globe } from "lucide-react";
export const Header = ({
  headerColor,
  logoColor,
}: {
  headerColor: string;
  logoColor: string;
}) => {
  return (
    <header
      className={`p-4 fixed w-full ${headerColor} bg-gradient-to-r from-myBlue-gradient via-myBlue-base to-myBlue-gradient`}
    >
      <nav className="flex max-w-screen-lg gap-x-1 mx-auto items-center">
        <Globe className={`${logoColor}`} />
        <h1 className="font-semibold text-lg ">Young Amsterdam Network.</h1>
      </nav>
    </header>
  );
};
