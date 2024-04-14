"use client";
import { useState, useContext, createContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ShadSelect";

const setUserInfoContext = createContext(null);

export default function Form() {
  const [userInfo, setUserInfo] = useState([]);

  const handleChange = (e, treeDepth) => {
    const newUserInfo =
      treeDepth >= userInfo.length
        ? [...userInfo, e.target.value === "yes" ? true : false]
        : userInfo.map((info, index) => {
            if (index === treeDepth) {
              return e.target.value === "yes" ? true : false;
            } else {
              return info;
            }
          });
    setUserInfo(newUserInfo);
  };
  return (
    <form className="bg-gray-900 flex flex-col h-screen p-4 items-start lg:items-center">
      <setUserInfoContext.Provider value={setUserInfo}>
        <RootNode />
      </setUserInfoContext.Provider>
    </form>
  );
}

type DecisionNodeProps = {
  selectId: string;
  label: string;
  children: React.ReactNode[];
  treeDepth: number;
  setUserInfo?: (e, treeDepth) => void;
};

const DecisionNode = ({
  selectId,
  label,
  children,
  treeDepth,
}: DecisionNodeProps) => {
  const [value, setValue] = useState("");
  const shouldRenderFirstChild = value === "yes";
  console.log(shouldRenderFirstChild);
  const setUserInfo = useContext(setUserInfoContext);
  return (
    <>
      <div className="flex gap-x-4 my-4 justify-center max-w-[32rem] items-center">
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
            setUserInfo(e);
            setValue(e);
          }}
        >
          <SelectTrigger className="w-auto px-4">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900">
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

const MoneyNode = <>You are entitled to 1,000,000 dollars</>;

const InsuranceNode = () => {
  return (
    <DecisionNode
      selectId="insurance"
      label="Do you have insurance?"
      treeDepth={3}
    >
      {[NoLeadNode, MoneyNode]}
    </DecisionNode>
  );
};

const RequiredHoursNodeAbove21 = () => {
  return (
    <DecisionNode
      selectId="requiredHours"
      label="Do you work at least 32 hours a month?"
      treeDepth={3}
    >
      {[MoneyNode, ProvideWorkInfoNode]}
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
      {[MoneyNode, ProvideWorkInfoNode]}
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
