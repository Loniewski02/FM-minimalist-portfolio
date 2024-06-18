import { motion } from "framer-motion";

const barClasses = "block w-full h-[1px] bg-GraylishDarkBlue absolute left-0";

const BurgerBtn = ({
    onClick,
    isShown,
}: {
    onClick: () => void;
    isShown: boolean;
}) => {
    return (
        <button
            aria-label="menu button"
            onClick={onClick}
            className="p-2 md:hidden"
        >
            <span className="relative block h-[13px] w-6 ">
                <motion.span
                    animate={{
                        y: isShown ? 6 : 0,
                        rotate: isShown ? 45 : 0,
                    }}
                    className={`${barClasses} top-0`}
                />
                <motion.span
                    animate={{ opacity: isShown ? 0 : 1 }}
                    className={`${barClasses} top-1/2 -translate-y-1/2 transform`}
                />
                <motion.span
                    animate={{
                        y: isShown ? -6 : 0,
                        rotate: isShown ? -45 : 0,
                    }}
                    className={`${barClasses} bottom-0`}
                />
            </span>
        </button>
    );
};

export default BurgerBtn;
