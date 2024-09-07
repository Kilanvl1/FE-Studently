import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...forms: ClassValue[]) {
  return twMerge(clsx(forms));
}
