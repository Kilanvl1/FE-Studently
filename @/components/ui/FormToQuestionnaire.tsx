"use client";
import { useState } from "react";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { ButtonChevron } from "@/components/ui/ButtonChevron";
import { BorderGradientForButton } from "./BorderGradientForButton";
import rocketGraphic from "../../../public/rocketGraphic.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { ProfileCreateRequest } from "../../..//types/schemas";

import { createProfile } from "@/API/profile";

export const FormToQuestionnaire = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handelSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const profileCreateBody: ProfileCreateRequest = {
      name: userName,
      email: email,
    };
    // TO-DO wrap in try catch
    const response = await createProfile(profileCreateBody);
    const { id } = response;
    localStorage.setItem("id", id.toString());
    router.push(`/${id}/questionnaire`);
  };

  return (
    <section className="py-10 2xl:pt-24" id="form-to-questionnaire">
      <div className="flex flex-col gap-y-5 2xl:flex-row 2xl:justify-center gap-x-20">
        <div className="max-w-96 flex flex-col gap-y-5">
          <h1 className="font-bold text-[28px] leading-8">
            Start the questionnaire to unlock your benefits!
          </h1>
          <form onSubmit={handelSubmit}>
            <input
              type="hidden"
              name="apikey"
              value="7663844f-cdc7-4df6-ae55-6872104f2c83"
            ></input>
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            ></input>
            <InputWithLabel
              name="name"
              label="First name"
              placeholder="First name"
              required={true}
              onChange={(e) => setUserName(e.target.value)}
            />
            <InputWithLabel
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />

            <BorderGradientForButton className="max-w-max">
              <ButtonChevron type="submit" isLoading={loading}>
                Next step
              </ButtonChevron>
            </BorderGradientForButton>
          </form>
        </div>
        <Image src={rocketGraphic} alt="Rocket" />
      </div>
    </section>
  );
};
