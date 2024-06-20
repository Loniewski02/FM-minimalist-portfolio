import { fetchAllProjects } from "@/utils/request";

import ContactSection from "@/components/layout/ContactSection";
import ProjectItem from "@/components/portfolio/ProjectItem";

const Portfolio = async () => {
    const projects: Project[] | [] = await fetchAllProjects();

    return (
        <>
            <section className="sectionY flex flex-col gap-[72px]">
                <h2 className="sr-only">Checkout my work</h2>
                {projects.map((item, index) => (
                    <ProjectItem
                        key={item._id}
                        item={item}
                        reversed={index % 2 != 0}
                        index={index}
                    />
                ))}
            </section>
            <ContactSection />
        </>
    );
};

export default Portfolio;
