import { formatDate } from "@/utils/formatters";

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
    <div className="gap=2 flex w-full flex-row flex-wrap items-center justify-between">
      <div className="flex w-full flex-row flex-wrap items-center justify-between">
        <h1 className="min-w-[300px] pr-8 text-xl font-bold ">{title}</h1>
        <p className="text-md text-gray-500">
          <b>{entity}</b>
        </p>
      </div>
      <p className="mt-2 text-xs">
        {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"},{" "}
        {location}
      </p>
    </div>
  );
};

export default Education;
