type Props = {
    children: React.ReactNode;
    href: string;
    ariaLabel?: string;
    target?: string;
    rel?: string;
    className?: string;
};

const CustomLink: React.FC<Props> = ({
    href,
    target,
    rel,
    ariaLabel,
    className,
    children,
}) => {
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            aria-label={ariaLabel}
            className={`hover:text-White w-max border border-GraylishDarkBlue px-8 py-4 text-xs uppercase tracking-[2px] text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue active:scale-105 ${className && className}`}
        >
            {children}
        </a>
    );
};

export default CustomLink;
