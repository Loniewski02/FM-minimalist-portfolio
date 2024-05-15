import Wrapper from "@/app/components/layout/Wrapper";
import { useAppSelector } from "@/app/hooks/hooks";
import ArrowLeft from "@/public/assets/images/icons/arrow-left.svg";
import ArrowRight from "@/public/assets/images/icons/arrow-right.svg";
import Link from "next/link";

const PortfolioDetailControls = () => {
    //THINGS ARE GOING TO CHANGE AROUND HERE

    const index = Number(sessionStorage.getItem("curIndex")) || 0;
    const projects = useAppSelector((state) => state.portfolio.projects) || [];

    const prevIndex = Math.max(index - 1, 0);
    const nextIndex = Math.min(index + 1, projects.length - 1);

    const prevProject = projects[prevIndex];
    const nextProject = projects[nextIndex];

    const prevPath = prevProject
        ? prevProject.title.toLowerCase().split(" ").join("-")
        : "";
    const nextPath = nextProject
        ? nextProject.title.toLowerCase().split(" ").join("-")
        : "";

    const indexHandler = (number: number) => {
        sessionStorage.setItem("curIndex", number.toString());
    };

    return (
        <section className="sectionX">
            <Wrapper className="flex border-b border-t border-LightGrey">
                {prevProject && (
                    <Link
                        href={`/portfolio/${prevPath}`}
                        onClick={() => indexHandler(prevIndex)}
                        className="flex w-1/2 flex-col items-start gap-4 px-2 py-6 text-left text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue hover:text-White md:flex-row md:items-center md:justify-start md:gap-8"
                    >
                        <ArrowLeft />
                        <span>
                            <h3 className="mb-1 text-32 font-normal">
                                {prevProject.title}
                            </h3>
                            <span className="text-base opacity-65">
                                Previous Project
                            </span>
                        </span>
                    </Link>
                )}
                <div className="block min-h-full w-px bg-LightGrey" />
                {nextProject && (
                    <Link
                        href={`/portfolio/${nextPath}`}
                        onClick={() => indexHandler(nextIndex)}
                        className="flex w-1/2 flex-col items-end gap-4 px-2 py-6 text-right text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue hover:text-White md:flex-row md:items-center md:justify-end md:gap-8"
                    >
                        <ArrowRight className="order-2" />
                        <span>
                            <h3 className="mb-1 text-32 font-normal">
                                {nextProject.title}
                            </h3>
                            <span className="text-base opacity-65">
                                Next Project
                            </span>
                        </span>
                    </Link>
                )}
            </Wrapper>
        </section>
    );
};

export default PortfolioDetailControls;
