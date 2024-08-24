type ConditionalQuestionProps = {
  condition: boolean | null | undefined;
  trueComponent: React.ReactNode;
  falseComponent: React.ReactNode;
};

export const ConditionalQuestion = ({
  condition,
  trueComponent,
  falseComponent,
}: ConditionalQuestionProps) => {
  if (condition === null || condition === undefined) return null;
  return condition ? trueComponent : falseComponent;
};
