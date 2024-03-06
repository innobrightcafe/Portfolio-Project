import styles from "./footer.module.css";
import { SiCodewars } from "react-icons/si";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <div className={styles.logoLayer}>
            <SiCodewars />
          </div>
          <div className={styles.logoText}>codeStack</div>
        </div>
        <div className={styles.text}>
          codeStack- For tech people © All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
