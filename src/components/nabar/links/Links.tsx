"use client";

import { useEffect, useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { handleLogout } from "@/lib/actions";
import { Session } from "next-auth";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const signIn = (
  session: Session & { user: Session["user"] & { isAdmin: boolean } | null}
) => {
  console.log(session);

  return session?.user ? (
    <>
      {session.user?.isAdmin && (
        <NavLink item={{ title: "Admin", path: "/admin" }} />
      )}
      <form action={handleLogout}>
        <button className={styles.logout}>Logout</button>
      </form>
    </>
  ) : (
    <motion.div whileHover={{ scale: 1.1 }} className={styles.loginBtn}>
      <NavLink item={{ title: "Login", path: "/login" }} />
    </motion.div>
  );
};

function Links({
  session,
}: {
  session: Session & { user: Session["user"] & { isAdmin: boolean } | null};
}) {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    console.log("Changed session");
  },[session])

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <motion.div key={link.title} whileHover={{ scale: 1.1 }}>
            <NavLink item={link} key={link.title} />
          </motion.div>
        ))}
        {signIn(session)}
      </div>
      <Image
        className={styles.menuButton}
        src='/menu.png'
        alt=''
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={styles.mobileLinks}
          >
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
            {signIn(session)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Links;
