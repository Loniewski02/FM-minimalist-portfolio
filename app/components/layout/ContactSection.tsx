"use client";
import { motion } from "framer-motion";
import CustomLink from "@/app/components/UI/CustomLink";
import Wrapper from "@/app/components/layout/Wrapper";

const ContactSection = () => {
    return (
        <section className="sectionX sectionY sectionLastB">
            <Wrapper className="flex h-full flex-col items-center justify-between text-center md:flex-row md:gap-8 md:text-left ">
                <motion.h2
                    initial={{ x: -100, y: 100 }}
                    whileInView={{ x: 0, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 text-40 text-GraylishDarkBlue md:mb-0 md:min-w-[350px]"
                >
                    Interested in doing a project together?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="hidden h-px w-full bg-LightGrey md:block"
                />
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
