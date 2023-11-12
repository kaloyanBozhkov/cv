const DotsLoader = ({
  size,
  dotsBg,
}: {
  size?: "sm" | "default";
  dotsBg: string;
}) => {
  const sizeStyles = (() => {
    switch (size) {
      case "sm":
        return "-m-x-4 scale-70";
      default:
        return "";
    }
  })();

  const dotStyle = `absolute top-0 h-[13px] w-[13px] rounded-full ${dotsBg}`;

  return (
    <div
      className={`relative inline h-[13px] w-[80px] ${sizeStyles} z-0 -ml-1 -mr-1`}
    >
      <div
        className={`${dotStyle} left-[8px] z-[1] animate-[scale-in_0.6s_infinite]`}
      />
      <div
        className={`${dotStyle} left-[8px] animate-[move-24px_0.6s_infinite]`}
      />
      <div
        className={`${dotStyle} left-[32px] z-[2] animate-[move-24px_0.6s_infinite]`}
      />
      <div
        className={`${dotStyle} left-[56px] z-[1] animate-[scale-out_0.6s_infinite]`}
      />
    </div>
  );
};

export default DotsLoader;
