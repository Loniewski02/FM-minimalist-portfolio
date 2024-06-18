import { fetchAllProjects } from "@/utils/request";

import ContactSection from "@/components/layout/ContactSection";
import ProjectItem from "@/components/portfolio/ProjectItem";
import PortfolioDetailControls from "@/components/portfolio-detail/PortfolioDetailControls";

const Portfolio = async () => {
    const projects: Project[] | [] = await fetchAllProjects();

    return (
        <>
            <section className="sectionY flex flex-col gap-[72px]">
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
