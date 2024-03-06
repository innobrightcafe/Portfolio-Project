import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { SiCodewars } from "react-icons/si";
import { auth } from "@/lib/auth";

const AdminNavbar = async () => {
  const session = await auth();

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminNav}>
        <div>
          <Link href="/" className={styles.logo}>
            <div className={styles.logo}>
              <div className={styles.logoLayer}>
                <SiCodewars size={50} />
              </div>
              <div className={styles.logoText}>codeStack</div>
            </div>
          </Link>
        </div>

        <Links session={session} />
      </div>
    </div>
  );
};

export default AdminNavbar;
