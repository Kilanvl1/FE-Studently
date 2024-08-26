import { Container } from "@/components/ui/Container";

import { QuestionnaireSection } from "./QuestionnaireSection";

import { getProfile } from "@/API/profile";
import { BackButton } from "@/components/ui/BackButton";
import { ArrowLeft } from "lucide-react";
export default async function QuestionnairePage({
  params,
}: {
  params: { id: number };
}) {
  const profile = await getProfile(params.id);

  return (
    <Container className="pt-32">
      <BackButton href="/" className="max-w-12">
        <ArrowLeft color="white" />
      </BackButton>
      <div className="2xl:flex gap-x-20 2xl:justify-between">
        <div className="max-w-96 mb-5">
          <h1 className="font-bold text-3xl mb-5 2xl:text-4xl">
            Answer the following questions
          </h1>
          <p className="opacity-60 font-normal text-sm">
            In order to determine what government benefits you are entitled to,
            we need the following information:
          </p>
        </div>

        <QuestionnaireSection profile={profile} />
      </div>
    </Container>
  );
}
