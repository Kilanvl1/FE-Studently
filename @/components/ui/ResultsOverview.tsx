"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import checkmark from "../../../public/CheckedCircle.svg";
import coin from "../../../public/Coin.svg";
import bus from "../../../public/Bus.svg";
import { BorderGradientForButton } from "./BorderGradientForButton";
import { LeafNode } from "./LeafNode";

type ResultsOverviewProps = {
  user: any;
};

export const ResultsOverview = ({ user }: ResultsOverviewProps) => {
  console.log(user);
  const searchParams = useSearchParams();
  const usersName = searchParams.get("name");
  const livingAwayFromHome = searchParams.get("living-away-from-home");
  const dutchNationality = searchParams.get("dutch-nationality");
  const isWorking = searchParams.get("work");
  const hasInsurance = searchParams.get("insurance");
  const hasInsuranceBenefit = searchParams.get("insurance-benefit");
  const riskOfInsuranceFine = isWorking === "true" && hasInsurance === "false";
  let earnings = "";

  if (dutchNationality === "true") {
    earnings = livingAwayFromHome === "true" ? "3,628.68" : "1,455.96";
  } else {
    earnings = hasInsuranceBenefit === "true" ? "3,628.68" : "5,104.68";
  }
  return (
    <div className="flex flex-col gap-y-5 pt-14">
      <div className="flex gap-x-2 items-center">
        <Image src={checkmark} alt="checkmar" />
        <h1 className="font-bold text-2xl 2xl:text-4xl">
          Good news, {usersName}!
        </h1>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-normal">You are entitled to:</p>
        <BorderGradientForButton
          fillColor="transparent"
          roundedSize="md"
          borderWidth="sm"
          gradientDirection="toB"
          gradientColors="purple"
        >
          <div className="bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-9 px-7 rounded-md flex flex-col gap-y-4">
            <div className="flex items-start gap-x-4">
              <Image src={coin} alt="coin" className="pt-[6px]" />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-xl">{earnings}/Year</h1>
                <p className="text-sm">
                  Benefits are paid out monthly to your bank account by DUO.
                </p>
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
        {riskOfInsuranceFine && (
          <LeafNode
            bgColor="bg-[#F1DADA]"
            icon={checkmark}
            prompt="Caution!"
            info="You are at risk of paying a 500€ insurance fine!"
          />
        )}
      </div>
    </div>
  );
};
