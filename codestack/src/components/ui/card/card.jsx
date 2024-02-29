import Image from "next/image";
import Link from "next/link";
import styles from "@/components/ui/card/card.module.css";
import { postData } from "./data";

const StackedCards = () => {
  return (
    <div className={styles.container}>
      {postData.map((post) => (
        <div className={styles.mainCard} key={post.id}>
          <Link href={post.link}>
            <Image className={styles.img} alt="posts" src={post.image} />
          </Link>
          <div className={styles.content}>
            <h3>{post.title}</h3>
            <p> {post.content} </p>
            <div>
              <p> Last Post - {post.date}</p>
            </div>
          </div>
          <div className={styles.blueLayer}></div>
          <div className={styles.blueLayer1}>
            <div className={styles.category}>
              <p>{post.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
