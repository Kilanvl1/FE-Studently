export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};
