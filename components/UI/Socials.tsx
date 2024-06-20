import Github from "@/public/assets/images/icons/github.svg";
import Twitter from "@/public/assets/images/icons/twitter.svg";
import Linkedin from "@/public/assets/images/icons/linkedin.svg";

const Socials = ({ isDark }: { isDark: boolean }) => {
    const linkClasses = `${isDark ? "text-GraylishDarkBlue dark:text-DarkText " : "text-White"} hover:text-Cyan dark:hover:text-Cyan active:scale-95 transition hover:-translate-y-[2px]`;
    const icoClasses = `transition`;

    return (
        <div className="flex items-center gap-4">
            <a
                href="https://github.com/Loniewski02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={linkClasses}
            >
                <Github className={icoClasses} />
            </a>
            <a
                href="https://twitter.com/Loniewski02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className={linkClasses}
            >
                <Twitter className={icoClasses} />
            </a>
            <a
                href="https://www.linkedin.com/in/mi%C5%82osz-jan-%C5%82oniewski-49803b227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={linkClasses}
            >
                <Linkedin className={icoClasses} />
            </a>
        </div>
    );
};

export default Socials;
