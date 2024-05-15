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
                White: "#FFFFFF",
            },
            fontFamily: {
                ibarra: ["var(--font-ibarra)"],
                publicSans: ["var(--font-sans)"],
            },
            fontSize: {
                13: ["13px", "30px"],
                15: ["15px", "30px"],
                32: ["32px", "42px"],
                40: ["40px", "42px"],
                50: ["50px", "50px"],
            },
            keyframes: {
                loading: {
                    "0%": { left: "0" },
                    "30%": { width: "20%" },
                    "65%": { width: "25%" },
                    "90%": { width: "15%" },
                    "100%": { left: "100%" },
                },
                spin: {
                    to: { transform: "rotate(360deg)" },
                },
                hide: {
                    "0%": { top: "0" },
                    "100%": { top: "-122px" },
                },
                show: {
                    "0%": { top: "-122px" },
                    "100%": { top: "0" },
                },
                hideNavItems: {
                    "0%": { top: "90px", right: "32px" },
                    "100%": { top: "-100%", right: "-120%" },
                },
                showNavItems: {
                    "0%": { top: "-100%", right: "-120%" },
                    "100%": { top: "90px", right: "32px" },
                },
            },
            animation: {
                loading: "loading 1s ease-in-out infinite",
                spin: "spin 1s linear infinite",
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
