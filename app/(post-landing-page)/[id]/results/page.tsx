import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "@/components/ui/Container";

import { BookApointment } from "@/components/ui/BookApointment";
import { Whatsapp } from "@/components/ui/Whatsapp";
import api from "../../../../API/api";
import { getProfileRoute } from "@/API/routes";

async function getProfile(id: string) {
  try {
    const response = await api.get(getProfileRoute(id));

    return response;
  } catch (error) {
    console.log("error");
  }
}

export default async function ResultsPage({
  params,
}: {
  params: { id: string };
}) {
  const profile = await getProfile(params.id);
  console.log("profile", profile);
  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:justify-between">
          <ResultsOverview profile={profile} />
          <div className="flex flex-col gap-y-10">
            <BookApointment />
            <Whatsapp />
          </div>
        </div>
      </Container>
    </section>
  );
}
