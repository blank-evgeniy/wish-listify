import Label from "@/shared/ui/label";
import { twMerge } from "tailwind-merge";
import { SkeletonBlock } from "../base/skeleton-block";

interface InputSkeletonProps {
  className?: string;
  label?: string;
}

export const InputSkeleton = ({ className, label }: InputSkeletonProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <Label>{label}</Label>
      <SkeletonBlock className="h-12 w-full" />
    </div>
  );
};
