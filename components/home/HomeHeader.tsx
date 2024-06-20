import Wrapper from "@/components/layout/Wrapper";
import Arrows from "@/public/assets/images/icons/down-arrows.svg";

import heroImgMobile from "@/public/assets/images/homepage/mobile/image-homepage-hero.jpg";

const HomeHeader = () => {
    return (
        <header className="sectionX p-12 lg:p-[75px]">
            <Wrapper className="relative bg-cover bg-center bg-no-repeat md:min-h-[600px] md:bg-[url('../public/assets/images/homepage/tablet/image-homepage-hero.jpg')] lg:bg-[url('../public/assets/images/homepage/desktop/image-homepage-hero.jpg')]">
                <div className="bg-transaprent bottom-0 left-0 right-0 top-0 md:absolute dark:md:bg-[rgba(0,0,0,0.3)]">
                    <div className="relative">
                        <img
                            src={heroImgMobile.src}
                            alt=""
                            className="z-10 mb-6 block h-full max-h-[380px] w-full object-cover md:hidden"
                        />
                        <div className="bg-transaprent absolute bottom-0 left-0 right-0 top-0 dark:bg-[rgba(0,0,0,0.3)]" />
                    </div>
                    <div className="dark:bg-DarkBg flex flex-col gap-8 md:absolute md:bottom-0 md:left-0 md:rounded-tr-md md:bg-VeryLightGrey md:pr-14 md:pt-14">
                        <h1 className="text-40 -tracking-[.4px] text-GraylishDarkBlue md:max-w-[458px] lg:max-w-[390px] lg:text-50 dark:text-White">
                            Hey, I’m Miłosz Łoniewski and I love building
                            beautiful websites
                        </h1>
                        <a
                            href="#about"
                            className="group flex w-max items-center bg-DarkBlue transition-colors hover:bg-Cyan"
                        >
                            <span className="block bg-[#0000001f] px-4 py-4 text-Cyan group-hover:text-White">
                                <Arrows />
                            </span>
                            <span className="px-8 text-xs uppercase text-White">
                                about me
                            </span>
                        </a>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default HomeHeader;
