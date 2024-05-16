import { useAppDispatch } from "@/app/hooks/hooks";
import { portfolioActions } from "@/app/store/portfolio-slice";

type Props = {
    mobilePreviewImg: string;
    desktopPreviewImg: string;
    desktopFull: string;
    mobileFull: string;
};

const PortfolioDetailPreviews: React.FC<Props> = ({
    mobilePreviewImg,
    desktopPreviewImg,
    desktopFull,
    mobileFull,
}) => {
    const dispatch = useAppDispatch();

    const previewImgHandler = (src: string) => {
        dispatch(portfolioActions.showModal(src));
    };

    return (
        <div className="mb-12 pt-6">
            <h2 className="mb-7 text-32 font-normal tracking-[-.3px] text-GraylishDarkBlue">
                Static Previews
            </h2>
            <div className="flex flex-col gap-8">
                <img
                    onClick={previewImgHandler.bind(null, desktopFull)}
                    src={desktopPreviewImg}
                    alt=""
                    className="max-h-[430px] cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
                <img
                    onClick={previewImgHandler.bind(null, mobileFull)}
                    src={mobilePreviewImg}
                    alt=""
                    className="max-h-[430px] cursor-pointer object-cover transition active:scale-95 lg:max-h-[400px] lg:max-w-[635px]"
                />
            </div>
        </div>
    );
};

export default PortfolioDetailPreviews;
