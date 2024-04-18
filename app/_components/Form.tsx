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

export default function Form() {
  const [age, setAge] = useState(null);
  return (
    <form className="p-4">
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
  children: React.ReactNode[];
};

const DecisionNode = ({ selectId, label, children }: DecisionNodeProps) => {
  const [value, setValue] = useState("");
  const shouldRenderFirstChild = value === "yes";

  return (
    <>
      <div className="flex gap-x-4 my-4 items-center max-w-[32rem]">
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
      {value && (shouldRenderFirstChild ? children[0] : children[1])}
    </>
  );
};

const NoLeadNode = <>No Lead</>;

const Lead = <>Lead</>;

const ProvideWorkInfoNode = <>You only need to work 8 hours a week!</>;

const MoneyNodeInsurnance = <>You are entitled to an insurance grant</>;

const InsuranceNode = () => {
  return (
    <DecisionNode selectId="insurance" label="Do you have insurance?">
      {[NoLeadNode, MoneyNodeInsurnance]}
    </DecisionNode>
  );
};

const MoneyNodeGrant = (
  <div>
    <p className="border-myPink rounded-lg border p-2">
      You are entitled to basic grant
    </p>
    <InsuranceNode />
  </div>
);

const RequiredHoursNodeAbove21 = () => {
  return (
    <DecisionNode
      selectId="requiredHours"
      label="Do you work at least 32 hours a month?"
    >
      {[MoneyNodeGrant, ProvideWorkInfoNode]}
    </DecisionNode>
  );
};

const RequiredHoursNodeBellow21 = () => {
  return (
    <DecisionNode
      selectId="requiredHours"
      label="Do you earn at least 155 Euros a month"
    >
      {[MoneyNodeGrant, ProvideWorkInfoNode]}
    </DecisionNode>
  );
};

const WorkNode = () => {
  return (
    <DecisionNode selectId="work" label="Do you work?">
      {[<AgeNode key={0} />, ProvideWorkInfoNode]}
    </DecisionNode>
  );
};

const AgeNode = () => {
  return (
    <DecisionNode selectId="age" label="Are you Above 21?">
      {[
        <RequiredHoursNodeAbove21 key="0" />,
        <RequiredHoursNodeBellow21 key="1" />,
      ]}
    </DecisionNode>
  );
};

const EUPassportNode = () => {
  return (
    <DecisionNode
      selectId="eu-passport"
      label="Do you have an EU passport (excluding UK)?"
    >
      {[<WorkNode key="0" />, NoLeadNode]}
    </DecisionNode>
  );
};

const DutchNationalityNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="dutch-nationality"
      label="Are you from the Netherlands?"
    >
      {[Lead, <EUPassportNode key="1" />]}
    </DecisionNode>
  );
};

const RootNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="full-time-student"
      label="Are you a full time student?"
    >
      {[<DutchNationalityNode key="0" />, NoLeadNode]}
    </DecisionNode>
  );
};
