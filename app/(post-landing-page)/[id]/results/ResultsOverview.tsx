import Image from "next/image";
import checkmark from "public/CheckedCircle.svg";
import coin from "public/Coin.svg";
import bus from "public/Bus.svg";
import { BorderGradientForButton } from "app/_components/ui/BorderGradientForButton";
import { LeafNode } from "app/_components/ui/LeafNode";
import { Profile } from "app/_types/schemas";
import { BackButton } from "app/_components/ui/BackButton";
import { NotEligible } from "./NotEligible";

type ResultsOverviewProps = {
  profile: Profile;
};

export const ResultsOverview = ({ profile }: ResultsOverviewProps) => {
  return (
    <div className="flex flex-col gap-y-5 pt-14 max-w-[550px]">
      <BackButton href={`/${profile.id}/questionnaire`} className="max-w-12" />
      <div className="flex gap-x-2 items-center">
        <Image src={checkmark} alt="checkmar" />
        <h1 className="font-bold text-2xl 2xl:text-4xl">
          Good news, {profile.name}!
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
                <h1 className="font-bold text-xl">
                  {profile.benefit_amount}/Year
                </h1>
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
        {profile.is_at_risk_of_insurance_fine && (
          <LeafNode
            bgColor="red"
            icon={checkmark}
            prompt="Caution!"
            info="You are at risk of paying a 500€ insurance fine!"
          />
        )}
        {!profile.is_eligible && <NotEligible />}
      </div>
    </div>
  );
};
