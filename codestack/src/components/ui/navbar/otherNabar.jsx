"use client";
import styles from "./mainNavbar.module.css";
import {
  MdAddCircle,
  MdHome,
  MdMessage,
  MdOutlineGrade,
  MdPeople,
  MdLogin,
} from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const OtherNavbar = () => {
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
                <MdHome size={20} />
                Home
              </h3>
            </Link>
            <Link href={"/about"}>
              <h3>
                <MdPeople size={20} />
                About
              </h3>
            </Link>
            <Link href={"/contact"}>
              <h3>
                <MdMessage size={20} />
                Contact
              </h3>
            </Link>
            <Link href={"/faq"}>
              <h3>
                <MdOutlineGrade size={20} />
                Faq
              </h3>
            </Link>
            <Link href={"/login"}>
              <h3>
                <MdLogin size={20} />
                Login
              </h3>
            </Link>
            <div className={styles.menubtn}>
              <Link href={"/join"}>
                <h3>
                  <MdAddCircle size={20} />
                  Join codeStack
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherNavbar;
