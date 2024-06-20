"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { fetchProject } from "@/utils/request";

import Wrapper from "@/components/layout/Wrapper";
import ContactSection from "@/components/layout/ContactSection";
import PortfolioDetailHeader from "@/components/portfolio-detail/PortfolioDetailHeader";
import PortfolioDetailHeading from "@/components/portfolio-detail/PortfolioDetailHeading";
import PortfolioDetailBackground from "@/components/portfolio-detail/PortfolioDetailBackground";
import PortfolioDetailPreviews from "@/components/portfolio-detail/PortfolioDetailPreviews";
import PortfolioDetailControls from "@/components/portfolio-detail/PortfolioDetailControls";
import LoadingSpinner from "@/components/UI/LoadingSpinner";

const PortfolioItem = () => {
    const { id }: { id: string } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProject(id);
                setProject(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (!project) fetchData();
    }, [project, id]);

    let content;

    if (loading) {
        content = (
            <div className="mt-[100px]">
                <LoadingSpinner loading={loading} />
            </div>
        );
    }
    if (!loading && !project) {
        content = <p>Error</p>;
    }
    if (!loading && project) {
        content = (
            <>
                <PortfolioDetailHeader
                    heroImg={project.desktopFull}
                    liveUrl={project.liveUrl}
                />
                <section className="sectionX">
                    <Wrapper className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                        <PortfolioDetailHeading
                            title={project.title}
                            desc={project.desc}
                            codeUrl={project.codeUrl}
                            liveUrl={project.liveUrl}
                            hash={project.hash}
                            tech={project.tech}
                        />
                        <div className="lg:w-[60%]">
                            <PortfolioDetailBackground />
                            <PortfolioDetailPreviews
                                desktopFull={project.desktopFull}
                                mobileFull={project.mobileFull}
                                mobilePreviewImg={project.mobilePreview}
                                desktopPreviewImg={project.desktopPreview}
                            />
                        </div>
                    </Wrapper>
                </section>
                <PortfolioDetailControls />
                <ContactSection />
            </>
        );
    }
    return content;
};

export default PortfolioItem;
