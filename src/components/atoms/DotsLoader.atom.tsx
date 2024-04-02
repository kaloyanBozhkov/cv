import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "relative z-0 -ml-1 -mr-1 inline h-[13px] w-[80px]",
        sizeStyles,
      )}
    >
      <div
        className={twMerge(
          "left-[8px] z-[1] animate-[scale-in_0.6s_infinite]",
          dotStyle,
        )}
      />
      <div
        className={twMerge(
          "left-[8px] animate-[move-24px_0.6s_infinite]",
          dotStyle,
        )}
      />
      <div
        className={twMerge(
          "left-[32px] z-[2] animate-[move-24px_0.6s_infinite]",
          dotStyle,
        )}
      />
      <div
        className={twMerge(
          "left-[56px] z-[1] animate-[scale-out_0.6s_infinite]",
          dotStyle,
        )}
      />
    </div>
  );
};

export default DotsLoader;
