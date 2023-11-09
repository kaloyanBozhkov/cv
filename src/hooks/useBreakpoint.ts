import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "~/../tailwind.config.js";
import { useRef } from "react";
import { useMediaQuery } from "@mantine/hooks";

const useBreakpoint = ({
  screen,
}: {
  screen: "sm" | "md" | "lg" | "xl" | "2xl";
}) => {
  const fullConfig = useRef(resolveConfig(tailwindConfig));
  const {
    extend: { screens },
  } = fullConfig.current.theme;
  const isMatch = useMediaQuery(`(min-width: ${screens[screen]})`);

  return isMatch;
};

export default useBreakpoint;
