import { projectBackground } from "@/utils/constant";

const PortfolioDetailBackground = () => {
    return (
        <article className="mb-6 pt-12 lg:pt-0">
            <h2 className="mb-7 text-32 font-normal tracking-[-.3px] text-GraylishDarkBlue dark:text-White">
                Project Background
            </h2>
            <p className="dark:text-DarkText max-w-2xl text-15 text-GraylishDarkBlue">
                {projectBackground.frontendMentor}
            </p>
        </article>
    );
};

export default PortfolioDetailBackground;
