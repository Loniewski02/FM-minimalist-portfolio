import GithubIco from "@/public/assets/images/icons/github.svg";
import TwitterIco from "@/public/assets/images/icons/twitter.svg";
import LinkedinIco from "@/public/assets/images/icons/linkedin.svg";

type Props = {
    isDark: boolean;
};

const Socials: React.FC<Props> = ({ isDark }) => {
    const linkClasses = `${isDark ? "text-GraylishDarkBlue" : "text-White"} hover:text-Cyan transition hover:-translate-y-[2px]`;
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
                <GithubIco className={icoClasses} />
            </a>
            <a
                href="https://twitter.com/Loniewski02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className={linkClasses}
            >
                <TwitterIco className={icoClasses} />
            </a>
            <a
                href="https://www.linkedin.com/in/mi%C5%82osz-jan-%C5%82oniewski-49803b227/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={linkClasses}
            >
                <LinkedinIco className={icoClasses} />
            </a>
        </div>
    );
};

export default Socials;
