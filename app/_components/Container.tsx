export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-screen-lg px-4 ${className}`}>
      {children}
    </div>
  );
};
