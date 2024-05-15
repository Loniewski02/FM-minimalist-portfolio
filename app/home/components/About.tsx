import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

import profileMobile from "@/public/assets/images/homepage/mobile/image-homepage-profile.jpg";
import profileTablet from "@/public/assets/images/homepage/tablet/image-homepage-profile.jpg";
import profileDesktop from "@/public/assets/images/homepage/desktop/image-homepage-profile.jpg";

const About = () => {
    return (
        <section id="about" className="sectionX sectionY">
            <Wrapper className="flex flex-col items-center justify-between md:flex-row md:items-stretch md:justify-start md:gap-16 ">
                <img
                    src={profileMobile.src}
                    alt=""
                    className="mb-8 h-full w-full max-w-96 md:hidden "
                />
                <img
                    src={profileTablet.src}
                    alt=""
                    className="hidden md:block lg:hidden"
                />
                <img
                    src={profileDesktop.src}
                    alt=""
                    className="hidden lg:block"
                />
                <div className="lines flex max-w-96 flex-col justify-center gap-6 md:max-w-md lg:max-w-[350px]">
                    <h2 className="mb-2 text-40 text-GraylishDarkBlue">
                        About Me
                    </h2>
                    <p className="text-justify text-base leading-7 text-GraylishDarkBlue">
                        I’m a junior front-end developer looking for a new role
                        in an exciting company. I focus on writing accessible
                        HTML, using modern CSS practices and writing clean
                        JavaScript. When writing JavaScript code, I mostly use
                        React, but I can adapt to whatever tools are required.
                        I’m based in London, UK, but I’m happy working remotely
                        and have experience in remote teams. When I’m not
                        coding, you’ll find me outdoors. I love being out in
                        nature whether that’s going for a walk, run or cycling.
                        I’d love you to check out my work.
                    </p>
                    <CustomLink href="/portfolio" aria-label="portfolio">
                        go to portfolio
                    </CustomLink>
                </div>
            </Wrapper>
        </section>
    );
};

export default About;
