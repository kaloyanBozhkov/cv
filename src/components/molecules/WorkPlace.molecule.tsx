import { formatDate } from "@/utils/formatters";
import { Text, View } from "@react-pdf/renderer";
import { type ReactNode } from "react";
import { tw } from "tailwind.config";

const WorkPlace = ({
  position,
  positionTec,
  info,
}: {
  info:
    | {
        company: string;
        startDate: Date;
        endDate?: Date;
        location: string;
      }
    | string;
  position: string;
  positionTec: string | ReactNode;
}) => {
  return (
    <div className="flex w-full flex-col gap-4 md:gap-2">
      <div className="gap=2 flex flex-row flex-wrap items-center justify-between">
        <h1 className="min-w-[300px] pr-8 text-xl font-bold ">{position}</h1>
        {typeof info === "string" ? (
          <p className="text-gray-500">{info}</p>
        ) : (
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="text-md text-gray-500">
              <b>{info.company}</b>
            </p>
            <p className="text-xs font-semibold text-gray-500">
              ({formatDate(info.startDate)} -{" "}
              {info.endDate ? formatDate(info.endDate) : "Present"},{" "}
              {info.location})
            </p>
          </div>
        )}
      </div>
      <p className="font-mono">{positionTec}</p>
    </div>
  );
};

export default WorkPlace;

export const WorkPlacePDF = ({
  position,
  positionTec,
  info,
}: {
  info:
    | {
        company: string;
        startDate: Date;
        endDate?: Date;
        location: string;
      }
    | string;
  position: string;
  positionTec: string | ReactNode;
}) => {
  return (
    <View style={tw("w-full mb-4")}>
      <View
        style={tw("gap-2 flex flex-row flex-wrap items-center justify-between")}
      >
        <Text style={tw("min-w-[300px] pr-8 text-3xl font-semibold leading-6")}>
          {position}
        </Text>
        {typeof info === "string" ? (
          <Text style={tw("text-gray-500")}>{info}</Text>
        ) : (
          <View style={tw("flex flex-row items-center justify-center gap-2")}>
            <Text style={tw("text-md text-gray-500 font-semibold")}>
              {info.company}
            </Text>
            <Text style={tw("text-xs font-semibold text-gray-500")}>
              ({formatDate(info.startDate)} -{" "}
              {info.endDate ? formatDate(info.endDate) : "Present"},{" "}
              {info.location})
            </Text>
          </View>
        )}
      </View>
      <View style={tw("font-mono text-[16px]")}>{positionTec}</View>
    </View>
  );
};
