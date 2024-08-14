import { Container } from "@/components/ui/Container";

import { QuestionnaireSection } from "./QuestionnaireSection";

import { getProfile } from "@/API/requests";

/* async function getProfile(id: string): Promise<Profile> {
  try {
    const response = await api.get(getProfileRoute(id));
    return response;
  } catch (error) {
    console.log("Could not fetch profile...", error);
  }
} */

export default async function QuestionnairePage({
  params,
}: {
  params: { id: string };
}) {
  const profile = await getProfile(params.id);
  console.log(profile);
  return (
    <Container className="pt-32">
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
