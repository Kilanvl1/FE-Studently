import Image from "next/image";

import { BorderGradientForButton } from "app/_components/ui/BorderGradientForButton";
import { Logo } from "app/_components/ui/Logo";
import { LandingpageCTA } from "./LandingPageCTA";

export const LandingPage = () => {
  return (
    <section>
      <div className="block 2xl:hidden max-w-80 mx-auto pt-32">
        <MobileLandingPage />
      </div>
      <div className="hidden 2xl:block h-[776px] mt-10 max-w-96">
        <DesktopLandingPage />
      </div>
    </section>
  );
};

const MobileLandingPage = () => {
  return (
    <>
      <h3 className="font-bold text-3xl mb-7">
        64% of international students miss out on government benefits.
      </h3>
      <BorderGradientForButton className="max-w-max">
        <LandingpageCTA />
      </BorderGradientForButton>
      <Image
        src="/mobile-banner.png"
        alt="Banner"
        className="relative bottom-[50px]"
        width={350}
        height={459}
      />
    </>
  );
};

const DesktopLandingPage = () => {
  return (
    <>
      <Image
        src="/desktop-banner.png"
        alt="desktop-banner"
        width={1359}
        height={776}
        className="absolute -z-10"
      />
      <div className="relative top-8 left-8">
        <Logo className="mb-24" />

        <h3 className="font-bold text-3xl mb-7">
          64% of international students miss out on government benefits.
        </h3>
        <BorderGradientForButton className="max-w-max">
          <LandingpageCTA />
        </BorderGradientForButton>
      </div>
    </>
  );
};
