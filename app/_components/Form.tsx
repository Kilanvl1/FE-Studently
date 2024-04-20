"use client";
import { useState, createContext, useContext } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { cn } from "@/lib/utils";
import { ProvideInfo } from "@/components/ui/ProvideInfo";

const AgeContext = createContext(null);

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

        {age <= 30 ? (
          <AgeContext.Provider value={age}>
            <RootNode />
          </AgeContext.Provider>
        ) : (
          <ProvideInfo className="my-4 border-red-600 px-8">
            <li>Only students below the age of 30 are entitled to benefits</li>
          </ProvideInfo>
        )}
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
          <SelectTrigger className="w-auto px-4 bg-myYellow-300  text-black">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-myYellow-300 text-black">
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
  <ProvideInfo className="border-green-600 border">
    <li>You are entitled to a basic grant worth 5,600 Euros / Y</li>
    <li>You are entitled to an insurance grant worth 1,476 Euros per year</li>
  </ProvideInfo>
);

const HasInsuranceGrant = (
  <ProvideInfo className=" border-green-600 border">
    <li>You are entitled to a basic grant worth 5,600 Euros / Y</li>
  </ProvideInfo>
);

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have health insurance?"
      followUpQuestions={[HasInsuranceGrant, HasBothGrants]}
    />
  );
};

const RequirementsNode = () => {
  const age = useContext(AgeContext);
  return (
    <DecisionNode
      selectId="requirements"
      label="Do you meet one of the two following requirements?"
      followUpQuestions={[<InsuranceNode key="0" />, NoLeadNode]}
    >
      <ProvideInfo className=" border-black border">
        <li>Lived in the Netherlands for at least 5 years</li>
        {age >= 21 ? (
          <li>You work at least 32 hours a month.</li>
        ) : (
          <li>You earn at least 155 Euros a month.</li>
        )}
      </ProvideInfo>
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
      followUpQuestions={[HasBothGrants, <EUPassportNode key="1" />]}
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
