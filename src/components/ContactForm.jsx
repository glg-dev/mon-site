import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import Title from "./Title";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICEID,
        process.env.REACT_APP_TEMPLATEID,
        form.current,
        process.env.REACT_APP_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <Title text="Talk to me !" />
      <form onSubmit={sendEmail} className="form" ref={form}>
        <div className="name">
          <input
            type="text"
            name="name"
            placeholder={t("Your name")}
            tabIndex="1"
            required
          />
        </div>

        <div className="email">
          <input
            type="email"
            name="email"
            placeholder={t("Your email address")}
            tabIndex="2"
            required
          />
        </div>

        <div className="message--submit">
          <div className="message">
            <textarea
              name="message"
              placeholder={t("Your message here")}
              required
            ></textarea>
          </div>
          <Button props={success ? "success" : "send"} />
        </div>
        {error && <span className="error-text">{error}</span>}
      </form>
    </div>
  );
};

export default ContactForm;
