import { LeafNode } from "app/_components/ui/LeafNode";

export const NotEligible = () => {
  return (
    <>
      <LeafNode
        info="In order to qualify for student benefits, you need to have lived in the Netherlands for at least 5 years or earn a minimum of €155 a month). Unfortunately, without meeting these criteria, you are not currently eligible for student finance."
        bgColor="red"
        icon="x"
        prompt="Oops..."
      />

      <LeafNode
        info="We still encourage you to book a meeting with us so we can help you find other options or guide you on how to become eligible at a later stage."
        icon="check"
        bgColor="purple"
        prompt="But wait..."
      />
    </>
  );
};
