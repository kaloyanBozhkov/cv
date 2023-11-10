import { Link } from "@react-pdf/renderer";
import { type ReactNode } from "react";
import { tw } from "tailwind.config";

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

export const CuteLinkPdf = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link src={href} style={tw("text-gray-500 hover:text-gray-400")}>
      {children}
    </Link>
  );
};
