import { cn } from "@/lib/utils";
import Image from "next/image";

type LeafNodePorps = {
  bgColor: string;
  icon: any;
  prompt: string;
  info: string;
};

export const LeafNode = ({ bgColor, icon, info, prompt }: LeafNodePorps) => {
  return (
    <div className={cn(`rounded-lg py-7 px-5 flex flex-col gap-y-5`, bgColor)}>
      <div className="flex gap-x-2 items-center">
        <Image src={icon} alt={bgColor} />
        <p className="font-semibold text-lg">{prompt}</p>
      </div>
      <p className="opacity-60">{info}</p>
    </div>
  );
};
