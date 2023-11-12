import { formatDate } from "@/utils/formatters";
import { View, Text } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

const Education = ({
  title,
  entity,
  startDate,
  endDate,
  location,
}: {
  title: string;
  entity: string;
  startDate: Date;
  endDate?: Date;
  location: string;
}) => {
  return (
    <div className="flex w-full flex-row flex-wrap items-center justify-between gap-2">
      <div className="flex w-full flex-col flex-wrap justify-between lg:flex-row lg:items-center">
        <h1 className="min-w-[300px] pr-8 text-xl font-bold ">{title}</h1>
        <p className="text-md text-gray-500">
          <b>{entity}</b>
        </p>
      </div>
      <p className="mb-2 text-xs">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"},{" "}
        {location}
      </p>
    </div>
  );
};

export default Education;

export const EducationPDF = ({
  title,
  entity,
  startDate,
  endDate,
  location,
}: {
  title: string;
  entity: string;
  startDate: Date;
  endDate?: Date;
  location: string;
}) => {
  return (
    <View style={tw("w-full mb-4")}>
      <View
        style={tw(
          "flex w-full flex-row flex-wrap items-center justify-between",
        )}
      >
        <Text style={tw("min-w-[300px] pr-8 text-3xl font-bold leading-6")}>
          {title}
        </Text>
        <Text style={tw("text-md text-gray-500 text-bold")}>{entity}</Text>
      </View>
      <Text style={tw("text-xs")}>
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"},{" "}
        {location}
      </Text>
    </View>
  );
};
