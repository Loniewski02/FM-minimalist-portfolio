"use client";
import { usePathname } from "next/navigation";
import useSWR from "swr";

import Wrapper from "@/app/components/layout/Wrapper";
import ContactSection from "@/app/components/layout/ContactSection";
import PortfolioDetailControls from "./components/PortfolioDetailControls";
import PortfolioDetailHeader from "./components/PortfolioDetailHeader";
import PortfolioDetailHeading from "./components/PortfolioDetailHeading";
import PortfolioDetailBackground from "./components/PortfolioDetailBackground";
import PortfolioDetailPreviews from "./components/PortfolioDetailPreviews";
import LoadingSpinner from "@/app/components/UI/LoadingSpinner";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const PortfolioItem = () => {
    const pathname = usePathname();
    const projectID = pathname.split("/")[2];
    const { data, error, isLoading } = useSWR(
        `https://portfoliov2-b0eed-default-rtdb.firebaseio.com/detailData/${projectID}.json`,
        fetcher,
    );

    return (
        <main className="min-h-[100dvh]">
            {isLoading && <LoadingSpinner />}
            {error && (
                <Wrapper className="sectionX flex h-[150px] items-center">
                    <p>Error: {error.message}</p>
                </Wrapper>
            )}
            {data && (
                <>
                    <PortfolioDetailHeader
                        heroImg={data.heroImg}
                        liveUrl={data.liveUrl}
                    />
                    <section className="sectionX">
                        <Wrapper className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                            <PortfolioDetailHeading
                                title={data.title}
                                desc={data.desc}
                                codeUrl={data.codeUrl}
                                liveUrl={data.liveUrl}
                                hash={data.hash}
                                tech={data.tech}
                            />
                            <div className="lg:w-[60%]">
                                <PortfolioDetailBackground />
                                <PortfolioDetailPreviews
                                    mobilePreviewImg={data.mobilePreview}
                                    desktopPreviewImg={data.desktopPreview}
                                />
                            </div>
                        </Wrapper>
                    </section>
                    <PortfolioDetailControls />
                    <ContactSection />
                </>
            )}
        </main>
    );
};

export default PortfolioItem;
