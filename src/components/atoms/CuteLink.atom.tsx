import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";
import { tw } from "tailwind.config";
import FontAwesomeIconPDF from "./FontawesomeIconPDF.atom";
import { twMerge } from "tailwind-merge";

const CuteLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className="text-gray-500 hover:text-gray-400"
    >
      <FontAwesomeIcon
        // eslint-disable-next-line
        // @ts-ignore
        icon={faLink}
        className="mr-1 inline-block h-auto w-[17px]"
      />
      {children}
    </a>
  );
};

export default CuteLink;

export const CuteLinkPdf = ({
  href,
  children,
  className,
}: {
  href: string;
  children: string;
  className?: string;
}) => {
  return (
    <Link
      src={href}
      style={tw(twMerge("text-gray-500 hover:text-gray-400", className))}
    >
      <View style={tw("flex flex-nowrap flex-row items-center")}>
        <FontAwesomeIconPDF
          // eslint-disable-next-line
          // @ts-ignore
          faIcon={faLink}
          style={tw("mr-1 w-[16px] h-auto text-gray-400")}
        />
        <Text>{children}</Text>
      </View>
    </Link>
  );
};
