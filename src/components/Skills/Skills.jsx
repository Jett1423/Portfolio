import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
import project from "../../data/projects.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills and Projects</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img
                    className={styles.skillImage}
                    src={getImageUrl(skill.imagesSrc)}
                    alt="skill images"
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.project}>
          {project.map((projectItem, id) => {
            return (
              <li key={id} className={styles.projectItem}>
                <img
                  className={styles.projectImage}
                  src={getImageUrl(projectItem.imageSrc)}
                  alt="project images"
                />
                <div className={styles.projectItemDetails}>
                  <h4>{`${projectItem.role}`}</h4>
                  <h3>{`${projectItem.title}`}</h3>
                  <p>{`${projectItem.startdate} to ${projectItem.endDate}`}</p>
                  <ul>
                    {projectItem.description.map((description, id) => {
                      return <li key={id}>{description}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
