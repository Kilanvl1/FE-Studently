"use client";
import { useState } from "react";
import { BorderGradientForButton } from "@/components/ui/BorderGradientForButton";
import { ButtonChevron } from "@/components/ui/ButtonChevron";
import { useRouter } from "next/navigation";
export const SeeResultsButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    router.push(`/${localStorage.getItem("id")}/results`);
  };

  return (
    <BorderGradientForButton className="max-w-max">
      <ButtonChevron onClick={handleClick} isLoading={isLoading} type="submit">
        See results
      </ButtonChevron>
    </BorderGradientForButton>
  );
};
