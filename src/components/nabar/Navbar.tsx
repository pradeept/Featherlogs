import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";
import logo from "@/../public/featherlogsLogo.png"


async function Navbar() {
  const session:any = await auth();

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Featherlogs<Image src={logo} width={60} height={60} alt="logo"/>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

export default Navbar;
