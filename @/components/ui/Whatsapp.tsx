import { BorderGradientForButton } from "./BorderGradientForButton";
import { Button } from "./button";
import whatsapp from "../../../public/Vector.svg";
import Image from "next/image";
import Link from "next/link";
export const Whatsapp = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="font-bold text-2xl">Got questions or concerns?</h1>
      <BorderGradientForButton
        className="max-w-max"
        fillColor="transparent"
        gradientColors="green"
      >
        <Link href="https://wa.me/31648115430">
          <Button className="flex gap-x-4 bg-white rounded-2xl">
            <Image src={whatsapp} alt="whatsapp" />
            <p className="text-black">Whatsapp</p>
          </Button>
        </Link>
      </BorderGradientForButton>
    </div>
  );
};
