import { LandingPage } from "./_components/LandingPage";
import { Container } from "./_components/Container";

import star from "../public/Star.svg";
import Image from "next/image";
import { HighlightsSection } from "@/components/ui/HighlightsSection";
import { FormToQuestionnaire } from "@/components/ui/FormToQuestionnaire";
export default function Home() {
  return (
    <section>
      <Container>
        <LandingPage />
        <section className="flex flex-col gap-y-4 py-14 items-center">
          <div className="flex gap-x-[2px] items-center">
            <Image src={star} alt="star" className="h-5 w-5" />
            <h1 className="font-medium text-xl">4.7</h1>
          </div>
          <h1 className="text-lg">Trusted by +400 students in Amsterdam.</h1>
        </section>
        <HighlightsSection />

        <FormToQuestionnaire />
      </Container>
    </section>
  );
}
