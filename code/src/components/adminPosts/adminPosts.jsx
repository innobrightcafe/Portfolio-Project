import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost, updatePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h3>Your Latest stacked Posts</h3>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img ||"/Rectangle 158.png"}
              alt={post.title}  
              width={500}
              height={300} 
              layout="constrained" 
            />
          </div>
           
          <div className={styles.postTitle}>{post.title}</div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
          <form action={updatePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.udateButton}>Update</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
