import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Center = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex h-full w-full items-center justify-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Center;
