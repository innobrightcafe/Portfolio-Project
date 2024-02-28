"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdHelp,
  MdNoteAdd,
  MdNotes,
  MdNotifications,
  MdOutlineGrade,
  MdPerson,
} from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const DashboardNavbar = () => {
  const pathname = usePathname;
  const heading = typeof pathname === "string" ? pathname.split("/").pop() : "";

  return (
    <>
      <div className={styles.top}>
        <div className="flex">
        <Link href={'/'}>
          <Image width={40} height={40} alt="logo" src={"/Vector.png"} />
          <h1 className={styles.title}>codeStacks</h1>
          </Link>
        </div>

        <div className={styles.container}>
          <div className={styles.menu}>
            <Link href={"/"}>
              <h3>
                <MdNotes size={20} />
                All Posts
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdPerson size={20} />
                Profile
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdHelp size={20} />
                Help
              </h3>
            </Link>
            <Link href={"/"}>
              <h3>
                <MdOutlineGrade size={20} />
                Learn
              </h3>
            </Link>
          </div>
        </div>
        <div className={styles.plus}>
          <FaPlusCircle size={40} />
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
