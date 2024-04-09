"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "../../routes";

import Wrapper from "./Wrapper";
import BurgerBtn from "../UI/BurgerBtn";

import Logo from "@/public/assets/images/logo.svg";

const Navigation = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const [isNavShown, setIsNavShown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const navbarBehavior = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavShown(false);
        setIsMobileMenuShown(false);
      } else {
        setIsNavShown(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", navbarBehavior);

    return () => {
      window.removeEventListener("scroll", navbarBehavior);
    };
  }, [lastScrollY]);

  const showMobileMenuHandler = () => {
    setIsMobileMenuShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsMobileMenuShown(false);
  };

  return (
    <nav
      className={`${isNavShown ? "animate-show" : "animate-hide"} ${
        lastScrollY > 200 && "shadow-sm"
      } sectionX sticky left-0 right-0 top-0 z-20 bg-VeryLightGrey py-8 md:py-10`}
    >
      <Wrapper className="flex flex-row items-center justify-between ">
        <Link href="/" aria-label="Home Page">
          <Logo />
        </Link>
        <BurgerBtn
          isShown={isMobileMenuShown}
          onClick={showMobileMenuHandler}
        />
        <div
          className={`${
            isMobileMenuShown ? "animate-showNavItems" : "animate-hideNavItems"
          } fixed top-[96px] bg-GraylishDarkBlue px-16 py-10 md:static md:block md:bg-transparent md:p-0`}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row ">
            {ROUTES.map((route) => (
              <Link
                key={route.id}
                href={route.url}
                aria-label={`${route.name} Page`}
                onClick={hideMobileMenuHandler}
                className={`${pathname === route.url ? "text-Cyan" : "text-white md:text-GraylishDarkBlue"} text-xs uppercase tracking-wider`}
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
