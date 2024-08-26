"use client";

import Link from "next/link";
import { BorderGradientForButton } from "./BorderGradientForButton";

export type BackButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const BackButton = ({ href, children, className }: BackButtonProps) => {
  return (
    <BorderGradientForButton className={className}>
      <Link href={href}>{children}</Link>
    </BorderGradientForButton>
  );
};
