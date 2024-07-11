"use client";
import { ButtonChevron } from "./ButtonChevron";
import { useRouter } from "next/navigation";
import api from "../../../app/API/api";
export const LandingpageCTA = () => {
  const router = useRouter();

  function handleOnCTAClick() {
    const token = localStorage.getItem("token");
    const profileId = localStorage.getItem("id");
    if (token && token === "studently") {
      try {
        api.put(`profile/${profileId}/increment-page-visits/`);
      } catch (error) {
        // TO-DO: Handle error correctly
      }
      router.push(`/questionnaire`);
    } else {
      const targetElement = document.getElementById("form-to-questionnaire");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <ButtonChevron onClick={handleOnCTAClick}>Unlock my benefits</ButtonChevron>
  );
};
