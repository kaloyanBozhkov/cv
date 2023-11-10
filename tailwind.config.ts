import { getBaseUrl } from "./src/utils/common";
import { createTw } from "react-pdf-tailwind";
import { type Config } from "tailwindcss";
import defaultTheme, { fontFamily } from "tailwindcss/defaultTheme";

const tailwind = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        noise: `url('${`${getBaseUrl(false)}/assets/images/noise.jpg`}')`,
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        helvatica: ["Arial, Helvetica, sans-serif"],
        monospace: ["monospace"],
      },
      screens: {
        ...defaultTheme.screens,
      },
      transitionTimingFunction: {
        "in-out-cool": "cubic-bezier(0, 1, 1, 0)",
      },
      keyframes: {
        "scale-in": {
          "0%": {
            transform: "scale(0)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
        "scale-out": {
          "0%": {
            transform: "scale(100%)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        "move-24px": {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(24px, 0)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default tailwind;

export const tw = createTw(tailwind);
