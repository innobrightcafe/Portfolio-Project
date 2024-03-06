import Image from "next/image";
import styles from "./home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>codeStack.</h1>
          <p className={styles.desc}>
            Codstack is a platform where tech people can share their expertise
            and insights with a community of passionate techies, such as
            software engineers, web designers, and programmers. It is also a
            place to discuss the latest and hottest topics in tech.
          </p>
          <div className={styles.buttons}>
            <Link href="/about">
              <button className={styles.button}>Read More</button>
            </Link>
            <Link href="login">
              <button className={styles.button1}>Start Here</button>
            </Link>
          </div>
          <div className={styles.brands}>
            <h3>Brands Who love us:</h3>
            <Image src="/brands.png" alt="" fill className={styles.brandImg} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/codestack.png" alt="" width={400} height={300} className={styles.heroImg} />
        </div>
      </div>
    </>
  );
};

export default Home;
