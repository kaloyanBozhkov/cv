import { View } from "@react-pdf/renderer";
import { tw } from "tailwind.config";

const Separator = ({
  double,
  className,
}: {
  double?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`h-px w-full bg-gray-400 ${
        double &&
        `relative top-[2px] before:relative before:-top-[2px] before:block before:h-px before:w-full before:bg-gray-400 before:content-['']`
      } ${className}`}
    />
  );
};

export default Separator;

export const SeparatorPDF = ({
  double,
  className,
}: {
  double?: boolean;
  className?: string;
}) => {
  return (
    <View style={tw(`w-full flex flex-col gap-[1px]  ${className}`)}>
      <View style={tw(`h-px w-full bg-gray-400`)} />
      {double && <View style={tw(`h-px w-full bg-gray-400`)} />}
    </View>
  );
};
