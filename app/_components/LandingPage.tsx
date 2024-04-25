import { Button } from "@/components/ui/button";
import graphic from "../../public/Nerd Girl.svg";
import lucas from "../../public/Lucas_review.svg";
import isabella from "../../public/Isabella_review.svg";
import Image from "next/image";
import girl from "../../public/30700162_4101.jpg";
export const LandingPage = ({
  formRef,
  className,
}: {
  formRef: React.RefObject<HTMLFormElement>;
  className?: string;
}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-1">
        <h3 className="font-bold text-5xl mb-8">
          24% of students miss out on government benefits.
        </h3>
        <p className="text-xl my-8">
          {
            "Don't miss out on any free benefits. Use our questionnaire to unluck your benefits!"
          }
        </p>
        <Button
          className={`${className} text-white`}
          onClick={() => {
            formRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Take questionnaire
        </Button>
      </div>
      <div className="hidden lg:block flex-1 relative">
        {/* <Image src={lucas} alt="Nerd" className="absolute left-72" /> */}
        <Image src={girl} alt="Nerd" className="rounded-full" />
        <Image
          src={isabella}
          alt="Nerd"
          className="absolute right-40 top-[20rem]"
        />
      </div>
    </div>
  );
};
