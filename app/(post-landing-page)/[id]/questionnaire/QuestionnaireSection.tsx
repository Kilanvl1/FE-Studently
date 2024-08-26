"use client";

import { useState } from "react";

import { UserContext, UserContextType } from "./QuestionNode";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { LeafNode } from "@/components/ui/LeafNode";
import { SeeResultsButton } from "./SeeResultsButton";

import { updateProfile } from "@/API/profile";
import { Profile } from "types/schemas";

import { ConditionalQuestion } from "./ConditionalQuestion";
import { questionNodes } from "./QuestionNodes";
import { useRouter } from "next/navigation";
import { BorderGradientForButton } from "@/components/ui/BorderGradientForButton";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const QuestionnaireSection = ({ profile }: { profile: Profile }) => {
  const [user, setUser] = useState(profile);
  const router = useRouter();

  // Update profile and navigate to results page
  const handleQuestionnaireSubmit = async (e) => {
    e.preventDefault();
    // Create a new object with all properties set to null
    const nullifiedProfile = Object.fromEntries(
      Object.keys(profile).map((key) => [key, null])
    );

    // Merge the nullified profile with the current user state
    const updatedProfile = { ...nullifiedProfile, ...user };

    await updateProfile(profile.id, updatedProfile);
    router.refresh();
  };

  const contextValue: UserContextType = { user, updateUser: setUser };
  const ageAsNumber = user.age ?? 0;

  return (
    <form
      className="flex flex-col gap-y-8 2xl:flex-1 min-h-[80vh] max-w-[32rem]"
      onSubmit={handleQuestionnaireSubmit}
    >
      <InputWithLabel
        placeholder="Type your age..."
        label="Your age"
        type="number"
        value={ageAsNumber || ""}
        onChange={(e) =>
          setUser((prev) => ({ ...prev, age: parseInt(e.target.value) }))
        }
      />

      {ageAsNumber > 0 && ageAsNumber <= 32 ? (
        <UserContext.Provider value={contextValue}>
          {questionNodes.studentNode()}
          <ConditionalQuestion
            condition={user.is_student}
            trueComponent={questionNodes.DutchNationalityNode()}
            falseComponent={questionNodes.notAStudentNode()}
          />
          <ConditionalQuestion
            condition={user.is_dutch}
            trueComponent={questionNodes.LivingAwayFromHomeNode()}
            falseComponent={questionNodes.EUPassportNode()}
          />
          <ConditionalQuestion
            condition={user.is_living_at_home}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
          <ConditionalQuestion
            condition={user.is_EU}
            trueComponent={questionNodes.requirementsNode(ageAsNumber)}
            falseComponent={questionNodes.notEUNode()}
          />
          <ConditionalQuestion
            condition={user.is_eligible}
            trueComponent={questionNodes.insuranceNode()}
            falseComponent={questionNodes.notEligibleNode()}
          />
          <ConditionalQuestion
            condition={user.is_insured}
            trueComponent={questionNodes.insuranceBenefitNode()}
            falseComponent={questionNodes.workNode()}
          />
          <ConditionalQuestion
            condition={user.has_insurance_benefit}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
          <ConditionalQuestion
            condition={user.is_working}
            trueComponent={<SeeResultsButton />}
            falseComponent={<SeeResultsButton />}
          />
        </UserContext.Provider>
      ) : ageAsNumber > 32 ? (
        <LeafNode
          bgColor="red"
          prompt="Oops..."
          info="In order to qualify for student benefits, you need to meet certain age requirements. Unfortunately, if you are above the age of 32, you are not eligible for student finance under the current regulations."
          icon="x"
        />
      ) : null}
    </form>
  );
};
