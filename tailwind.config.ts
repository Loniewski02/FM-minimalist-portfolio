import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Cyan: "#5FB4A2",
        DarkBlue: "#203A4C",
        GraylishDarkBlue: "#33323D",
        VeryLightGrey: "#FAFAFA",
        LightGrey: "#EAEAEB",
        Red: "#F43030",
      },
      fontFamily: {
        ibarra: ["var(--font-ibarra)"],
        publicSans: ["var(--font-sans)"],
      },
      fontSize: {
        40: ["40px", "42px"],
        50: ["50px", "50px"],
      },
      keyframes: {
        hide: {
          "0%": { top: "0" },
          "100%": { top: "-112px" },
        },
        show: {
          "0%": { top: "-112px" },
          "100%": { top: "0" },
        },
        hideNavItems: {
          "0%": { right: "32px" },
          "100%": { right: "-120%" },
        },
        showNavItems: {
          "0%": { right: "-120%" },
          "100%": { right: "32px" },
        },
      },
      animation: {
        hide: "hide .3s ease-in-out forwards",
        show: "show .3s ease-in-out forwards",
        hideNavItems: "hideNavItems .3s ease-in-out forwards",
        showNavItems: "showNavItems .3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;