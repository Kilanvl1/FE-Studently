"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import checkmark from "../../../public/CheckedCircle.svg";
import coin from "../../../public/Coin.svg";
import bus from "../../../public/Bus.svg";
import { BorderGradientForButton } from "./BorderGradientForButton";

export const ResultsOverview = () => {
  const searchParams = useSearchParams();
  const usersName = searchParams.get("name");
  return (
    <div className="flex flex-col gap-y-5 pt-14">
      <div className="flex gap-x-2 items-center">
        <Image src={checkmark} alt="checkmar" />
        <h1 className="font-bold text-2xl">Good news, {usersName}!</h1>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-normal">You are entitled to:</p>
        <BorderGradientForButton
          fillColor="transparent"
          roundedSize="rounded-md"
          borderWidthClass="-inset-[1px]"
          gradientDirection="bg-gradient-to-b"
        >
          <div className="bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-9 px-7 rounded-md flex flex-col gap-y-4">
            <div className="flex items-start gap-x-4">
              <Image src={coin} alt="coin" className="pt-[6px]" />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-xl">7.076/Year</h1>
                <p className="text-sm">One-off payment by bank transfer</p>
              </div>
            </div>
            <div className="mx-auto max-w-3/5 "></div>
            <div className="flex items-start gap-x-4">
              <Image src={bus} alt="bus" className="pt-[6px]" />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-xl">Free public transport</h1>
                <p className="text-sm">On either weekdays or weekends</p>
              </div>
            </div>
          </div>
        </BorderGradientForButton>
      </div>
    </div>
  );
};
