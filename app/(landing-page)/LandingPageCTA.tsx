"use client";
import { useState } from "react";
import { ButtonChevron } from "app/_components/ui/ButtonChevron";
import { useRouter } from "next/navigation";

export const LandingpageCTA = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Redirect to questionnaire if profile already exists otherwise scroll to form
  async function handleOnCTAClick() {
    const profileId = localStorage.getItem("id");

    if (profileId) {
      setLoading(true);
      router.push(`/${profileId}/questionnaire`);
    } else {
      const targetElement = document.getElementById("form-to-questionnaire");
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ButtonChevron onClick={handleOnCTAClick} isLoading={loading}>
      Unlock my benefits
    </ButtonChevron>
  );
};
