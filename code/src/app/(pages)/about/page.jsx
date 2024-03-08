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
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Welcome to Our Tech Community</h1>
        <div className={styles.desc}>
          <p>
            At our core, we are a vibrant community driven by a shared passion
            for technology. Our platform provides a welcoming space where tech
            enthusiasts from various backgrounds come together to exchange
            ideas, insights, and expertise.
          </p>
          <h3>Our Mission: </h3>
          <span>
            We aim to foster an environment where individuals involved in
            technology, including software engineers, web designers,
            programmers, and other tech professionals, can connect, collaborate,
            and grow together.
          </span>
          <h3>What We Offer:</h3>{" "}
          <span>
            Our platform serves as a dynamic hub for sharing knowledge and
            staying updated on the latest trends and advancements in the tech
            industry. Through engaging discussions, informative articles, and
            interactive forums, we provide valuable resources and insights to
            our members.
          </span>
          <h3>Who We Are:</h3>{" "}
          <span>
            We are a diverse community of individuals who share a common
            enthusiasm for all things tech. Whether you're a seasoned
            professional or just starting your journey in the tech world, you'll
            find a supportive network of like-minded individuals here.
          </span>
          <h3>Our Focus:</h3>{" "}
          <span>
            From in-depth technical discussions to explorations of cutting-edge
            technologies, our platform covers a wide range of topics relevant to
            the tech community. We encourage members to share their experiences,
            ask questions, and contribute to the collective knowledge of our
            community.
          </span>
          <div className={styles.descdown}>
            <hr />
            <h3>Why Join Us:</h3>
            <span>
              By becoming a part of our community, you'll have the opportunity
              to learn from experts, collaborate on projects, and expand your
              professional network. Whether you're seeking advice, looking to
              share your expertise, or simply want to stay informed, our
              platform offers something for everyone.
            </span>
            <h2>Join Us Today: </h2>
            <span>
              Whether you're here to share your insights, learn from others, or
              simply connect with fellow tech enthusiasts, we invite you to join
              our community and be a part of the exciting journey ahead.
              Together, let's explore the endless possibilities of technology
              and make meaningful contributions to the ever-evolving tech
              landscape.
            </span>
          </div>
        </div>
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
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
