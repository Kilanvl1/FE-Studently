import chat from "public/ChatCircleText.svg";
import piggy from "public/PiggyBank.svg";
import binoculars from "public/Binoculars.svg";
import rocket from "public/Rocket.svg";
import { Highlight } from "./Highlight";
import { BorderGradientForButton } from "app/_components/ui/BorderGradientForButton";
import Link from "next/link";
import { buttonVariants } from "app/_components/ui/button";

export const HighlightsSection = () => {
  return (
    <section className="py-8 flex flex-col gap-y-8 2xl:py-24 2xl:items-center max-w-[800px] mx-auto">
      <h1 className="font-bold text-3xl max-w-80">
        We do the hard work, you enjoy the money
      </h1>
      <BorderGradientForButton className="max-w-max">
        <Link href="about-us" className={buttonVariants()}>
          Meet the founders
        </Link>
      </BorderGradientForButton>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-6">
        <Highlight
          image={piggy}
          alt="piggy"
          title="Success first, payment later!"
          subTitle="We charge a 10% fee only on benefits you receive, so you have nothing to lose."
        />
        <Highlight
          image={rocket}
          alt="rocket"
          title="Eligibility assessment"
          subTitle="We assess your eligibility for certain government benefits and help you maximize them."
        />
        <Highlight
          image={chat}
          alt="chat"
          title="Handle entire application process"
          subTitle="We handle the entire application process, so you can focus on your studies."
        />
        <Highlight
          image={binoculars}
          alt="binoculars"
          title="Expert guidance and support"
          subTitle="Benefit from our knowledgeable team guiding you through every step."
        />
      </div>
    </section>
  );
};
