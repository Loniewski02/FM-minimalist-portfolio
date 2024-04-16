import ContactSection from "../components/layout/ContactSection";
import ProjectSection from "./components/ProjectSection";

import manage from "@/public/assets/images/portfolio/desktop/image-portfolio-manage.jpg";
import insure from "@/public/assets/images/portfolio/desktop/image-portfolio-insure.jpg";
import bookmark from "@/public/assets/images/portfolio/desktop/image-portfolio-bookmark.jpg";

const DUMMY_DATA = [
    {
        title: "Manage",
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
        img: manage.src,
    },
    {
        title: "Bookmark",
        desc: "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
        img: bookmark.src,
    },
    {
        title: "Insure",
        desc: "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
        img: insure.src,
    },
];

const Portfolio = () => {
    return (
        <main>
            <section className="sectionY flex flex-col gap-[72px]">
                {DUMMY_DATA.map((item, index) => (
                    <ProjectSection
                        key={item.title}
                        title={item.title}
                        desc={item.desc}
                        reversed={index % 2 != 0}
                        image={item.img}
                    />
                ))}
            </section>
            <ContactSection />
        </main>
    );
};

export default Portfolio;
