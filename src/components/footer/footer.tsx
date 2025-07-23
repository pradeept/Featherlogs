import Image from "next/image";
import styles from "./footer.module.css";
import logo from "@/../public/featherlogsLogo.png"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Featherlogs
        <Image src={logo} width={40} height={40} alt='logo' />
      </div>
      <div className={styles.text}>
        Made with ❤️ by{" "}
        <a href='https://pradeept.netlify.app'>Pradeep Tarakar</a>
      </div>
    </div>
  );
};

export default Footer;
