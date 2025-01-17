import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholder?: React.ReactNode;
}

export const FallbackImage = ({
  className,
  src,
  placeholder,
  ...props
}: FallbackImageProps) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  if (isError || !src) {
    return (
      <div
        className={twMerge(
          "aspect-square flex items-center justify-center",
          className
        )}
      >
        {placeholder || "Image not found"}
      </div>
    );
  }

  return (
    <img onError={handleError} className={className} src={src} {...props} />
  );
};
