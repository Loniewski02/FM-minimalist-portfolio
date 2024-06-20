"use client";
import CustomLink from "@/components/UI/CustomLink";
import Wrapper from "@/components/layout/Wrapper";

const ContactSection = () => {
    return (
        <section className="sectionX sectionY sectionLastB">
            <Wrapper className="flex h-full flex-col items-center justify-between text-center md:flex-row md:gap-8 md:text-left ">
                <h2 className="mb-10 text-40 text-GraylishDarkBlue md:mb-0 md:min-w-[350px] dark:text-White">
                    Interested in doing a project together?
                </h2>
                <div className="hidden h-px w-full bg-LightGrey md:block" />
                <CustomLink
                    href="/contact"
                    ariaLabel="contact"
                    className="min-w-max "
                >
                    contact me
                </CustomLink>
            </Wrapper>
        </section>
    );
};

export default ContactSection;
