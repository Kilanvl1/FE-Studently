import Image from "next/image";
import happySutdents from "../../public/students-happy.jpg";
import { Button } from "./Button";

export const LandingPage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl max-w-64 mb-8  ">
        Do not miss out on free money.
      </h1>
      <Image src={happySutdents} alt="students" />
      <p className="text-lg my-8">
        We help students claim benefits from government grants, and insurances.
      </p>
      <Button />
    </div>
  );
};
