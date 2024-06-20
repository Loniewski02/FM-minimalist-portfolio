import { motion, AnimatePresence } from "framer-motion";

const FormBox = ({
    id,
    type,
    label,
    placeholder,
    isMsg,
    onInputChange,
    onInputBlur,
    enteredValue,
    isError,
    errorMsg,
}: {
    id: string;
    type?: string;
    label: string;
    placeholder: string;
    isMsg?: boolean;
    onInputChange: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
    onInputBlur: () => void;
    enteredValue: string;
    isError: boolean;
    errorMsg: string;
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="dark:text-DarkText text-13 font-bold text-GraylishDarkBlue"
            >
                {label}
            </label>
            {!isMsg ? (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    value={enteredValue}
                    className={`${isError && "border-Red text-Red"} dark:text-DarkText border border-transparent bg-LightGrey px-4 py-2 text-13 text-GraylishDarkBlue transition dark:bg-GraylishDarkBlue`}
                />
            ) : (
                <textarea
                    className={`${isError && "border-Red text-Red"} dark:text-DarkText min-h-24 border border-transparent bg-LightGrey px-4 py-2 text-13 text-GraylishDarkBlue transition dark:bg-GraylishDarkBlue`}
                    placeholder="How can I help?"
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    value={enteredValue}
                />
            )}
            <AnimatePresence>
                {isError && (
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, z: -50 }}
                        className="text-[12px] italic text-Red"
                    >
                        {errorMsg}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormBox;
