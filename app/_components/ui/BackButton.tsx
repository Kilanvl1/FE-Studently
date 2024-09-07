"use client";

import Link from "next/link";
import { BorderGradientForButton } from "./BorderGradientForButton";
import { ArrowLeft } from "lucide-react";
export type BackButtonProps = {
  href: string;
  className?: string;
};

export const BackButton = ({ href, className }: BackButtonProps) => {
  return (
    <BorderGradientForButton className={`${className} w-8 h-8 rounded-full`}>
      <Link href={href}>
        <div className="w-8 h-8 flex items-center justify-center">
          <ArrowLeft color="white" className="w-5 h-5" />
        </div>
      </Link>
    </BorderGradientForButton>
  );
};
