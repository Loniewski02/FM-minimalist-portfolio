import { useState } from "react";

const useInput = (inpValidity: (value: string) => boolean) => {
    const [enteredValue, setEnteredValue] = useState<string>("");
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState("");

    const isValid = inpValidity(enteredValue);
    const hasError = isTouched && !isValid;

    const inputValueHandler = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const value = event.target.value;
        setEnteredValue(value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
        if (enteredValue === "") {
            setErrorMsg("Can't be blank");
        } else if (!inpValidity(enteredValue)) {
            setErrorMsg("Please check again");
        }
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        enteredValue,
        isValid,
        hasError,
        inputBlurHandler,
        inputValueHandler,
        reset,
        errorMsg,
    };
};

export default useInput;
