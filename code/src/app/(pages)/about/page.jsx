import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}> At Codestacks
        </h1>
        <p className={styles.desc}>
          We create a place where tech people can share their expertise
            and insights with a community of passionate techies, such as
            software engineers, web designers, and programmers. It is also a
            place to discuss the latest and hottest topics in tech.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Active users</p>
          </div>
          <div className={styles.box}>
            <h1>1+</h1>
            <p>Years old</p>
          </div>
          <div className={styles.box}>
            <h1>20 K+</h1>
            <p> Posts stacked</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
