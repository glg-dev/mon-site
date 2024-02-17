import React, { useEffect, useState } from "react";
import TypedText from "../components/TypedText";
import { useTranslation } from "react-i18next";
import LanguageButton from "../components/LanguageButton";
import Title from "../components/Title";

function About() {
  const [isFr, setIsFr] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.getItem("language") === "fr" ? setIsFr(true) : setIsFr(false);
  }, [i18n.language]);

  return (
    <div className="page-wrapper">
      <LanguageButton />
      <div className="about" id="about">
        <header id="header">
          {isFr ? (
            <>
              <TypedText string={["Ga^150ël LG"]} />
              <TypedText
                string={[
                  "Front-end ^250JavaScript Developer",
                  "Front-end React Developer",
                ]}
                delayed
              />
            </>
          ) : (
            <>
              <TypedText string={["Hi, I'm Gaël !"]} />
              <TypedText
                string={[
                  `Welcome to my space`,
                  "Welcome to my portfolio !<br />^1600 This is where your ideas come to life",
                ]}
                delayed
              />
            </>
          )}
        </header>

        <main>
          <Title text="About me" />
          <p>
            {t(
              "Trained 100% remotely in front-end development, and more particularly React, I put my skills at your service to complete your website project. You can look at my different creations here, and contact me directly via the dedicated form. Enjoy your visit !"
            )}
          </p>
        </main>
      </div>
    </div>
  );
}

export default About;
