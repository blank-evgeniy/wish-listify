import { twMerge } from "tailwind-merge";
import { SkeletonBlock } from "../base/skeleton-block";
import { SkeletonLine } from "../base/skeleton-line";

interface FriendCardSkeletonProps {
  className?: string;
}

export const FriendCardSkeleton = ({ className }: FriendCardSkeletonProps) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between gap-x-4",
        className
      )}
    >
      <div className="w-full flex items-start gap-x-4">
        <SkeletonBlock className="w-16 h-16 rounded-xl" />
        <SkeletonLine className="text-lg w-1/3" />
      </div>
      <div className="flex items-center gap-x-2">{/* TODO: delete */}</div>
    </div>
  );
};
