type Props = {
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
};

const FormBox: React.FC<Props> = ({
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
}) => {
    
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={id}
                className="text-13 font-bold text-GraylishDarkBlue"
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
                    className={`${isError && "border border-Red text-Red"} border bg-LightGrey px-4 py-2 text-13 text-GraylishDarkBlue`}
                />
            ) : (
                <textarea
                    className={`${isError && "border border-Red text-Red"} min-h-24 border bg-LightGrey px-4 py-2 text-13 text-GraylishDarkBlue`}
                    placeholder="How can I help?"
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    value={enteredValue}
                />
            )}
            {isError && (
                <p className="text-[12px] italic text-Red">{errorMsg}</p>
            )}
        </div>
    );
};

export default FormBox;
