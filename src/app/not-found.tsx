import Link from "next/link";
// import styles from "./home.module.css"
const NotFound = () => {
  return (
    // <div className={styles.notFoundContainer}>
    <div>
      <h2>404 | Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* <Link href='/' className={styles.notFoundLink}>Return Home</Link> */}
      <Link href='/' >Return Home</Link>
    </div>
  );
};

export default NotFound;
