/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, createContext, useContext, useEffect } from "react";
import whatsapp from "../../public/whatsapp.svg";
import email from "../../public/mail.svg";
import calendar from "../../public/calendar-fold.svg";
import { Info } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { cn } from "@/lib/utils";
import { ProvideInfo } from "@/components/ui/ProvideInfo";
import { CallToAction } from "@/components/ui/CallToAction";

const AgeContext = createContext(null);

export default function Form({ className }: { className?: string }) {
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
  extraInfoItems?: string[];
};

const DecisionNode = ({
  selectId,
  label,
  children,
  className,
  followUpQuestions,
  extraInfoItems,
}: DecisionNodeProps) => {
  const [value, setValue] = useState("");
  const [isMounted, setIsMounted] = useState(false);
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
        <div className="flex items-center gap-x-4">
          <label htmlFor={selectId}>{label}</label>
          {extraInfoItems && (
            <Popover>
              <PopoverTrigger>
                <Info size={18} />
              </PopoverTrigger>
              <PopoverContent>
                <ul className="list-disc px-4">
                  {extraInfoItems.map((info, index) => (
                    <li key={index} className="mb-2">
                      {info}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          )}
        </div>

        <Select
          onValueChange={(e) => {
            setValue(e);
          }}
        >
          <SelectTrigger className="w-auto px-4 bg-myBlue-test text-black">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-blue-secondary bg-myBlue-test text-black">
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

const HasBothGrants = (
  <>
    <ProvideInfo>
      <li>You are entitled to 7076€ per year.</li>
      <li>
        You are entitled to free public transport on either weekdays or
        weekends.
      </li>
    </ProvideInfo>
    <div className="flex gap-x-4 mt-6">
      <CallToAction
        href="https://api.whatsapp.com/send?phone=31648115430"
        label="Whats App"
        alt="Whatsapp"
        src={whatsapp}
        className="bg-[#22d266] flex-1"
      />
      <CallToAction
        href="https://calendly.com/lohefes"
        label="Calendly"
        alt="calendar"
        src={calendar}
        className="bg-[#0169fe] flex-1"
      />
    </div>
  </>
);

const HasInsuranceGrant = (
  <>
    <ProvideInfo className="mb-4">
      <li>You are entitled to 5600€ per year.</li>
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

const WorkNode = () => {
  return (
    <DecisionNode
      selectId="work"
      label="Do you have a job in the Netherlands?"
      followUpQuestions={[HasBothGrants, HasBothGrants]}
    />
  );
};

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have a Dutch health insurance?"
      followUpQuestions={[HasInsuranceGrant, <WorkNode key="0" />]}
      extraInfoItems={[
        "Everyone who lives or works in the Netherlands, is required by law to have a Dutch health insurance.",
      ]}
    />
  );
};

const RequirementsNode = () => {
  const age = useContext(AgeContext);
  return (
    <DecisionNode
      selectId="requirements"
      label="Do you meet one of the two following requirements?"
      followUpQuestions={[
        <InsuranceNode key="0" />,
        <>
          In order to qualify for the student benefits you need to meet one of
          the above requirements. Don't meet the above requirements? don't
          worry! Select yes and we will help you at a later stage.
        </>,
      ]}
    >
      <ProvideInfo>
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
      label="Do you have an EU passport?"
      followUpQuestions={[
        <RequirementsNode key="0" />,
        <>
          Unfortunately all student benefits are only for EU passport holders.
        </>,
      ]}
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
      extraInfoItems={[
        "You have a Dutch passport or,",
        "You are a Dutch citizen",
      ]}
    />
  );
};

const RootNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="full-time-student"
      label="Are you a full time student?"
      followUpQuestions={[
        <DutchNationalityNode key="0" />,
        <>
          You don’t qualify for the student benefits, as it's specifically
          designed to support students pursuing full-time studies at Dutch
          educational institutions.
        </>,
      ]}
      extraInfoItems={[
        "HBO or university: bachelor, master or associate degree",
        "MBO: vocational training pathway",
      ]}
    />
  );
};
