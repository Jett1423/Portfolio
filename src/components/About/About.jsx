import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        /> */}

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={styles.images}
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Website Developer</h3>
              <p>
                I have built various websites for different projects using HTML,
                CSS / BootStrap, and JavaScript, ensuring visually appealing and
                responsive designs. In addition to these core web technologies,
                I have experience working with modern development platforms and
                frameworks that streamline the development process. My expertise
                includes React and Vite, which allow me to build dynamic and
                fast frontend applications, while PHP and MySQL enable me to
                develop robust backend systems with efficient database
                management.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.images}
              src={getImageUrl("about/serverIcon.png")}
              alt="Server"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                In mobile development, I have hands-on experience with Flutter,
                which I used in my capstone project, BakeAR, an application that
                integrates 3D and Augmented Reality (AR) as core features to
                enhance user interaction. To further expand my expertise, I also
                work with React Native, allowing me to develop efficient and
                responsive cross-platform applications that run seamlessly on
                both iOS and Android devices.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={styles.images}
              src={getImageUrl("about/cloud.png")}
              alt="Cursor"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Cloud Service Databases</h3>
              <p>
                I specialize in cloud-based databases, particularly Firebase
                Firestore and Realtime Database, to manage user authentication,
                order processing, and chat functionalities. These solutions
                provide real-time data synchronization, ensuring a smooth and
                connected user experience. Unlike traditional SQL databases,
                cloud-based systems allow for scalable, efficient, and flexible
                data management.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
