import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
    ariaLabel?: string;
    className?: string;
};

const CustomLink: React.FC<Props> = ({
    href,
    ariaLabel,
    className,
    children,
}) => {
    return (
        <Link
            href={href}
            aria-label={ariaLabel}
            className={`block w-max border border-GraylishDarkBlue px-8 py-4 text-xs uppercase tracking-[2px] text-GraylishDarkBlue transition hover:bg-GraylishDarkBlue hover:text-White active:scale-95 ${className}`}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
