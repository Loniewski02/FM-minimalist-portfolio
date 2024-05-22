"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../store/portfolio-actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import ProjectSection from "./components/ProjectSection";
import ContactSection from "../components/layout/ContactSection";
import BackBtn from "../components/UI/BackBtn";

const Portfolio = () => {
    const [isBackBtnShown, setIsBackBtnShown] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    useEffect(() => {
        const checkOffset = () => {
            window.scrollY > 500
                ? setIsBackBtnShown(true)
                : setIsBackBtnShown(false);
        };

        window.addEventListener("scroll", checkOffset);

        return () => {
            window.removeEventListener("scroll", checkOffset);
        };
    }, []);

    const projects = useAppSelector((state) => state.portfolio.projects);

    return (
        <main className="min-h-[100dvh]">
            <section className="sectionY flex flex-col gap-[72px]">
                {projects.map((item, index) => (
                    <ProjectSection
                        key={item.id}
                        item={item}
                        reversed={index % 2 != 0}
                        index={index}
                    />
                ))}
            </section>
            <ContactSection />
            {isBackBtnShown && <BackBtn />}
        </main>
    );
};

export default Portfolio;
