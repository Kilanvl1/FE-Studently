import { ResultsOverview } from "@/components/ui/ResultsOverview";
import { Container } from "app/_components/Container";

export default function ResultsPage() {
  return (
    <section className="pt-16">
      <Container>
        <ResultsOverview />
      </Container>
    </section>
  );
}
