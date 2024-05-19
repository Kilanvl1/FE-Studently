import { useState, useContext, createContext } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import info from "../../../public/Info.svg";

import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { BorderGradientForButton } from "./BorderGradientForButton";
export type User = {
  [key: string]: any;
};

export type UserContextType = {
  user: User;
  updateUser: (newUser: User) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {},
  updateUser: () => {},
});

type QuestionNodeProps = {
  propertyKey: string;
  question: string;
  children?: React.ReactNode;
  followUpOnYes?: React.ReactNode;
  followUpOnNo?: React.ReactNode;
  provideQuestionInfo?: string[];
};

export const QuestionNode = ({
  propertyKey,
  question,
  children,
  followUpOnYes,
  followUpOnNo,
  provideQuestionInfo,
}: QuestionNodeProps) => {
  const [value, setValue] = useState("");
  const { user, updateUser } = useContext(UserContext);

  const handleSelectChange = (e: string) => {
    const newUserObject = {};
    let reachedTargetProperty = false;

    for (const key in user) {
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        if (key === propertyKey) {
          reachedTargetProperty = true;
        } else if (!reachedTargetProperty) {
          newUserObject[key] = user[key];
        }
      }
    }
    const valueAsBool = e === "yes" ? true : false;
    setValue(e);
    updateUser({ ...newUserObject, [propertyKey]: valueAsBool });
  };
  return (
    <>
      <div
        className={cn(
          `flex flex-col gap-y-2 gap-x-4 mb-4 max-w-[32rem] justify-between transition duration-300`
        )}
      >
        <div className="flex items-center gap-x-2">
          <label htmlFor={propertyKey}>{question}</label>
          {provideQuestionInfo && (
            <Popover>
              <PopoverTrigger>
                <Image src={info} alt="info" />
              </PopoverTrigger>
              <PopoverContent className="bg-black text-white">
                <ul className="list-disc px-4">
                  {provideQuestionInfo.map((info, index) => (
                    <li key={index} className="mb-2">
                      {info}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          )}
        </div>
        {children}
        <RadioGroup onValueChange={handleSelectChange}>
          {value === "yes" ? (
            <BorderGradientForButton
              fillColor="bg-white"
              roundedSize="rounded-lg"
              borderWidthClass="-inset-[1px]"
            >
              <MyRadioGroupItem value="yes" />
            </BorderGradientForButton>
          ) : (
            <MyRadioGroupItem value="yes" />
          )}
          {value === "no" ? (
            <BorderGradientForButton
              fillColor="bg-white "
              roundedSize="rounded-lg"
              borderWidthClass="-inset-[1px]"
            >
              <MyRadioGroupItem value="no" />
            </BorderGradientForButton>
          ) : (
            <MyRadioGroupItem value="no" />
          )}
        </RadioGroup>
      </div>

      {value === "yes" && followUpOnYes}
      {value === "no" && followUpOnNo}
    </>
  );
};

const MyRadioGroupItem = ({ value }: { value: "yes" | "no" }) => {
  return (
    <div className="flex items-center space-x-4 rounded-lg py-4 px-2 border-[#DEDEDE] border bg-white">
      <RadioGroupItem value={value} className="font-medium" />
      <Label className="font-normal text-base">{value}</Label>
    </div>
  );
};
