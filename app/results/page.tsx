import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "app/_components/Container";
import { Suspense } from "react";

export default function ResultsPage() {
  return (
    <section className="pt-16">
      <Container>
        <Suspense>
          <ResultsOverview />
        </Suspense>
      </Container>
    </section>
  );
}
