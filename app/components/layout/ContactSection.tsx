import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

const ContactSection = () => {
    return (
        <section className="sectionX sectionY sectionLastB">
            <Wrapper className="h-full justify-between text-center md:flex md:items-center md:gap-8 md:text-left">
                <h2 className="mb-10 text-40 text-GraylishDarkBlue md:mb-0 md:min-w-[350px]">
                    Interested in doing a project together?
                </h2>
                <div className="hidden h-px w-full bg-LightGrey md:block" />
                <CustomLink
                    href="/contact"
                    ariaLabel="contact"
                    className="min-w-max"
                >
                    contact me
                </CustomLink>
            </Wrapper>
        </section>
    );
};

export default ContactSection;
