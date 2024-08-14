import Link from "next/link";

import Image from "next/image";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  src?: any;
  alt?: string;
  label: string;
  href: string;
  className?: string;
};

export const CallToAction = ({
  src,
  alt,
  label,
  href,
  className,
}: CallToActionProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("flex items-center gap-x-2 p-3 rounded-lg", className)}
    >
      <Image
        src={src}
        alt={alt}
        width="28"
        height="28"
        className="rounded-md"
      />
      {label}
    </Link>
  );
};
