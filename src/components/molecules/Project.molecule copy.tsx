import { formatDate } from "@/utils/formatters";
import { type ReactNode } from "react";
import CuteLink, { CuteLinkPdf } from "../atoms/CuteLink.atom";
import { Text, View } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

const Project = ({
  title,
  entity,
  startDate,
  endDate,
  tech,
  projectLink,
  repoUrl,
}: {
  title: string;
  entity: string;
  startDate: Date;
  endDate?: Date;
  tech: string | ReactNode;
  projectLink: string;
  repoUrl: string;
}) => {
  return (
    <div className="gap=2 flex w-full flex-col flex-wrap">
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <h1 className="min-w-[300px] pr-8 text-xl font-bold">{title}</h1>
        <div className="flex flex-col items-end">
          <p className="text-md text-gray-500">
            <b>{entity}</b>
          </p>
          <p className="mt-2 text-xs font-semibold text-gray-500">
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"}
          </p>
        </div>
      </div>
      <p className="mt-4 font-mono">{tech}</p>
      <div className="mt-4 flex flex-row gap-2">
        <CuteLink href={projectLink}>Live Link</CuteLink>|
        <CuteLink href={repoUrl}>GitHub</CuteLink>
      </div>
    </div>
  );
};

export default Project;

export const ProjectPDF = ({
  title,
  entity,
  startDate,
  endDate,
  tech,
  projectLink,
  repoUrl,
}: {
  title: string;
  entity: string;
  startDate: Date;
  endDate?: Date;
  tech: string | ReactNode;
  projectLink: string;
  repoUrl: string;
}) => {
  return (
    <View style={tw("flex w-full flex-col flex-wrap")}>
      <View
        style={tw(
          "flex w-full flex-row flex-wrap items-center justify-between",
        )}
      >
        <Text style={tw("min-w-[300px] pr-8 text-3xl font-bold")}>{title}</Text>
        <View style={tw("flex flex-col items-end")}>
          <Text style={tw("text-md text-gray-500 font-bold")}>{entity}</Text>
          <Text style={tw("mt-2 text-xs font-semibold text-gray-500")}>
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Present"}
          </Text>
        </View>
      </View>
      <Text style={tw("-mt-4 font-mono")}>{tech}</Text>
      <View style={tw("mt-4 flex flex-row gap-2 text-[14px]")}>
        <CuteLinkPdf href={projectLink}>Live Link</CuteLinkPdf>
        <Text style={tw("text-gray-500")}>|</Text>
        <CuteLinkPdf href={repoUrl}>GitHub</CuteLinkPdf>
      </View>
    </View>
  );
};
