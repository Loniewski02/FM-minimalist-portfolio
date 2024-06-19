"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ROUTES } from "../../../app/routes";

import Wrapper from "../../layout/Wrapper";
import BurgerBtn from "./BurgerBtn";

import Logo from "@/public/assets/images/logo.svg";

const Navigation = () => {
    const [isNavItemsShown, setIsNavItemsShown] = useState(false);
    const [isNavShown, setIsNavShown] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const pathname = usePathname();
    useEffect(() => {
        document.documentElement.classList.remove("hidden");
    }, []);

    useEffect(() => {
        const navbarBehavior = () => {
            if (window.scrollY > lastScrollY) {
                setIsNavShown(false);
            } else {
                setIsNavShown(true);
            }

            setIsNavItemsShown(false);

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", navbarBehavior);

        return () => {
            window.removeEventListener("scroll", navbarBehavior);
        };
    }, [lastScrollY]);

    const showMobileMenuHandler = () => {
        setIsNavItemsShown((prevState) => !prevState);
    };

    const hideMobileMenuHandler = () => {
        setIsNavItemsShown(false);
    };

    return (
        <nav
            className={`${isNavShown ? "translate-y-[0]" : "-translate-y-[122px]"} ${lastScrollY > 200 && "magic shadow-sm"} sectionX sticky left-0 right-0 top-0 z-20 bg-VeryLightGrey py-8 transition duration-300 md:py-10`}
        >
            <Wrapper className="flex flex-row items-center justify-between">
                <Link
                    href="/"
                    aria-label="Home Page"
                    className="text-GraylishDarkBlue"
                >
                    <Logo />
                </Link>
                <BurgerBtn
                    isShown={isNavItemsShown}
                    onClick={showMobileMenuHandler}
                />
                <div
                    className={`${isNavItemsShown ? "-translate-x-[32px] translate-y-[96px]" : "-translate-y-[120%] translate-x-[120%]"} fixed right-0 top-0 bg-GraylishDarkBlue px-16 py-10 transition duration-300 md:static md:block md:translate-x-0 md:translate-y-0 md:bg-transparent md:p-0`}
                >
                    <div className="flex flex-col items-center gap-6 md:flex-row">
                        {ROUTES.map((route) => (
                            <Link
                                key={route.id}
                                href={route.url}
                                aria-label={`${route.name} Page`}
                                onClick={hideMobileMenuHandler}
                                className={`${pathname.includes(route.url) && "active"} link text-xs uppercase tracking-wider text-White md:text-GraylishDarkBlue`}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Wrapper>
        </nav>
    );
};

export default Navigation;
