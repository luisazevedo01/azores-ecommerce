import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import SuccessMessage from "../../Organisms/SuccessMessage/SuccessMessage";

import "./ContactPage.styles.scss";

const Contact = (): JSX.Element => {
  const [isFormSent, setIsFormSent] = useState<boolean>();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any, event: any) => {
    // alert(JSON.stringify(data));
    sendMessage(event);
  };

  const sendMessage = (event: any) => {
    event.preventDefault();
    const sendButton = document.getElementById("button");
    sendButton!.textContent = "SENDING...";

    emailjs
      .sendForm(
        "service_psefb3t",
        "template_eb7an2c",
        event.target,
        "user_MgaLN50wYvCDhHdAATqCs"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          setIsFormSent(true);
        },
        (error: EmailJSResponseStatus) => {
          console.log(error.text);
          setIsFormSent(false);
        }
      );
  };

  return (
    <>
      {isFormSent ? (
        <SuccessMessage />
      ) : (
        <div className={"contact-form__container"}>
          <h3 className={"contact-form__title"}>
            Have an idea? Get in touch today!
          </h3>
          <p className={"contact-form__subtitle"}>
            Just fill this simple form and we will contact you promptly to
            discuss your project.
            <br />
            Hate forms? Drop us a line at support@island-drip.com
          </p>
          <form
            className={"contact-form__form"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="name">
              Name<span>*</span>
              <input name="name" />
            </label>
            <label htmlFor="email">
              Email<span>*</span>
              <input name="email" />
            </label>
            <label htmlFor="message">
              Message<span>*</span>
              <textarea name="message" />
            </label>

            <button
              type="submit"
              className={"contact-form__button"}
              id="button"
            >
              SEND
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
