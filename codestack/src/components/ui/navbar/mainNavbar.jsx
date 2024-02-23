"use client"; 
import styles from "./mainNavbar.module.css";
import { 
  MdNotifications, 
  MdSearch,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const MainNavbar = () => {
 
  return (
    <>
      <div className={styles.top}>
        <div className="flex">
          <Image width={40} height={40} alt="logo" src={"/Vector.png"} />
          <h1 className={styles.title}>codeStacks</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.menu}>
            <Link href={"/"}>
              <h3>
                <MdNotifications size={20} />
                Home
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdNotifications size={20} />
                About
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdNotifications size={20} />
                Contact
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdNotifications size={20} />
                FAQ
              </h3>
            </Link>
            <div className={styles.menubtn}>
              <Link href={"/"}>
                <h3>
                  <MdNotifications size={20} />
                  Join codeStack
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search Stack..."
          className={styles.input}
        />
        <MdSearch size={50} />
      </div>
    </>
  );
};

export default MainNavbar;
