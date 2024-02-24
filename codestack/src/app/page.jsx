import MainNavbar from "@/components/ui/navbar/mainNavbar";
import styles from "@/components/homepage.module.css";
import { 
  MdArrowBackIos, 
  MdArrowForwardIos, 
} from "react-icons/md";

export default function Home() {
  return (
    <div>
      <MainNavbar />
      <div className={styles.container}>
        <div className={styles.categories}>
          <MdArrowBackIos size={20} />
          <div className={styles.cartegory__card}>
            <div className={styles.category}>
              <h3>All</h3>
            </div>
            <div className={styles.category}>
              <h3>JavaScript</h3>
            </div>
            <div className={styles.category}>
              <h3>UI/UX</h3>
            </div>
          </div>
          <MdArrowForwardIos size={20} />
        </div>
      </div>
    </div>
  );
}
