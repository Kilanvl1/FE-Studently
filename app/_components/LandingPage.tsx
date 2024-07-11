import Image from "next/image";

import { BorderGradientForButton } from "@/components/ui/BorderGradientForButton";

import banner from "../../public/iStock-1502799630 1.svg";
import { Logo } from "@/components/ui/Logo";
import { LandingpageCTA } from "@/components/ui/LandingpageCTA";

export const LandingPage = () => {
  return (
    <section className="2xl:h-[840px] pt-32 2xl:p-0">
      <div className="2xl:bg-hero bg-no-repeat bg-center flex flex-col gap-y-7 2xl:mt-10 2xl:h-[776px] items-center 2xl:items-start">
        <Logo className="mt-8 ml-10 hidden 2xl:flex" />
        <div className="flex flex-col gap-y-7 max-w-96 2xl:mt-24 2xl:ml-12">
          <h3 className="font-bold text-3xl">
            64% of international students miss out on government benefits.
          </h3>
          <BorderGradientForButton className="max-w-max">
            <LandingpageCTA />
          </BorderGradientForButton>
        </div>
        <Image
          src={banner}
          alt="Banner"
          className="relative bottom-[78px] 2xl:hidden"
        />
      </div>
    </section>
  );
};
