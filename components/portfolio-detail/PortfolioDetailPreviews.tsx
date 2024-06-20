import Image from "next/image";

const PortfolioDetailPreviews = ({
    mobilePreviewImg,
    desktopPreviewImg,
    desktopFull,
    mobileFull,
}: {
    mobilePreviewImg: string;
    desktopPreviewImg: string;
    desktopFull: string;
    mobileFull: string;
}) => {
    return (
        <article className="mb-12 pt-6">
            <h2 className="mb-7 text-32 font-normal tracking-[-.3px] text-GraylishDarkBlue dark:text-White">
                Static Previews
            </h2>
            <div className="flex flex-col gap-8">
                <Image
                    width={635}
                    height={430}
                    src={desktopPreviewImg}
                    alt=""
                    className="max-h-[430px] w-auto cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
                <Image
                    width={635}
                    height={430}
                    src={mobilePreviewImg}
                    alt=""
                    className="max-h-[430px] w-auto cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
            </div>
        </article>
    );
};

export default PortfolioDetailPreviews;
