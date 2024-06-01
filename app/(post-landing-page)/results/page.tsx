import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "app/_components/Container";
import { Suspense } from "react";
import { BookApointment } from "@/components/ui/BookApointment";
import { Whatsapp } from "@/components/ui/Whatsapp";

export default function ResultsPage() {
  return (
    <section className="py-16">
      <Container>
        <Suspense>
          <div className="flex flex-col gap-y-12 2xl:flex-row 2xl:justify-between">
            <ResultsOverview />
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
