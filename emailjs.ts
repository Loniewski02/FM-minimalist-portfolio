import emailjs from "@emailjs/browser";

const emailjsConfig: any = {
    service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_TEMLATE_ID,
    user_id: process.env.NEXT_PUBLIC_USER_ID,
};

export const sendEmail = (name: string, email: string, message: string) => {
    emailjs
        .send(
            emailjsConfig.service_id,
            emailjsConfig.template_id,
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            emailjsConfig.user_id,
        )
        .then(
            function (response) {
                console.log(response);
                alert("The message was sent.");
            },
            function (error) {
                console.error(error);
                alert("Sorry, there was an error while sending the message.");
            },
        );
};
