const BackBtn = () => {
    return (
        <a
            href="#"
            className="fixed bottom-4 right-4 block h-8 w-8 rounded-full border-[2px] border-Cyan md:bottom-6 md:right-0"
            aria-label="back to the top"
        >
            <span className="absolute right-1/2 top-1/2 block h-[2px] w-3 -translate-y-1/2 translate-x-[2px] -rotate-45 bg-Cyan" />
            <span className="absolute left-1/2 top-1/2 block h-[2px] w-3 -translate-x-[2px] -translate-y-1/2 rotate-45 bg-Cyan" />
        </a>
    );
};

export default BackBtn;
