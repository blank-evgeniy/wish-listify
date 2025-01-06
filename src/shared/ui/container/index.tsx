import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "max-w-container w-full mx-auto xs:px-4 xxs:px-3 px-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
