import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

type Props = {
    title: string;
    desc: string;
    reversed: boolean;
    image: string;
};

const ProjectSection: React.FC<Props> = ({ title, desc, image, reversed }) => {
    return (
        <section className="sectionX">
            <Wrapper
                className={`flex flex-col items-center md:flex-row md:gap-14 xl:gap-28 ${reversed && "lg:justify-end"}`}
            >
                <img
                    src={image}
                    alt=""
                    className={`mb-8 block h-auto w-full max-w-[311px] md:max-w-[339px] lg:max-w-[540px] ${reversed && "lg:order-2"}`}
                />
                <div
                    className={`lines flex max-w-96 flex-col justify-center gap-6 md:min-h-[418px] md:max-w-md lg:max-w-[350px] lg:self-stretch xl:min-h-max ${reversed && "lg:order-1"}`}
                >
                    <h2 className="mb-2 text-40 text-GraylishDarkBlue">
                        {title}
                    </h2>
                    <p className="text-15 text-justify leading-7 text-GraylishDarkBlue">
                        {desc}
                    </p>
                    <CustomLink
                        href={`/portfolio/${title.toLowerCase()}`}
                        aria-label="view project"
                    >
                        view project
                    </CustomLink>
                </div>
            </Wrapper>
        </section>
    );
};

export default ProjectSection;
