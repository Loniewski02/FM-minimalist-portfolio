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
            },
            animation: {
                loading: "loading 1s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
