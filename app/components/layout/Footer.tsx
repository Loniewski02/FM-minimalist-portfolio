"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ROUTES } from "@/app/routes";

import Wrapper from "./Wrapper";
import Socials from "../UI/Socials";

import Logo from "@/public/assets/images/logo.svg";

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="sectionX bg-GraylishDarkBlue py-14 md:py-6">
            <Wrapper className="flex flex-col items-center gap-10  md:flex-row md:justify-between ">
                <div className="flex flex-col items-center gap-8 text-center md:flex-row">
                    <Link
                        href="/home"
                        aria-label="home page"
                        className="mb-2 md:mb-0 md:mr-2"
                    >
                        <Logo className="text-White" />
                    </Link>
                    {ROUTES.map((route) => (
                        <Link
                            href={route.url}
                            aria-label={route.name + " page"}
                            key={route.id}
                            className={`${pathname === route.url && "active"} text-White link text-xs uppercase tracking-[2px]`}
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>
                <Socials isDark={false} />
            </Wrapper>
        </footer>
    );
};

export default Footer;
