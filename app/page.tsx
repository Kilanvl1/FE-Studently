import React from "react";
import Form from "./_components/Form";
import { LandingPage } from "./_components/LandingPage";
import { Container } from "./_components/Container";

export default function Home() {
  return (
    <main>
      <Container className="py-4 border-b border-myPink">
        <LandingPage />
      </Container>

      <Form></Form>
    </main>
  );
}
