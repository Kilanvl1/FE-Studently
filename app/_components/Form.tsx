"use client";
import { useState, createContext, useContext, useEffect } from "react";
import whatsapp from "../../public/whatsapp.svg";
import email from "../../public/mail.svg";

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
import { CallToAction } from "@/components/ui/CallToAction";

const AgeContext = createContext(null);

export default function Form() {
  const [age, setAge] = useState(null);

  return (
    <form className=" mb-32 max-w-lg mx-auto">
      <div className="flex flex-col">
        <InputWithLabel
          placeholder="Enter your age..."
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
        />

        {age <= 30 && age && (
          <AgeContext.Provider value={age}>
            <RootNode />
          </AgeContext.Provider>
        )}

        {age > 30 && (
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
  const [isMounted, setIsMounted] = useState(false);
  console.log(isMounted);
  const shouldRenderFirstChild = value === "yes";
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div
        className={cn(
          `flex gap-x-4 my-4 items-center max-w-[32rem] justify-between opacity-0 transition duration-300 ${
            isMounted ? "opacity-100" : ""
          }`,
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

const HasBothGrants = (
  <>
    <ProvideInfo className="border-green-600 border mb-4">
      <li>You are entitled to 7076 Euros per year.</li>
      <li>
        You are entitled to free public transport on either weekdays or
        weekends.
      </li>
    </ProvideInfo>
    <div className="flex gap-x-4">
      <CallToAction
        href="https://api.whatsapp.com/send?phone=31648115430"
        label="Whats App"
        alt="Whatsapp"
        src={whatsapp}
        className="bg-[#22d266] flex-1"
      />
      <CallToAction
        href="https://api.whatsapp.com/send?phone=31648115430"
        label="Email"
        alt="email"
        src={email}
        className="bg-myYellow-300 flex-1"
      />
    </div>
  </>
);

const HasInsuranceGrant = (
  <>
    <ProvideInfo className=" border-green-600 border mb-4">
      <li>You are entitled to 5600 Euros per year.</li>
      <li>
        You are entitled to free public transport on either weekdays or
        weekends.
      </li>
    </ProvideInfo>
    <div className="flex gap-x-4">
      <CallToAction
        href="https://api.whatsapp.com/send?phone=31648115430"
        label="Whats App"
        alt="Whatsapp"
        src={whatsapp}
        className="bg-[#22d266] flex-1"
      />
      <CallToAction
        href="https://api.whatsapp.com/send?phone=31648115430"
        label="Email"
        alt="email"
        src={email}
        className="bg-myYellow-300 flex-1"
      />
    </div>
  </>
);

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have a Dutch health insurance?"
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
