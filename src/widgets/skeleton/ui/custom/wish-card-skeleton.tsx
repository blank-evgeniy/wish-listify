import { twMerge } from "tailwind-merge";
import { SkeletonBlock } from "../base/skeleton-block";
import { SkeletonLine } from "../base/skeleton-line";

interface WishCardSkeletonProps {
  className?: string;
}

export const WishCardSkeleton = ({ className }: WishCardSkeletonProps) => {
  return (
    <div
      className={twMerge(
        "flex lg:flex-col justify-between bg-bg-300 animate-pulse sm:p-4 p-2 rounded-lg shadow",
        className
      )}
    >
      <div className="flex lg:flex-col items-center xs:gap-x-4 gap-x-2 w-full">
        <SkeletonBlock
          className="lg:max-w-[420px] xs:max-w-[120px] max-w-[80px] w-full aspect-square rounded-md h-full"
          alt
        />
        <div className="w-full h-full flex flex-col">
          <SkeletonLine className="xs:text-lg mt-2 leading-none" alt />
          <SkeletonLine className="xs:text-xl w-1/2" />

          <div className="h-[42px] flex flex-col">
            <SkeletonLine
              className="text-text-200 leading-none text-sm w-full bg-bg-200 h-4"
              alt
            />
            <SkeletonLine
              className="text-text-200 leading-none text-sm w-full h-4 mt-[2px]"
              alt
            />
            <SkeletonLine
              className="text-text-200 leading-none text-sm h-4 mt-[2px]"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  );
};
