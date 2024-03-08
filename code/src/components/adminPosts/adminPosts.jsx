import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost, updatePost } from "@/lib/action";
import Link from "next/link";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h3>Your Recent Posts</h3>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Link  href={`/blog/${post.slug}`} >
            <Image
              src={post.img ||"/Rectangle 158.png"}
              alt={post.title}  
              width={500}
              height={300} 
              layout="constrained" 
            />
            </Link>
            
          </div>
          <div className={styles.postTitle}>
          <Link  href={`/blog/${post.slug}`} >
          {post.title}
           </Link> 
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form> 
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
