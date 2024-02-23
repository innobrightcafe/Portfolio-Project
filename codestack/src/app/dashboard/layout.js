import DashboardNavbar from "@/components/ui/dashboard/navbar/navbar";
import styles from "@/components/ui/dashboard/dashboard.module.css";

const layout = ({ children }) => {
  return (
    <div className={styles.container}> 
        <DashboardNavbar /> 
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default layout;
