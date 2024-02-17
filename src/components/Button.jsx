import React from "react";
import { useTranslation } from "react-i18next";
import send from "../assets/send-icon.svg";

const Button = ({ props }) => {
  const { t, i18n } = useTranslation();

  return (
    <button
      type="submit"
      className={props === "send" ? "send--button" : "button"}
    >
      {props === "success" ? (
        t("Message sent !")
      ) : props === "error" ? (
        t("Back to home")
      ) : props === "send" ? (
        <img src={send} alt="Envoyer" />
      ) : (
        t("Send message")
      )}
    </button>
  );
};

export default Button;
