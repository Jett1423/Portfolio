import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm{" "}
          <span className={styles.typingEffect}>
            <Typewriter
              options={{
                strings: [
                  "Christian Mendoza",
                  "a Mobile Developer",
                  "a Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className={styles.description}>
          I'm a Mobile and Web Developer from the Philippines
        </p>
        <a
          href="/Resume_Mendoza, Christian Denver.pdf"
          download="Resume_Mendoza, Christian Denver.pdf"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        height={"30%"}
        width={"30%"}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
