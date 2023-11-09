import { type ReactNode } from "react";

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
      <div className="-mt-7 h-px w-[100px] bg-black sm:-mt-0 sm:h-[100px] sm:w-px" />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default InfoSection;
