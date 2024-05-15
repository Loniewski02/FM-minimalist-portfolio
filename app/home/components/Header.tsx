"use client";
import { useRouter } from "next/navigation";

import Wrapper from "@/app/components/layout/Wrapper";
import Arrows from "@/public/assets/images/icons/down-arrows.svg";

import heroImgMobile from "@/public/assets/images/homepage/mobile/image-homepage-hero.jpg";

const Header = () => {
    const router = useRouter();

    const redirectHandler = () => {
        router.push("#about");
    };

    return (
        <header className="sectionX pb-12 pt-2 lg:pb-[75px]">
            <Wrapper className="relative bg-cover bg-center bg-no-repeat md:min-h-[600px] md:bg-[url('../public/assets/images/homepage/tablet/image-homepage-hero.jpg')] lg:bg-[url('../public/assets/images/homepage/desktop/image-homepage-hero.jpg')]">
                <img
                    src={heroImgMobile.src}
                    alt=""
                    className="mb-6 block h-full max-h-[380px] w-full object-cover md:hidden"
                />
                <div className="flex flex-col gap-8 md:absolute md:bottom-0 md:left-0 md:bg-VeryLightGrey md:pr-14 md:pt-14">
                    <h1 className="text-40 -tracking-[.4px] text-GraylishDarkBlue md:max-w-[458px] lg:max-w-[390px] lg:text-50">
                        Hey, I’m Alex Spencer and I love building beautiful
                        websites
                    </h1>
                    <button
                        onClick={redirectHandler}
                        className="group flex w-max items-center bg-DarkBlue transition-colors hover:bg-Cyan"
                    >
                        <span className="block bg-[#0000001f] px-4 py-4 text-Cyan group-hover:text-White">
                            <Arrows />
                        </span>
                        <span className="px-8 text-xs uppercase text-White">
                            about me
                        </span>
                    </button>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
