import { Container } from "app/_components/Container";

import { QuestionnaireSection } from "@/components/QuestionnaireSection";

export default function QuestionnairePage() {
  return (
    <Container className="pt-32">
      <div className="flex flex-col gap-y-5">
        <h1 className="font-bold text-2xl">Answer the following question</h1>
        <p className="opacity-60 font-normal text-sm">
          In order to determine what government benefits you are entitled to, we
          need the following information:
        </p>
        <QuestionnaireSection />
      </div>
    </Container>
  );
}
