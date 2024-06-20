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
            className={`block w-max border border-GraylishDarkBlue px-8 py-4 text-center text-xs uppercase tracking-[2px] transition active:scale-95  dark:border-LightGrey ${className} ${isDark ? "dark:hover:bg-Test dark:hover:text-DarkText bg-GraylishDarkBlue text-White hover:bg-White hover:text-GraylishDarkBlue dark:bg-LightGrey dark:text-GraylishDarkBlue" : "dark:text-DarkText text-GraylishDarkBlue hover:bg-GraylishDarkBlue hover:text-White dark:hover:bg-LightGrey dark:hover:text-GraylishDarkBlue"}`}
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
                className={`block w-max border border-GraylishDarkBlue px-8 py-4 text-center text-xs uppercase tracking-[2px] transition  active:scale-95 ${className} ${isDark ? "dark:hover:bg-Test dark:hover:text-DarkText bg-GraylishDarkBlue text-White hover:bg-White hover:text-GraylishDarkBlue dark:bg-LightGrey dark:text-GraylishDarkBlue" : "dark:text-DarkText text-GraylishDarkBlue hover:bg-GraylishDarkBlue hover:text-White dark:hover:bg-LightGrey dark:hover:text-GraylishDarkBlue"}`}
            >
                {children}
            </a>
        );
    }

    return content;
};

export default CustomLink;
