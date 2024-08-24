import { QuestionNode } from "./QuestionNode";

import { LeafNode } from "@/components/ui/LeafNode";
import check from "@/public/CheckedCircle.svg";

import Image from "next/image";
export const questionNodes = {
  studentNode: () => {
    const key = "is_student";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you a full time student?"
        provideQuestionInfo={[
          "HBO or university: bachelor, master or associate degree",
          "MBO: vocational training pathway",
        ]}
      />
    );
  },
  notAStudentNode: () => {
    return (
      <LeafNode
        info={
          "You don't qualify for the student benefits, as it's specifically designed to support students pursuing full-time studies at Dutch educational institutions."
        }
        bgColor="red"
        icon="x"
        prompt="Oops..."
      />
    );
  },
  DutchNationalityNode: () => {
    const key = "is_dutch";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you from the Netherlands?"
        provideQuestionInfo={[
          "You have a Dutch passport or,",
          "You are a Dutch citizen",
        ]}
      />
    );
  },
  LivingAwayFromHomeNode: () => {
    const key = "is_living_at_home";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you live with your parents?"
        provideQuestionInfo={[
          "You are living away from your parents if you are registered with the municipality at a different address than your parent(s).",
        ]}
      />
    );
  },
  EUPassportNode: () => {
    const key = "is_EU";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have an EU passport?"
      />
    );
  },
  notEUNode: () => {
    return (
      <LeafNode
        info={
          "Unfortunately all student benefits are only for EU passport holders."
        }
        bgColor="red"
        icon="x"
        prompt="Oops..."
      />
    );
  },
  notEligibleNode: () => {
    return (
      <>
        <LeafNode
          info="In order to qualify for student benefits, you need to meet one of the above requirements (either have lived in the Netherlands for at least 5 years or earn a minimum of €155 a month). Unfortunately, without meeting these criteria, you are not currently eligible for student finance."
          bgColor="red"
          icon="x"
          prompt="Oops..."
        />

        <LeafNode
          info="Don't meet the above requirements? Don't worry! Select Yes and we will help you navigate other potential options or guide you on how to become eligible at a later stage. We are here to support you every step of the way."
          icon="check"
          bgColor="purple"
          prompt="But wait..."
        />
      </>
    );
  },
  requirementsNode: (age: number) => {
    const key = "is_eligible";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you meet one of the two following requirements?"
      >
        <div className="mb-4">
          <div className="items-center flex mb-2 gap-x-3">
            <Image src={check} alt="check" />
            <p>Lived in the Netherlands at least 5 years.</p>
          </div>
          <div className=" items-center flex gap-x-3">
            <Image src={check} alt="check" />
            {age >= 21 ? (
              <p>You work at least 32 hours a month.</p>
            ) : (
              <p>You earn a minimum of 155€ a month</p>
            )}
          </div>
        </div>
      </QuestionNode>
    );
  },
  insuranceNode: () => {
    const key = "is_insured";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have a Dutch health insurance?"
        provideQuestionInfo={[
          "Everyone who lives or works in the Netherlands, is required by law to have a Dutch health insurance.",
        ]}
      />
    );
  },
  insuranceBenefitNode: () => {
    const key = "has_insurance_benefit";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Are you receiving a health insurance benefit?"
        provideQuestionInfo={[
          "A health insurance benefit means that you are receiving money from the government to help pay for your health insurance.",
        ]}
      />
    );
  },
  workNode: () => {
    const key = "is_working";
    return (
      <QuestionNode
        key={key}
        propertyKey={key}
        question="Do you have a job in the Netherlands?"
      />
    );
  },
};
