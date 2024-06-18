import Link from "next/link";

const CustomLink = ({
    href,
    ariaLabel,
    className,
    children,
    onClick,
    isDark,
    blank,
}: {
    children: React.ReactNode;
    href: string;
    ariaLabel?: string;
    className?: string;
    onClick?: () => void;
    isDark?: boolean;
    blank?: boolean;
}) => {
    let content = (
        <Link
            onClick={onClick}
            href={href}
            aria-label={ariaLabel}
            className={`block w-max border border-GraylishDarkBlue px-8 py-4 text-center text-xs uppercase tracking-[2px] transition  active:scale-95 ${className} ${isDark ? "bg-GraylishDarkBlue text-White hover:bg-White hover:text-GraylishDarkBlue" : " text-GraylishDarkBlue hover:bg-GraylishDarkBlue hover:text-White"}`}
        >
            {children}
        </Link>
    );

    if (blank) {
        content = (
            <a
                onClick={onClick}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className={`block w-max border border-GraylishDarkBlue px-8 py-4 text-center text-xs uppercase tracking-[2px] transition  active:scale-95 ${className} ${isDark ? "bg-GraylishDarkBlue text-White hover:bg-White hover:text-GraylishDarkBlue" : " text-GraylishDarkBlue hover:bg-GraylishDarkBlue hover:text-White"}`}
            >
                {children}
            </a>
        );
    }

    return content;
};

export default CustomLink;
