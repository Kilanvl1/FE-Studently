"use client";
import React, { useState } from "react";

export default function Form() {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);
  const handleChange = (e, treeDepth) => {
    console.log(e, treeDepth);
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
    <form className="flex flex-col">
      <DecisionNode
        selectId="EU"
        label="Do you have an EU passport?"
        treeDepth={0}
        setUserInfo={handleChange}
      >
        {userInfo[0] && (
          <DecisionNode
            selectId="age"
            label="Are you Above 21?"
            treeDepth={1}
            setUserInfo={handleChange}
          >
            {userInfo[1] && (
              <DecisionNode
                selectId="work"
                label="Do you work"
                treeDepth={2}
                setUserInfo={handleChange}
              >
                <p>Test</p>
              </DecisionNode>
            )}
          </DecisionNode>
        )}
        {userInfo[0] === false && <p>No lead</p>}
      </DecisionNode>
    </form>
  );
}

type DecisionNodeProps = {
  selectId: string;
  label: string;
  children: React.ReactNode;
  treeDepth: number;
  setUserInfo: (e, treeDepth) => void;
};

const DecisionNode = ({
  selectId,
  label,
  children,
  treeDepth,
  setUserInfo,
}: DecisionNodeProps) => {
  return (
    <>
      <div>
        <label htmlFor={selectId}>{label}</label>
        <select
          id={selectId}
          name="test"
          className="text-black"
          onChange={(e) => {
            setUserInfo(e, treeDepth);
          }}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      {children}
    </>
  );
};
