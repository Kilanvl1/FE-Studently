import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "@/components/ui/Container";

import { BookApointment } from "@/components/ui/BookApointment";
import { Whatsapp } from "@/components/ui/Whatsapp";

import { getProfile } from "@/API/profile";

export default async function ResultsPage({
  params,
}: {
  params: { id: number };
}) {
  const profile = await getProfile(params.id);

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:justify-between">
          <ResultsOverview profile={profile} />
          <div className="flex flex-col gap-y-10">
            <BookApointment id={params.id} />
            <Whatsapp />
          </div>
        </div>
      </Container>
    </section>
  );
}
