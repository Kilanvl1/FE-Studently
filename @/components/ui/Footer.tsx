import logofooter from "../../../public/logoFooter.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="py-6 px-5 w-full min-h-16 mb-10">
      <div className="flex max-w-screen-2xl mx-auto justify-between items-center">
        <div className="flex gap-x-1 items-center text-[#838d92]">
          <Image src={logofooter} alt="logoFooter" />
          <h1>Studently</h1>
        </div>
        <div className="text-[#838d92]">© Studently 2024</div>
      </div>
    </footer>
  );
};
