import { Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";
import { tw } from "tailwind.config";

const InfoSection = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-8 sm:flex-row">
      <h3 className="w-auto text-lg font-semibold italic sm:w-[115px]">
        {sectionName}
      </h3>
      <div className="-mt-7 h-px w-[100px] bg-gray-500 sm:-mt-0 sm:h-[100px] sm:w-px" />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default InfoSection;

export const InfoSectionPdf = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children: ReactNode;
}) => {
  return (
    <View style={tw("flex gap-8 flex-row")}>
      <Text style={tw("text-2xl font-bold italic w-[115px] leading-5")}>
        {sectionName}
      </Text>
      <View style={tw("-mt-7 bg-gray-500 sm:-mt-0 h-[100px] w-px")} />
      <View style={tw("w-full")}>{children}</View>
    </View>
  );
};
