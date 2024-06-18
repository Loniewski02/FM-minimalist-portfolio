import Wrapper from "@/components/layout/Wrapper";

const PortfolioDetailHeader = ({
    heroImg,
    liveUrl,
}: {
    heroImg: string;
    liveUrl: string;
}) => {
    return (
        <header className="sectionX">
            <Wrapper>
                <img
                    src={heroImg}
                    alt=""
                    className="mb-10 block max-h-[150px] w-full object-cover object-top shadow-sm md:max-h-[310px] lg:max-h-[500px] xl:hidden"
                />
                <iframe
                    src={liveUrl}
                    className="mb-10 hidden  h-[520px] w-full rounded-md shadow-md xl:block"
                />
            </Wrapper>
        </header>
    );
};

export default PortfolioDetailHeader;
