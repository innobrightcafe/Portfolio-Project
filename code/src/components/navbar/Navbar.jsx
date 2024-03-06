import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { SiCodewars } from "react-icons/si";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}> 
        <Link href="/" className={styles.logo}>
          <div className={styles.logo}>
            <div className={styles.logoLayer}>
              <SiCodewars size={50} />
            </div>
            <div className={styles.logoText}>codeStack</div>
          </div>
        </Link>
        <div className={styles.nav}>
          <Links session={session} />
        </div>
      </div> 
  );
};

export default Navbar;
