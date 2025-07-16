import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BoomBlog</div>
      <div className={styles.text}>
        Made with ❤️ by <a href="https://pradeept.netlify.app">Pradeep Tarakar</a>
      </div>
    </div>
  );
};

export default Footer;