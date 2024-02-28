import Image from "next/image";
import Link from "next/link";
import styles from "@/components/ui/card/card.module.css";
import { postData } from "./data";

const StackedCards = () => {
  return (
    <div className={styles.container}>
      {postData.map((post) => (
        <div className={styles.mainCard} key={post.id}>
          <Link href={post.link} >
            <Image
              className={styles.img} 
              alt="posts"
              src={post.image}
            />
          </Link>
          <div className={styles.content}>
            <h3>{post.title}</h3>
            <p> {post.content} </p>
          </div>

          <div className={styles.blueLayer}></div>
          <div className={styles.layer}></div>
          <div className={styles.layers}></div>
        </div>
      ))}
    </div>
  );
};

export default StackedCards;
