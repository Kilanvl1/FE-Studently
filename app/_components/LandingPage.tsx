import { Button } from "@/components/ui/button";
import graphic from "../../public/Nerd Girl.svg";
import Image from "next/image";
export const LandingPage = ({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement>;
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1">
        <h3 className="font-bold text-5xl mb-8 ">
          Your Guide to Government Benefits.
        </h3>
        <p className="text-xl my-8">
          {
            "Don't miss out on any free benefits. Use our questionnaire to find out what you're entitled to."
          }
        </p>
        <Button
          className="bg-myPurple-base text-white"
          onClick={() => {
            formRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Take questionnaire
        </Button>
      </div>
      <div className="hidden lg:block flex-1">
        <Image src={graphic} alt="Nerd" className="rounded-full" />
      </div>
    </div>
  );
};
