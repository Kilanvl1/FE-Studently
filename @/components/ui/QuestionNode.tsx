import { useState, useContext, createContext } from "react";
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
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";
import info from "../../../public/Info.svg";

import { Info } from "lucide-react";
import Image from "next/image";
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
          `flex gap-x-4 my-4 items-center max-w-[32rem] justify-between transition duration-300`
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
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-auto px-4 bg-myBlue-test text-black">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className=" bg-myBlue-test text-black">
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
      </div>
      {children}
      {value === "yes" && followUpOnYes}
      {value === "no" && followUpOnNo}
    </>
  );
};
