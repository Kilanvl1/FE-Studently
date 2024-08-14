"use client";
import { ButtonChevron } from "../@/components/ui/ButtonChevron";
import { useRouter } from "next/navigation";

export const LandingpageCTA = () => {
  const router = useRouter();

  // Redirect to questionnaire if profile already exists otherwise scroll to form
  async function handleOnCTAClick() {
    const profileId = localStorage.getItem("id");

    if (profileId) {
      router.push(`/${profileId}/questionnaire`);
    } else {
      const targetElement = document.getElementById("form-to-questionnaire");
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ButtonChevron onClick={handleOnCTAClick}>Unlock my benefits</ButtonChevron>
  );
};
