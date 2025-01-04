const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-container w-full mx-auto px-4">{children}</div>;
};

export default Container;
