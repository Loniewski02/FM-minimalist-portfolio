import Socials from "../UI/Socials";
import Wrapper from "../layout/Wrapper";

const ContactInfo = () => {
    return (
        <section className="sectionX pb-4 pt-12 lg:pb-6">
            <Wrapper className="lines flex flex-col justify-center gap-6 lg:flex-row lg:justify-between">
                <h2 className="mb-2 text-40 text-GraylishDarkBlue dark:text-White">
                    Get in Touch
                </h2>
                <div>
                    <p className="dark:text-DarkText mb-6 max-w-[635px] text-justify text-base leading-7 text-GraylishDarkBlue">
                        I’d love to hear about what you’re working on and how I
                        could help. I’m currently looking for a new role and am
                        open to a wide range of opportunities. My preference
                        would be to find a position in a company in Warsaw. But
                        I’m also happy to hear about opportunites that don’t fit
                        that description. I’m a hard-working and positive person
                        who will always approach each task with a sense of
                        purpose and attention to detail. Please do feel free to
                        check out my online profiles below and get in touch
                        using the form.
                    </p>
                    <Socials isDark={true} />
                </div>
            </Wrapper>
        </section>
    );
};

export default ContactInfo;
