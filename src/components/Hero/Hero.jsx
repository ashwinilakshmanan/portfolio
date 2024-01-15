import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ashwini</h1>
          <p className={styles.description}>
            I’m a full-stack developer with 1 years of experience using React
            and Java springboot. Reach out if you’d like to learn more!
          </p>
          <a href="#" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/heroImage.jpeg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        {/* <div className={styles.topBlur} />
        <div className={styles.bottomBlur} /> */}
      </div>
    </>
  );
};

export default Hero;
