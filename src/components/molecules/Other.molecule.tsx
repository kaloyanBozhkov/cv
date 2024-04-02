import CuteLink, { CuteLinkPdf } from "../atoms/CuteLink.atom";
import { Text, View } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

const Other = ({
  title,
  desc,
  link,
  linkLabel = "Link",
}: {
  linkLabel?: string;
  title: string;
  link: string;
  desc: string;
}) => {
  return (
    <div className="flex w-full flex-col flex-wrap gap-4">
      <div className="flex w-full flex-col flex-wrap items-start justify-between lg:flex-row">
        <div className="flex w-full flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <h1 className="min-w-[300px] pr-8 text-xl font-bold">{title}</h1>
          <CuteLink href={link}>{linkLabel}</CuteLink>
        </div>
        <p className="mt-2 font-light text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default Other;

export const OtherPDF = ({
  title,
  desc,
  link,
  linkLabel = "Link",
}: {
  linkLabel?: string;
  title: string;
  link: string;
  desc: string;
}) => {
  return (
    <View
      style={tw("flex w-full flex-row flex-wrap items-center justify-between")}
    >
      <View style={tw("flex flex-row w-full justify-between gap-2")}>
        <Text style={tw("min-w-[300px] pr-8 text-3xl font-bold")}>{title}</Text>
        <CuteLinkPdf href={link} className="text-[16px]">
          {linkLabel}
        </CuteLinkPdf>
      </View>
      <Text style={tw("text-[16px] mt-1 text-gray-500 font-normal")}>
        {desc}
      </Text>
    </View>
  );
};
