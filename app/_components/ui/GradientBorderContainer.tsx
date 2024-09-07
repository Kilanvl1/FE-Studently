import { ReactNode } from "react";

export const GradientBorderContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="p-[1px] bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
      <div className="bg-white rounded-lg">{children}</div>
    </div>
  );
};
