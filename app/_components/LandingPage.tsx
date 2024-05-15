import { Button } from "@/components/ui/button";
import Image from "next/image";

import { BorderGradientForButton } from "@/components/ui/BorderGradientForButton";

import banner from "../../public/iStock-1502799630 1.svg";

import { Logo } from "@/components/ui/Logo";

export const LandingPage = ({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) => {
  return (
    <section className="2xl:h-[840px] pt-32 2xl:p-0">
      <div className="2xl:bg-hero bg-no-repeat bg-center flex flex-col gap-y-7 2xl:mt-10 2xl:h-[776px] items-center 2xl:items-start">
        <Logo className="mt-8 ml-4 hidden 2xl:flex" />
        <div className="flex flex-col gap-y-7 max-w-96 2xl:mt-24 2xl:ml-12">
          <h3 className="font-bold text-3xl">
            64% of international students miss out on government benefits.
          </h3>
          <BorderGradientForButton className="max-w-max">
            <Button
              onClick={() => {
                formRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Unlock my benefits
            </Button>
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
