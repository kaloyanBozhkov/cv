import { type Config } from "tailwindcss";
import defaultTheme, { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url('/assets/images/noise.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        helvatica: ["Arial, Helvetica, sans-serif"],
        monospace: ["monospace"],
      },
      screens: {
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
} satisfies Config;

export type DefaultTheme = typeof defaultTheme;
