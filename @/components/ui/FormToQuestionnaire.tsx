import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { BorderGradientForButton } from "./BorderGradientForButton";
import rocketGraphic from "../../../public/rocketGraphic.svg";
import Image from "next/image";
export const FormToQuestionnaire = () => {
  return (
    <section className="py-10 2xl:pt-24">
      <div className="flex flex-col gap-y-5 2xl:flex-row 2xl:justify-center gap-x-20">
        <div className="max-w-96 flex flex-col gap-y-5">
          <h1 className="font-bold text-[28px] leading-8">
            Start the questionnaire to unlock your benefits!
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputWithLabel
              label="First name"
              placeholder="First name"
              required={true}
            />
            <InputWithLabel
              label="Email"
              placeholder="Email"
              type="email"
              required={true}
            />
            <BorderGradientForButton className="max-w-max">
              <Button type="submit">Next step</Button>
            </BorderGradientForButton>
          </form>
        </div>
        <Image src={rocketGraphic} alt="Rocket" />
      </div>
    </section>
  );
};
