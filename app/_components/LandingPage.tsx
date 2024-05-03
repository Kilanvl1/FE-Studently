import { Button } from "@/components/ui/button";
import Image from "next/image";
import girl from "../../public/30700162_4101.jpg";
import { animate, motion } from "framer-motion";

export const LandingPage = ({
  formRef,
  className,
}: {
  formRef: React.RefObject<HTMLFormElement>;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,

        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mb-4"
    >
      <div className="flex justify-center items-center h-screen gap-x-8">
        <motion.div
          className="flex-1"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,

            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h3 className="font-bold text-4xl mb-8">
            64% of international students miss out on government benefits.
          </h3>
          <p className="text-lg my-8">
            {
              "Don't miss out on any free benefits. Use our questionnaire to unluck your benefits!"
            }
          </p>
          <Button
            className={`${className} text-black `}
            onClick={() => {
              formRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Take questionnaire
          </Button>
        </motion.div>
        <motion.div
          className="hidden lg:block flex-1 relative"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,

            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {/* <Image src={lucas} alt="Nerd" className="absolute left-72" /> */}
          <Image src={girl} alt="Nerd" className="rounded-full" />
          {/* <Image
          src={isabella}
          alt="Nerd"
          className="absolute right-40 top-[20rem]"
        /> */}
        </motion.div>
      </div>
    </motion.div>
  );
};
