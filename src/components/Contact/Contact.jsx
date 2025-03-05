import React from "react";
import { getImageUrl } from "../../utils/";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:christiandenvermendoza@gmail.com">
            christiandenvermendoza@gmail
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://www.linkedin.com/in/christian-denver-mendoza-19876034b/">
            LinkedIn / Christian Denver Mendoza
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="github icon" />
          <a href="https://github.com/Jett1423">Github / Jett1423</a>
        </li>
      </ul>
    </footer>
  );
};
