import Image from "next/image";
import styles from "./about.module.css";

const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <p className={styles.title}>
          CodeStack.io is a web application designed to provide developers and
          website designers with a platform to publish their articles, share
          insights, and showcase their expertise in the field.
        </p>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="" fill />
      </div>
    </div>
  );
};

export default AboutUsPage;
