"use client";
import { motion } from "framer-motion";
import useInput from "@/app/hooks/use-input";

import Wrapper from "@/app/components/layout/Wrapper";
import FormBox from "./FormBox";
import { sendEmail } from "@/emailjs";
import { useState } from "react";

const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm = () => {
    const {
        enteredValue: enteredName,
        inputValueHandler: nameValueHandler,
        inputBlurHandler: nameBlurHandler,
        hasError: nameHasError,
        isValid: nameIsValid,
        errorMsg: nameError,
        reset: nameReset,
    } = useInput((value) => value.trim().length > 1);

    const {
        enteredValue: enteredEmail,
        inputValueHandler: emailValueHandler,
        inputBlurHandler: emailBlurHandler,
        hasError: emailHasError,
        isValid: emailIsValid,
        errorMsg: emailError,
        reset: emailReset,
    } = useInput((value) => reg.test(value));

    const {
        enteredValue: enteredMsg,
        inputValueHandler: msgValueHandler,
        inputBlurHandler: msgBlurHandler,
        hasError: msgHasError,
        isValid: msgIsValid,
        errorMsg: msgError,
        reset: msgReset,
    } = useInput((value) => value.trim().length > 12);

    const formSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        emailBlurHandler();
        nameBlurHandler();
        msgBlurHandler();
        if (!emailIsValid || !nameIsValid || !msgIsValid) {
            return;
        }

        sendEmail(enteredName, enteredEmail, enteredMsg);
        nameReset();
        emailReset();
        msgReset();

        console.log("fetching...");
    };

    return (
        <motion.section layout className="sectionX  sectionLastB pt-4 lg:pt-6">
            <Wrapper className="lg:flex lg:justify-between">
                <h2 className="mb-8 text-40 text-GraylishDarkBlue">
                    Contact Me
                </h2>
                <motion.form
                    layout
                    className="flex w-full max-w-[635px] flex-col gap-6"
                >
                    <FormBox
                        id="name"
                        type="text"
                        placeholder="Jane Appleseed"
                        label="Name"
                        enteredValue={enteredName}
                        onInputChange={nameValueHandler}
                        onInputBlur={nameBlurHandler}
                        isError={nameHasError}
                        errorMsg={nameError}
                    />
                    <FormBox
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        label="Email Address"
                        enteredValue={enteredEmail}
                        onInputChange={emailValueHandler}
                        onInputBlur={emailBlurHandler}
                        isError={emailHasError}
                        errorMsg={emailError}
                    />
                    <FormBox
                        id="msg"
                        placeholder="How can I help?"
                        label="Message"
                        isMsg={true}
                        enteredValue={enteredMsg}
                        onInputChange={msgValueHandler}
                        onInputBlur={msgBlurHandler}
                        isError={msgHasError}
                        errorMsg={msgError}
                    />
                    <button
                        type="submit"
                        className="w-max bg-DarkBlue px-10 py-4 text-xs uppercase tracking-[2px] text-White transition hover:bg-Cyan active:scale-95"
                        onClick={formSubmitHandler}
                    >
                        send Message
                    </button>
                </motion.form>
            </Wrapper>
        </motion.section>
    );
};

export default ContactForm;
