"use client";
import { useRef, useState } from "react";
import Form from "./_components/Form";
import { LandingPage } from "./_components/LandingPage";
import { Container } from "./_components/Container";

import star from "../public/Star.svg";
import Image from "next/image";
import { HighlightsSection } from "@/components/ui/HighlightsSection";
import { FormToQuestionnaire } from "@/components/ui/FormToQuestionnaire";
export default function Home() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <section>
      <Container>
        <LandingPage formRef={formRef} />
        <section className="flex flex-col gap-y-4 py-14 items-center">
          <div className="flex gap-x-[2px] items-center">
            <Image src={star} alt="star" className="h-5 w-5" />
            <h1 className="font-medium text-xl">5.0</h1>
          </div>
          <h1 className="text-lg">Trusted by +400 students in Amsterdam.</h1>
        </section>
        <HighlightsSection />
        <FormToQuestionnaire />
        <div>
          <section ref={formRef} className="max-w-lg mx-auto mb-32">
            {isFormSubmitted ? (
              <>
                <p className="text-justify">
                  In order to determine what government benefits you are
                  entitled to, we need information surronding your age,
                  education type, and nationality.
                </p>
                <Form />
              </>
            ) : (
              <div></div>
            )}
          </section>
        </div>
      </Container>
    </section>
  );
}
