/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState, createContext, useContext } from "react";
import whatsapp from "../../public/whatsapp.svg";
import calendar from "../../public/calendar-fold.svg";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

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

type User = {
  [key: string]: any;
};

type UserContextType = {
  user: User;
  updateUser: (newUser: User) => void;
};

const UserContext = createContext<UserContextType>({
  user: {},
  updateUser: () => {},
});

export default function Form() {
  const [user, setUser] = useState<User>({ age: "" });
  const updateUser = (newUser: User) => {
    setUser(newUser);
  };
  const contextValue: UserContextType = { user, updateUser };
  console.log(contextValue);
  const ageAsNumber = parseInt(user.age);
  return (
    <form className=" mb-32 max-w-lg mx-auto">
      <div className="flex flex-col">
        <InputWithLabel
          placeholder="Enter your age..."
          label="Age"
          type="number"
          value={ageAsNumber}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, age: e.target.value }))
          }
        />

        {ageAsNumber <= 30 && ageAsNumber && (
          <UserContext.Provider value={contextValue}>
            <RootNode />
          </UserContext.Provider>
        )}

        {ageAsNumber > 30 && (
          <ProvideInfo className="my-4 border-red-600 px-8">
            <li>Only students below the age of 30 are entitled to benefits</li>
          </ProvideInfo>
        )}
      </div>
    </form>
  );
}

type QuestionNodeProps = {
  propertyKey: string;
  question: string;
  children?: React.ReactNode;
  followUpOnYes?: React.ReactNode;
  followUpOnNo?: React.ReactNode;
  provideQuestionInfo?: string[];
};

const QuestionNode = ({
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
    const valueAsBool = e === "yes" ? true : false;
    setValue(e);
    updateUser({ ...user, [propertyKey]: valueAsBool });
  };
  return (
    <>
      <div
        className={cn(
          `flex gap-x-4 my-4 items-center max-w-[32rem] justify-between transition duration-300`
        )}
      >
        <div className="flex items-center gap-x-4">
          <label htmlFor={propertyKey}>{question}</label>
          {provideQuestionInfo && (
            <Popover>
              <PopoverTrigger>
                <Info size={18} />
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

const FinalNode = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="my-4">
      <ProvideInfo>
        <li>You are entitled to 7076€ per year.</li>
        <li>
          You are entitled to free public transport on either weekdays or
          weekends.
        </li>

        {user?.work &&
          !user?.insurance &&
          "You are at risk of paying a 500€ insurance fine!"}
        {!user?.work &&
          !user?.insurance &&
          user?.work !== undefined &&
          "you need to apply for an insurance assessment in order to prevent a 500€ fine!"}
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
          href="https://calendly.com/youngamsterdamnetwork/30min"
          label="Calendly"
          alt="calendar"
          src={calendar}
          className="bg-[#0169fe] flex-1"
        />
      </div>
    </div>
  );
};

const WorkNode = () => {
  return (
    <QuestionNode
      propertyKey="work"
      question="Do you have a job in the Netherlands?"
      followUpOnYes={<FinalNode />}
      followUpOnNo={<FinalNode />}
    />
  );
};

const InsuranceNode = () => {
  return (
    <QuestionNode
      propertyKey="insurance"
      question="Do you have a Dutch health insurance?"
      followUpOnYes={<FinalNode />}
      followUpOnNo={<WorkNode />}
      provideQuestionInfo={[
        "Everyone who lives or works in the Netherlands, is required by law to have a Dutch health insurance.",
      ]}
    />
  );
};

const RequirementsNode = () => {
  const { user } = useContext(UserContext);

  return (
    <QuestionNode
      propertyKey="requirements"
      question="Do you meet one of the two following requirements?"
      followUpOnYes={<InsuranceNode />}
      followUpOnNo="
        In order to qualify for the student benefits you need to meet one of
          the above requirements. Don't meet the above requirements? don't
          worry! Select yes and we will help you at a later stage.
        "
    >
      <ProvideInfo>
        <li>Lived in the Netherlands for at least 5 years</li>
        {user?.age >= 21 ? (
          <li>You work at least 32 hours a month.</li>
        ) : (
          <li>You earn at least 155 Euros a month.</li>
        )}
      </ProvideInfo>
    </QuestionNode>
  );
};

const EUPassportNode = () => {
  return (
    <QuestionNode
      propertyKey="eu-passport"
      question="Do you have an EU passport?"
      followUpOnYes={<RequirementsNode />}
      followUpOnNo="Unfortunately all student benefits are only for EU passport holders."
    />
  );
};

const DutchNationalityNode = () => {
  return (
    <QuestionNode
      key="0"
      propertyKey="dutch-nationality"
      question="Are you from the Netherlands?"
      followUpOnYes={<FinalNode />}
      followUpOnNo={<EUPassportNode />}
      provideQuestionInfo={[
        "You have a Dutch passport or,",
        "You are a Dutch citizen",
      ]}
    />
  );
};

const RootNode = () => {
  const followUpOnNo =
    "You don’t qualify for the student benefits, as it's specifically designed to support students pursuing full-time studies at Dutch educational institutions.";
  return (
    <QuestionNode
      key="0"
      propertyKey="full-time-student"
      question="Are you a full time student?"
      followUpOnYes={<DutchNationalityNode />}
      followUpOnNo={followUpOnNo}
      provideQuestionInfo={[
        "HBO or university: bachelor, master or associate degree",
        "MBO: vocational training pathway",
      ]}
    />
  );
};
