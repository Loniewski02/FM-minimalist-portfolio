import { motion } from "framer-motion";
1;
import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

type Props = {
    item: { id: string; title: string; img: string; desc: string };
    index: number;
    reversed: boolean;
};

const ProjectSection: React.FC<Props> = ({ item, reversed, index }) => {
    return (
        <section className="sectionX">
            <Wrapper
                className={`flex flex-col items-center md:flex-row md:justify-center md:gap-14 lg:justify-start xl:gap-28 ${reversed && "lg:justify-end"}`}
            >
                <motion.img
                    initial={{ opacity: 0, x: reversed ? 50 : -50, y: 150 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    src={item.img}
                    alt=""
                    className={`mb-8 block w-full max-w-[311px] rounded-sm md:mb-0 md:max-w-[339px] lg:max-w-[540px] ${reversed && "md:order-2"}`}
                />
                <div
                    className={`lines flex max-w-96 flex-col justify-center gap-6 md:max-w-md lg:max-w-[350px] lg:self-stretch  ${reversed && "md:order-1"}`}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-2 text-40 text-GraylishDarkBlue">
                            {item.title}
                        </h2>
                        <p className="text-justify text-15 leading-7 text-GraylishDarkBlue">
                            {item.desc}
                        </p>
                        <CustomLink
                            onClick={() => {
                                sessionStorage.setItem(
                                    "curIndex",
                                    index.toString(),
                                );
                            }}
                            href={`/portfolio/${item.id}`}
                            aria-label="view project"
                        >
                            view project
                        </CustomLink>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default ProjectSection;
