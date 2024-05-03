"use client";
import { useRef, useState } from "react";
import Form from "./_components/Form";
import { LandingPage } from "./_components/LandingPage";
import { Container } from "./_components/Container";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export default function Home({
  primaryColor,
  secondaryColor,
}: {
  primaryColor: string;
  secondaryColor?: string;
}) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };
  return (
    <main>
      <Container>
        <LandingPage formRef={formRef} className={primaryColor} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section ref={formRef} className="max-w-lg mx-auto mb-32">
            <h1 className="font-semibold text-4xl text-center mb-6">
              Unlock your benefits!
            </h1>

            {isFormSubmitted ? (
              <>
                <p className="text-justify">
                  In order to determine what government benefits you are
                  entitled to, we need information surronding your age,
                  education type, and nationality.
                </p>
                <Form className={secondaryColor} />
              </>
            ) : (
              <motion.div>
                <p>
                  Enter your first name and email to continue to our
                  questionnaire and unlock your benefits!
                </p>
                <form onSubmit={handleSubmit}>
                  <InputWithLabel
                    label="First name"
                    placeholder="Enter your name..."
                    required={true}
                  />
                  <InputWithLabel
                    label="Email"
                    placeholder="Enter your email..."
                    type="email"
                    required={true}
                  />
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className={cn(primaryColor, "text-black")}
                    >
                      Unlock your benefits
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </section>
        </motion.div>
      </Container>
    </main>
  );
}
