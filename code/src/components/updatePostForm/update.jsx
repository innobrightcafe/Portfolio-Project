"use client"

import { updatePost } from "@/lib/action";
import styles from "../adminPostForm/adminPostForm.module.css";
import { useFormState } from "react-dom"; 
import { getPosts } from "@/lib/data";

const UpdatePostForm = ({userId}) => {
  const [state, formAction] = useFormState(updatePost, undefined);
  
  
  return (
    <form action={formAction} className={styles.container}>
      <h3>Update your post</h3>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder={getPosts.title} />
      <input type="text" name="slug" placeholder={getPosts.slug} />
      <input type="text" name="img" placeholder={getPosts.img} />
      <textarea type="text" name="desc" placeholder={getPosts.desc} rows={10} />
      <select name={getPosts.category}>
        <option value="select" defaultValue>select category</option>
        <option value="design">Tech</option>  
        <option value="lessons">Lessons learnt</option>
        <option value="solutions">Solutions</option>
        <option value="jobs">Jobs</option>
      </select>
      <button>Post To Stack</button>
      {state?.error}
    </form>
  );
};

export default UpdatePostForm;
