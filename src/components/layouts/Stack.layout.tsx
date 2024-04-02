import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Stack = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col items-center", className)}>
      {children}
    </div>
  );
};

export default Stack;
