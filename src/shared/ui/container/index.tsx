const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-container w-full mx-auto xs:px-4 xxs:px-3 px-2">
      {children}
    </div>
  );
};

export default Container;
