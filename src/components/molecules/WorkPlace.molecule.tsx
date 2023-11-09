import { formatDate } from "@/utils/formatters";
import { type ReactNode } from "react";

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
