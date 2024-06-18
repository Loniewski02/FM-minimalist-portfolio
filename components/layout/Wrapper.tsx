const Wrapper = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={`mx-auto my-0 w-full max-w-[1111px] ${className && className}`}
        >
            {children}
        </div>
    );
};

export default Wrapper;
