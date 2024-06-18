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
            <h2 className="mb-7 text-32 font-normal tracking-[-.3px] text-GraylishDarkBlue">
                Static Previews
            </h2>
            <div className="flex flex-col gap-8">
                <img
                    src={desktopPreviewImg}
                    alt=""
                    className="max-h-[430px] cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
                <img
                    src={mobilePreviewImg}
                    alt=""
                    className="max-h-[430px] cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
            </div>
        </article>
    );
};

export default PortfolioDetailPreviews;
