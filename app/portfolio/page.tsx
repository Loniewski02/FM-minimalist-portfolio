"use client";
import { useEffect } from "react";
import { fetchData } from "../store/portfolio-actions";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";

import ProjectSection from "./components/ProjectSection";
import ContactSection from "../components/layout/ContactSection";

const Portfolio = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchData());
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
        </main>
    );
};

export default Portfolio;
