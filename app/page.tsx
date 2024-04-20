"use client";
import { useRef } from "react";
import Form from "./_components/Form";
import { LandingPage } from "./_components/LandingPage";
import { Container } from "./_components/Container";

export default function Home() {
  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <main>
      <Container>
        <LandingPage formRef={formRef} />

        <section ref={formRef}>
          <h1>Our questionnaire</h1>
          <Form />
        </section>
      </Container>
    </main>
  );
}
