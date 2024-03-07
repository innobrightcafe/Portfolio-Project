"use client"

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h3>Make a new codeStack Post</h3>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <select name="category">
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

export default AdminPostForm;
