"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import CustomLink from "@/components/UI/CustomLink";
import Wrapper from "@/components/layout/Wrapper";

const ProjectItem = ({
    item,
    reversed,
    index,
}: {
    index: number;
    reversed: boolean;
    item: Project;
}) => {
    return (
        <article className="sectionX">
            <Wrapper
                className={`flex h-full flex-col items-center md:max-h-[250px] md:flex-row md:justify-center md:gap-14 lg:max-h-[none] lg:justify-start xl:gap-28 ${reversed && "lg:justify-end"}`}
            >
                <motion.div
                    initial={{ opacity: 0, x: reversed ? 50 : -50, y: 150 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    className={`${reversed && "md:order-2"} relative mb-8 grid place-items-center bg-LightGrey md:mb-0 md:self-stretch`}
                >
                    <Image
                        width={540}
                        height={405}
                        src={item.desktopPreview}
                        alt=""
                        priority
                        className="block w-full max-w-96 rounded-sm md:max-w-[339px] lg:max-w-[540px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 hidden bg-[rgba(0,0,0,0.2)] dark:block" />
                </motion.div>
                <div
                    className={`lines w-full max-w-96 md:w-auto md:max-w-md md:self-stretch lg:w-full lg:max-w-[370px]  ${reversed && "md:order-1"}`}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex h-full flex-col justify-center gap-6"
                    >
                        <h3 className="mb-2 text-40 text-GraylishDarkBlue dark:text-White">
                            {item.title}
                        </h3>
                        <p className="dark:text-DarkText text-justify text-15 leading-7 text-GraylishDarkBlue">
                            {item.desc}
                        </p>
                        <CustomLink
                            onClick={() => {
                                sessionStorage.setItem(
                                    "curIndex",
                                    index.toString(),
                                );
                            }}
                            href={`/portfolio/${item._id}`}
                            aria-label="view project"
                        >
                            view project
                        </CustomLink>
                    </motion.div>
                </div>
            </Wrapper>
        </article>
    );
};

export default ProjectItem;
