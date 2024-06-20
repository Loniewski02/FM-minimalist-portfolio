"use client";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";

const ThemeSwitchBtn = ({ className }: { className: string }) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        document.documentElement.classList.remove("hidden");

        if (resolvedTheme === "dark") {
            setIsDark(true);
            return;
        }
        setIsDark(false);
    }, []);

    return (
        <button
            onClick={() => {
                if (resolvedTheme === "dark") {
                    setTheme("light");
                    setIsDark(false);
                }
                if (resolvedTheme === "light") {
                    setTheme("dark");
                    setIsDark(true);
                }
            }}
            className={`${className && className} relative h-6 w-12 rounded-xl bg-Cyan p-[5px] transition-transform active:scale-95`}
            aria-label="theme change btn"
        >
            <span
                className={`${isDark ? "translate-x-[24px]" : "translate-x-[0px]"} absolute top-[5px] block h-[14px] w-[14px] rounded-full bg-White transition dark:bg-GraylishDarkBlue`}
            />
        </button>
    );
};

export default ThemeSwitchBtn;
