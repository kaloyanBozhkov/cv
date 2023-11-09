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
        `before:mt-[2px] before:block before:h-px before:w-full before:bg-gray-400 before:content-['']`
      } ${className}`}
    />
  );
};

export default Separator;
