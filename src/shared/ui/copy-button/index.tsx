import { twMerge } from "tailwind-merge";
import Button from "@/shared/ui/button";
import CopyIcon from "@/shared/assets/icons/copy";
import { useEffect, useState } from "react";
import CheckIcon from "@/shared/assets/icons/check";

interface CopyButtonProps {
  className?: string;
  children?: React.ReactNode;
  withIcon?: boolean;
  copyText: string;
}

export const CopyButton = ({
  className,
  children,
  copyText,
  withIcon = true,
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => setIsCopied(true));
  };

  return (
    <Button size="sm" onClick={handleCopy} className={twMerge("", className)}>
      {children}
      {withIcon &&
        (isCopied ? (
          <CheckIcon className={`w-5 h-5`} />
        ) : (
          <CopyIcon className="w-5 h-5" />
        ))}
    </Button>
  );
};
