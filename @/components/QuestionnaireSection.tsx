"use client";
import { QuestionNode } from "@/components/ui/QuestionNode";
import { useContext, useState } from "react";
import X from "../../public/XCircle.svg";
import checkCircle from "../../public/CheckCircle.png";
import check from "../../public/Check.svg";
import {
  UserContext,
  User,
  UserContextType,
} from "@/components/ui/QuestionNode";
import { InputWithLabel } from "./ui/InputWithLabel";
import { LeafNode } from "./ui/LeafNode";
import { BorderGradientForButton } from "./ui/BorderGradientForButton";
import { ButtonChevron } from "./ui/ButtonChevron";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export const QuestionnaireSection = () => {
  const searchParams = useSearchParams();
  const usersName = searchParams.get("name");
  const [user, setUser] = useState<User>({ name: usersName, age: "" });
  const updateUser = (newUser: User) => {
    setUser(newUser);
  };
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(user).toString();
    router.push(`/results?${query}`);
  };
  const contextValue: UserContextType = { user, updateUser };

  const ageAsNumber = parseInt(user.age);
  return (
    <form
      className="flex flex-col gap-y-5 2xl:flex-1 min-h-[80vh] max-w-[668px]"
      onSubmit={handleSubmit}
    >
      <InputWithLabel
        placeholder="Type your age..."
        label="Your age"
        type="number"
        value={ageAsNumber}
        onChange={(e) => setUser((prev) => ({ ...prev, age: e.target.value }))}
      />
      {ageAsNumber <= 32 && ageAsNumber && (
        <UserContext.Provider value={contextValue}>
          <RootNode />
        </UserContext.Provider>
      )}

      {ageAsNumber > 32 && (
        <LeafNode
          bgColor="bg-[#F1DADA]"
          prompt="Oops..."
          info="In order to qualify for student benefits, you need to meet certain age requirements. Unfortunately, if you are above the age of 32, you are not eligible for student finance under the current regulations."
          icon={X}
        />
      )}
    </form>
  );
};

const WorkNode = () => {
  return (
    <QuestionNode
      propertyKey="work"
      question="Do you have a job in the Netherlands?"
      followUpOnYes={<SeeResultsButton />}
      followUpOnNo={<SeeResultsButton />}
    />
  );
};

const InsuranceBenefitNode = () => {
  return (
    <QuestionNode
      propertyKey="insurance-benefit"
      question="Are you receiving a health insurance benefit?"
      followUpOnYes={<SeeResultsButton />}
      followUpOnNo={<SeeResultsButton />}
      provideQuestionInfo={[
        "A health insurance benefit means that you are receiving money from the government to help pay for your health insurance.",
      ]}
    />
  );
};

const InsuranceNode = () => {
  return (
    <QuestionNode
      propertyKey="insurance"
      question="Do you have a Dutch health insurance?"
      followUpOnYes={<InsuranceBenefitNode />}
      followUpOnNo={<WorkNode />}
      provideQuestionInfo={[
        "Everyone who lives or works in the Netherlands, is required by law to have a Dutch health insurance.",
      ]}
    />
  );
};

const RequirementsNode = () => {
  const { user } = useContext(UserContext);

  return (
    <QuestionNode
      propertyKey="requirements"
      question="Do you meet one of the two following requirements?"
      followUpOnYes={<InsuranceNode />}
      followUpOnNo={
        <>
          <LeafNode
            info=" In order to qualify for student benefits, you need to meet one of the above requirements (either have lived in the Netherlands for at least 5 years or earn a minimum of €155 a month). Unfortunately, without meeting these criteria, you are not currently eligible for student finance."
            bgColor="bg-[#F1DADA]"
            icon={X}
            prompt="Oops..."
          />
          <LeafNode
            info="Don’t meet the above requirements? Don’t worry! Select “Yes” and we will help you navigate other potential options or guide you on how to become eligible at a later stage. We are here to support you every step of the way."
            icon={checkCircle}
            bgColor="bg-[#D3D4F6]"
            prompt="But wait..."
          />
        </>
      }
    >
      <div className="mb-4">
        <div className="items-center flex mb-2 gap-x-3">
          <Image src={check} alt="check" />
          <p>Lived in the Netherlands at least 5 years.</p>
        </div>
        <div className=" items-center flex gap-x-3">
          <Image src={check} alt="check" />
          {user.age >= 21 ? (
            <p>You work at least 32 hours a month.</p>
          ) : (
            <p>You earn a minimum of 155€ a month</p>
          )}
        </div>
      </div>
    </QuestionNode>
  );
};

const EUPassportNode = () => {
  return (
    <QuestionNode
      propertyKey="eu-passport"
      question="Do you have an EU passport?"
      followUpOnYes={<RequirementsNode />}
      followUpOnNo={
        <LeafNode
          info={
            "Unfortunately all student benefits are only for EU passport holders."
          }
          bgColor="bg-[#F1DADA]"
          icon={X}
          prompt="Oops..."
        />
      }
    />
  );
};

const LivingAwayFromHomeNode = () => {
  return (
    <QuestionNode
      propertyKey="living-away-from-home"
      question="Do you live away from home?"
      followUpOnYes={<SeeResultsButton />}
      followUpOnNo={<SeeResultsButton />}
      provideQuestionInfo={[
        "You are living away from home if you are registered with the municipality at a different address than your parent(s).",
      ]}
    />
  );
};

const DutchNationalityNode = () => {
  return (
    <QuestionNode
      key="0"
      propertyKey="dutch-nationality"
      question="Are you from the Netherlands?"
      followUpOnYes={<LivingAwayFromHomeNode />}
      followUpOnNo={<EUPassportNode />}
      provideQuestionInfo={[
        "You have a Dutch passport or,",
        "You are a Dutch citizen",
      ]}
    />
  );
};

const SeeResultsButton = () => {
  return (
    <BorderGradientForButton className="max-w-max">
      <ButtonChevron>See results</ButtonChevron>
    </BorderGradientForButton>
  );
};

const RootNode = () => {
  const followUpOnNo =
    "You don’t qualify for the student benefits, as it's specifically designed to support students pursuing full-time studies at Dutch educational institutions.";
  return (
    <QuestionNode
      key="0"
      propertyKey="full-time-student"
      question="Are you a full time student?"
      followUpOnYes={<DutchNationalityNode />}
      followUpOnNo={
        <LeafNode
          info={followUpOnNo}
          bgColor="bg-[#F1DADA]"
          icon={X}
          prompt="Oops..."
        />
      }
      provideQuestionInfo={[
        "HBO or university: bachelor, master or associate degree",
        "MBO: vocational training pathway",
      ]}
    />
  );
};
