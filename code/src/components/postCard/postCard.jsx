import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.top}>
          {post.img && (
            <div className={styles.imgContainer}>
              <Image
                src={post.img || "/Rectangle 158.png"}
                alt={post.title}
                width={500}
                height={300}
                layout="constrained"
                className={styles.img}
              />
            </div>
          )}
        </div>
        <div className={styles.bottom}>
          <Link className={styles.link} href={`/blog/${post.slug}`}>
            <h1 className={styles.title}>{post.title}</h1>
          </Link>
          <div className={styles.content}>
            <p>{post.desc.slice(0, 199)}</p>
          </div>
          <div className={styles.date}></div>
          <p>
            Last Posted -<span>{post.createdAt?.toString().slice(4, 16)}</span>
          </p>
        </div>
      </div>
      <div></div>
      <div className={styles.layer}>
        <div>
          <p>{post.slug}</p>
        </div>
        <div>
          <Link className={styles.link} href={`/blog/${post.slug}`}>
            READ MORE
          </Link>
        </div>
      </div>
    </div>

    // <div className={styles.container}>
    //   <h3>Your Recent Posts</h3>
    //     <div className={styles.post} key={post.id}>
    //       <div className={styles.detail}>
    //         <Link  href={`/blog/${post.slug}`} >
    //         <Image
    //           src={post.img ||"/Rectangle 158.png"}
    //           alt={post.title}
    //           width={500}
    //           height={300}
    //           layout="constrained"
    //         />
    //         </Link>

    //       </div>
    //       <div className={styles.postTitle}>
    //       <Link  href={`/blog/${post.slug}`} >
    //       {post.title}
    //        </Link>
    //       </div>
    //       <form action={deletePost}>
    //         <input type="hidden" name="id" value={post.id} />
    //         <button className={styles.postButton}>Delete</button>
    //       </form>
    //       <form action={updatePost}>
    //         <input type="hidden" name="id" value={post.id} />
    //         <Link href={`/updatepost`}>
    //         <button className={styles.udateButton}>Update</button>
    //         </Link>

    //       </form>
    //     </div>
    // </div>
  );
};

export default PostCard;
