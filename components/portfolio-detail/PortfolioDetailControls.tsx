import Link from "next/link";
import { fetchAllProjects } from "@/utils/request";

import Wrapper from "@/components/layout/Wrapper";
import ArrowLeft from "@/public/assets/images/icons/arrow-left.svg";
import ArrowRight from "@/public/assets/images/icons/arrow-right.svg";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const PortfolioDetailControls = () => {
    const [projects, setProjects] = useState<Project[] | []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllProjects();
                setProjects(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (projects.length === 0) fetchData();
    }, []);

    //THINGS ARE GOING TO CHANGE AROUND HERE

    const index = Number(sessionStorage.getItem("curIndex")) || 0;

    const prevIndex = Math.max(index - 1, 0);
    const nextIndex = Math.min(index + 1, projects.length - 1);

    const prevProject = projects[prevIndex];
    const nextProject = projects[nextIndex];

    const prevPath = prevProject ? prevProject._id : "";
    const nextPath = nextProject ? nextProject._id : "";

    const indexHandler = (number: number) => {
        sessionStorage.setItem("curIndex", number.toString());
    };

    let content;
    if (loading) {
        content = <LoadingSpinner loading={loading} />;
    }
    if (!loading && projects.length === 0) {
        content = <p>Error</p>;
    }
    if (!loading && projects.length > 0) {
        content = (
            <section className="sectionX">
                <Wrapper className="flex border-b border-t border-LightGrey">
                    <Link
                        href={`/portfolio/${prevPath}`}
                        onClick={() => indexHandler(prevIndex)}
                        className={`${prevIndex === 0 && index === 0 && "cursor-default opacity-0"} flex w-1/2 flex-col items-start gap-4 px-2 py-6 text-left text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue hover:text-White md:flex-row md:items-center md:justify-start md:gap-8`}
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
                    <div className="block min-h-full w-px bg-LightGrey" />
                    <Link
                        href={`/portfolio/${nextPath}`}
                        onClick={() => indexHandler(nextIndex)}
                        className={`${nextIndex === projects.length - 1 && index === projects.length - 1 && "cursor-default opacity-0"} flex w-1/2 flex-col items-end gap-4 px-2 py-6 text-right text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue hover:text-White md:flex-row md:items-center md:justify-end md:gap-8`}
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
                </Wrapper>
            </section>
        );
    }

    return content;
};

export default PortfolioDetailControls;
