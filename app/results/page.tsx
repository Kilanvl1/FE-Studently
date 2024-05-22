import { Calendly } from "@/components/ui/Calendly";
import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "app/_components/Container";
import { Suspense } from "react";
import { BookApointment } from "@/components/ui/BookApointment";

export default function ResultsPage() {
  return (
    <section className="pt-16">
      <Container>
        <Suspense>
          <div className="flex flex-col gap-y-12">
            <ResultsOverview />
            <BookApointment />
          </div>
        </Suspense>
      </Container>
    </section>
  );
}
