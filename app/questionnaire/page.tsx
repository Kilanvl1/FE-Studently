import { Container } from "app/_components/Container";

import { QuestionnaireSection } from "@/components/QuestionnaireSection";

export default function QuestionnairePage() {
  return (
    <Container className="pt-32">
      <div className="2xl:flex gap-x-20">
        <div className="max-w-96 mb-5">
          <h1 className="font-bold text-3xl mb-5">
            Answer the following questions
          </h1>
          <p className="opacity-60 font-normal text-sm">
            In order to determine what government benefits you are entitled to,
            we need the following information:
          </p>
        </div>
        <QuestionnaireSection />
      </div>
    </Container>
  );
}
