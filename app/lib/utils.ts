import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractImageUrl = (content: any) => {
  const pattern = /https:\/\/cdn-images-1\.medium\.com\/max\/1024\/[^"\s]+/;
  const match = content.match(pattern);
  return match ? match[0] : null;
};
