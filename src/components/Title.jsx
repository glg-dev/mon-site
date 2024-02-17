import React from "react";
import { useTranslation } from "react-i18next";

const Title = ({ text }) => {
  const { t } = useTranslation();

  const translatedTitle = Array.from(t(text));

  return (
    <h1 className="title-component">
      {Array.from(translatedTitle).map((char, i) => {
        return <span key={i}>{char}</span>;
      })}
    </h1>
  );
};

export default Title;
