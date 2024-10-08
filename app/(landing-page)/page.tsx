import { LandingPage } from "./LandingPage";
import { Container } from "app/_components/ui/Container";

import Image from "next/image";
import { HighlightsSection } from "./HighlightsSection";
import { FormToQuestionnaire } from "./FormToQuestionnaire";
export default function Home() {
  return (
    <section>
      <Container>
        <LandingPage />
        <section className="flex flex-col gap-y-4 py-14 items-center">
          <h1 className="text-lg">
            Trusted by +400 students in the Netherlands.
          </h1>
        </section>
        <div className="max-w-[800px] mx-auto">
          <HighlightsSection />
          <FormToQuestionnaire />
        </div>
      </Container>
    </section>
  );
}
