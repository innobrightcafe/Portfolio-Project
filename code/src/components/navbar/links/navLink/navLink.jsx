"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
     
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      <div className={styles.menu}>
      <div>{item.icon && item.icon}</div>
      <div>{item.title}</div>
      </div>
      
    </Link>
  );
};

export default NavLink;
