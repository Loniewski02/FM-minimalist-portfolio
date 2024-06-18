import CustomLink from "@/components/UI/CustomLink";

const PortfolioDetailHeading = ({
    title,
    desc,
    liveUrl,
    codeUrl,
    hash,
    tech,
}: {
    title: string;
    desc: string;
    liveUrl: string;
    codeUrl: string;
    tech: string[];
    hash: string[];
}) => {
    return (
        <article className="lines max-h-max md:grid md:grid-cols-[1fr,1fr] lg:block">
            <h2 className="mb-6 grid text-40 text-GraylishDarkBlue first-letter:uppercase md:m-0 lg:mb-8">
                {title}
            </h2>
            <p className="col-start-2 col-end-3 row-start-1 row-end-3 mb-14 max-w-[400px] text-justify text-15 text-GraylishDarkBlue md:m-0 lg:mb-6 lg:max-w-[350px]">
                {desc}
            </p>
            <div className="mb-6 text-13 font-bold text-Cyan md:m-0 lg:mb-8 lg:flex lg:flex-col lg:gap-4 lg:text-base lg:leading-8">
                <p>{hash.join(" / ")}</p>
                <p>{tech.join(" / ")}</p>
            </div>
            <div className="flex w-max flex-col gap-4">
                <CustomLink href={liveUrl} blank={true} className="min-w-full">
                    visit website
                </CustomLink>
                <CustomLink
                    href={codeUrl}
                    blank={true}
                    className="min-w-full"
                    isDark={true}
                >
                    check code
                </CustomLink>
            </div>
        </article>
    );
};

export default PortfolioDetailHeading;
