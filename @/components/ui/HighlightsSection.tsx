import chat from "../../../public/ChatCircleText.svg";
import piggy from "../../../public/PiggyBank.svg";
import binoculars from "../../../public/Binoculars.svg";
import rocket from "../../../public/Rocket.svg";
import { Highlight } from "./Highlight";

export const HighlightsSection = () => {
  return (
    <section className="py-8 2xl:flex flex-col gap-y-16 2xl:py-24 items-center">
      <h1 className="font-bold text-3xl max-w-80">
        We do the hard work, you enjoy the money
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-6">
        <Highlight
          image={chat}
          alt="chat"
          title="Get a response in less than 24h"
          subTitle="Lorem ipsum dolor sit amet"
        />
        <Highlight
          image={piggy}
          alt="piggy"
          title="Save your time and effort"
          subTitle="Lorem ipsum dolor sit amet"
        />
        <Highlight
          image={binoculars}
          alt="binoculars"
          title="Expert guidance and support"
          subTitle="Lorem ipsum dolor sit amet"
        />
        <Highlight
          image={rocket}
          alt="rocket"
          title="Maximize eligibility"
          subTitle="Lorem ipsum dolor sit amet"
        />
      </div>
    </section>
  );
};
