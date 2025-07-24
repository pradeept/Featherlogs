import Link from "next/link";
import styles from "./(home)/home.module.css"
import * as motion from "motion/react-client"
const NotFound = () => {
  return (
    <motion.div initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} className={styles.notFoundContainer}>
      <h2>404 | Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href='/' className={styles.notFoundLink}>Return Home</Link>
    </motion.div>
  );
};

export default NotFound;
