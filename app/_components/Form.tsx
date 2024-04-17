"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ShadSelect";

export default function Form() {
  return (
    <form className="p-4">
      <div className="flex flex-col items-center">
        <RootNode />
      </div>
    </form>
  );
}

type DecisionNodeProps = {
  selectId: string;
  label: string;
  children: React.ReactNode[];
  treeDepth: number;
};

const DecisionNode = ({ selectId, label, children }: DecisionNodeProps) => {
  const [value, setValue] = useState("");
  const shouldRenderFirstChild = value === "yes";

  return (
    <>
      <div className="flex gap-x-4 my-4 items-center max-w-[32rem]">
        <label htmlFor={selectId}>{label}</label>
        {/* <select
          id={selectId}
          name="test"
          className="text-black rounded-md p-1 border-r-8 border-white"
          onChange={(e) => {
            setValue(e.target.value);
            setUserInfo(e, treeDepth);
          }}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}
        <Select
          onValueChange={(e) => {
            setValue(e);
          }}
        >
          <SelectTrigger className="w-auto px-4 bg-myPink text-black">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-myPink text-black">
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

const ProvideWorkInfoNode = <>You only need to work 8 hours a week!</>;

const MoneyNodeInsurnance = <>You are entitled to an insurance grant</>;

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have insurance?"
      treeDepth={3}
    >
      {[NoLeadNode, MoneyNodeInsurnance]}
    </DecisionNode>
  );
};

const MoneyNodeGrant = (
  <div>
    <p className="border-myPink rounded-lg border p-2">
      You are entitled to basic grant
    </p>{" "}
    <InsuranceNode />
  </div>
);

const RequiredHoursNodeAbove21 = () => {
  return (
    <DecisionNode
      selectId="requiredHours"
      label="Do you work at least 32 hours a month?"
      treeDepth={3}
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
      treeDepth={3}
    >
      {[MoneyNodeGrant, ProvideWorkInfoNode]}
    </DecisionNode>
  );
};

const WorkNode = () => {
  return (
    <DecisionNode selectId="work" label="Do you work?" treeDepth={2}>
      {[<AgeNode key={0} />, ProvideWorkInfoNode]}
    </DecisionNode>
  );
};

const AgeNode = () => {
  return (
    <DecisionNode selectId="age" label="Are you Above 21?" treeDepth={1}>
      {[
        <RequiredHoursNodeAbove21 key="0" />,
        <RequiredHoursNodeBellow21 key="1" />,
      ]}
    </DecisionNode>
  );
};

const RootNode = () => {
  return (
    <DecisionNode
      key="0"
      selectId="EU"
      label="Do you have an EU passport?"
      treeDepth={0}
    >
      {[<WorkNode key="0" />, NoLeadNode]}
    </DecisionNode>
  );
};
