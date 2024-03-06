"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import {
  MdAddCircle,
  MdHome,
  MdMessage,
  MdNotifications,
  MdOutlineGrade,
  MdPeople, 
  MdLogin,
  MdLogout,
} from "react-icons/md";

const links = [
  {
    title: "Home",
    path: "/",
    icon: <MdHome size={20} />,
  },
  {
    title: "About",
    path: "/about",
    icon: <MdPeople size={20} />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdMessage size={20} />,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: <MdNotifications size={20} />,
  },
];

const Links = ({session}) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
           
          <NavLink item={link} key={link.title} /> 
        ))}
         
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ icon:<MdOutlineGrade size={20}/>, title: "Manageposts", path: "/manageposts" }} />}
            {session.user?.isAdmin && <NavLink item={{ icon:<MdOutlineGrade size={20}/>, title: "Manageusers", path: "/manageusers" }} />}
            <form action={handleLogout}>

              <button className={styles.logout}>
                Logout 
                </button>
                
            </form>
          </>
        ) : (
          
          <NavLink item={{ icon:<MdLogin size={12} />, title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
