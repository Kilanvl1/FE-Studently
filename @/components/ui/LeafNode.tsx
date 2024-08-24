import { cn } from "@/lib/utils";
import Image from "next/image";

import X from "@/public/XCircle.svg";
import Check from "@/public/CheckedCircle.svg";

type LeafNodePorps = {
  bgColor: "red" | "purple";
  icon: "x" | "check";
  prompt: string;
  info: string;
};

export const LeafNode = ({ bgColor, icon, info, prompt }: LeafNodePorps) => {
  const bgColorClass = bgColor === "red" ? "bg-[#F1DADA]" : "bg-[#D3D4F6]";
  const iconSrc = icon === "x" ? X : Check;
  return (
    <div
      className={cn(`rounded-lg py-7 px-5 flex flex-col gap-y-5`, bgColorClass)}
    >
      <div className="flex gap-x-2 items-center">
        <Image src={iconSrc} alt={bgColor} />
        <p className="font-semibold text-lg">{prompt}</p>
      </div>
      <p className="opacity-60">{info}</p>
    </div>
  );
};
