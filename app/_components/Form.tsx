"use client";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { cn } from "@/lib/utils";

export default function Form() {
  const [age, setAge] = useState(null);
  return (
    <form className="p-4 mb-32">
      <div className="flex flex-col">
        <InputWithLabel
          placeholder="Enter your age..."
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />
        {age >= 18 && age <= 30 ? <RootNode /> : null}
      </div>
    </form>
  );
}

type DecisionNodeProps = {
  selectId: string;
  label: string;
  children?: React.ReactNode;
  followUpQuestions?: React.ReactNode[];
  className?: string;
};

const DecisionNode = ({
  selectId,
  label,
  children,
  className,
  followUpQuestions,
}: DecisionNodeProps) => {
  const [value, setValue] = useState("");
  const shouldRenderFirstChild = value === "yes";

  return (
    <>
      <div
        className={cn(
          `flex gap-x-4 my-4 items-center max-w-[32rem]`,
          className
        )}
      >
        <label htmlFor={selectId}>{label}</label>

        <Select
          onValueChange={(e) => {
            setValue(e);
          }}
        >
          <SelectTrigger className="w-auto px-4 bg-myOrange text-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-myOrange text-white">
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {children}
      {value &&
        (shouldRenderFirstChild ? followUpQuestions[0] : followUpQuestions[1])}
    </>
  );
};

const NoLeadNode = <>No Lead</>;

const Lead = <>Lead</>;

const HasBothGrants = (
  <ul className="list-disc px-6 p-4 flex flex-col gap-y-4 border-green-600 border">
    <li>You are entitled to a basic grant worth 5,600 Euros / Y</li>
    <li>You are entitled to an insurance grant worth 1,476 Euros per year</li>
  </ul>
);

const HasInsuranceGrant = (
  <ul className="list-disc px-6 p-4 flex flex-col gap-y-4 border-green-600 border">
    <li>You are entitled to a basic grant worth 5,600 Euros / Y</li>
  </ul>
);

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have insurance?"
      followUpQuestions={[HasInsuranceGrant, HasBothGrants]}
    />
  );
};

const RequirementsNode = () => {
  return (
    <DecisionNode
      selectId="requirements"
      label="Do you meet one of the two following requirements?"
      followUpQuestions={[<InsuranceNode key="0" />, NoLeadNode]}
    >
      <ul className="list-disc px-6 p-4 flex flex-col gap-y-4 border-black border">
        <li>Lived in the Netherlands for at least 5 years</li>
        <li>You work at least 32 hours a week.</li>
      </ul>
    </DecisionNode>
  );
};

const EUPassportNode = () => {
  return (
    <DecisionNode
      selectId="eu-passport"
      label="Do you have an EU passport (excluding UK)?"
      followUpQuestions={[<RequirementsNode key="0" />, NoLeadNode]}
    />
  );
};

const DutchNationalityNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="dutch-nationality"
      label="Are you from the Netherlands?"
      followUpQuestions={[Lead, <EUPassportNode key="1" />]}
    />
  );
};

const RootNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="full-time-student"
      label="Are you a full time student?"
      followUpQuestions={[<DutchNationalityNode key="0" />, NoLeadNode]}
    />
  );
};
