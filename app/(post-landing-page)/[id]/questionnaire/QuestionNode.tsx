import { useState, useContext, createContext, useRef, useEffect } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import info from "@/public/Info.svg";

import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { BorderGradientForButton } from "@/components/ui/BorderGradientForButton";
import { Profile } from "types/schemas";
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
  propertyKey: keyof Profile;
  question: string;
  children?: React.ReactNode;
  provideQuestionInfo?: string[];
};

export const QuestionNode = ({
  propertyKey,
  question,
  children,
  provideQuestionInfo,
}: QuestionNodeProps) => {
  const { user, updateUser } = useContext(UserContext);

  const [value, setValue] = useState(
    user[propertyKey] === true
      ? "yes"
      : user[propertyKey] === false
      ? "no"
      : null
  );
  const nextQuestionRef = useRef<HTMLDivElement>(null);

  const handleSelectChange = (e: string) => {
    const newUserObject = {};
    let reachedTargetProperty = false;

    for (const key in user) {
      if (key === propertyKey) {
        reachedTargetProperty = true;
      } else if (!reachedTargetProperty) {
        newUserObject[key] = user[key];
      }
    }
    const valueAsBool = e === "yes" ? true : false;
    setValue(e);
    updateUser({ ...newUserObject, [propertyKey]: valueAsBool });
  };

  useEffect(() => {
    nextQuestionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [value]);
  return (
    <div>
      <div className="flex items-center gap-x-2 mb-2">
        <Label htmlFor={propertyKey} className="text-base font-normal">
          {question}
        </Label>
        {provideQuestionInfo && (
          <Popover>
            <PopoverTrigger>
              <Image src={info} alt="info" />
            </PopoverTrigger>
            <PopoverContent>
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
            fillColor="white"
            roundedSize="lg"
            borderWidth="sm"
          >
            <MyRadioGroupItem value="yes" label="Yes" checked />
          </BorderGradientForButton>
        ) : (
          <MyRadioGroupItem value="yes" label="Yes" />
        )}

        {value === "no" ? (
          <BorderGradientForButton
            fillColor="white"
            roundedSize="lg"
            borderWidth="sm"
          >
            <MyRadioGroupItem value="no" label="No" checked />
          </BorderGradientForButton>
        ) : (
          <MyRadioGroupItem value="no" label="No" />
        )}
      </RadioGroup>
    </div>
  );
};

const MyRadioGroupItem = ({
  value,
  label,
  checked,
}: {
  value: "no" | "yes";
  label: "Yes" | "No";
  checked?: boolean;
}) => {
  return (
    <Label className="flex items-center space-x-4 rounded-lg py-4 px-2 border-[#DEDEDE] border bg-white hover:cursor-pointer">
      <RadioGroupItem value={value} className="font-medium" checked={checked} />
      <p className="font-normal text-base">{label}</p>
    </Label>
  );
};
