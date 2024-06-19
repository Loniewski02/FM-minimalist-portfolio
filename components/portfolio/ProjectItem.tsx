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
                className={`flex flex-col items-center md:flex-row md:justify-center md:gap-14 lg:justify-start xl:gap-28 ${reversed && "lg:justify-end"}`}
            >
                <motion.div
                    initial={{ opacity: 0, x: reversed ? 50 : -50, y: 150 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    className={`${reversed && "md:order-2"}`}
                >
                    <Image
                        width={540}
                        height={405}
                        src={item.desktopPreview}
                        alt=""
                        priority
                        className="mb-8 block w-auto max-w-[311px] rounded-sm md:mb-0 md:max-w-[339px] lg:max-w-[540px]"
                    />
                </motion.div>
                <div
                    className={`lines max-w-96 md:max-w-md lg:max-w-[350px] lg:self-stretch  ${reversed && "md:order-1"}`}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex h-full flex-col justify-center gap-6"
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
