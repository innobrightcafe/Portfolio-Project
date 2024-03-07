import { Suspense } from "react";
import styles from "../manageposts/admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts"; 
import { auth } from "@/lib/auth";
import UpdatePostForm from "@/components/updatePostForm/update";

const UpdatePage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <UpdatePostForm userId={session.user.id} />
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
