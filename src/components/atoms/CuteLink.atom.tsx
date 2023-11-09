import { type ReactNode } from "react";

const CuteLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href} className="text-gray-500 hover:text-gray-400">
      {children}
    </a>
  );
};

export default CuteLink;
