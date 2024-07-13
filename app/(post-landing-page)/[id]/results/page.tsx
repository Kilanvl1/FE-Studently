import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "app/_components/Container";
import { Suspense } from "react";
import { BookApointment } from "@/components/ui/BookApointment";
import { Whatsapp } from "@/components/ui/Whatsapp";
import api from "../../../API/api";

async function getProfile(id: string) {
  try {
    const response = await api.get(`profiles/${id}/`);
    return response.data;
  } catch (error) {
    console.log("error");
  }
}

export default async function ResultsPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getProfile(params.id);
  return (
    <section className="py-16">
      <Container>
        <Suspense>
          <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:justify-between">
            <ResultsOverview user={user} />
            <div className="flex flex-col gap-y-10">
              <BookApointment />
              <Whatsapp />
            </div>
          </div>
        </Suspense>
      </Container>
    </section>
  );
}
