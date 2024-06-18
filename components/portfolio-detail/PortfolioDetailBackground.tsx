import { projectBackground } from "@/utils/constant";

const PortfolioDetailBackground = () => {
    return (
        <article className="mb-6 pt-12 lg:pt-0">
            <h2 className="mb-7 text-32 font-normal tracking-[-.3px] text-GraylishDarkBlue">
                Project Background
            </h2>
            <p className="max-w-2xl text-15 text-GraylishDarkBlue">
                {projectBackground.frontendMentor}
            </p>
        </article>
    );
};

export default PortfolioDetailBackground;
