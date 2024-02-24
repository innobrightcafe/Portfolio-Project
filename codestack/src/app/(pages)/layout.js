 import styles from "@/components/ui/dashboard/dashboard.module.css";
import MainNavbar from "@/components/ui/navbar/mainNavbar";
import OtherNavbar from "@/components/ui/navbar/otherNabar";

const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <OtherNavbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default layout;
