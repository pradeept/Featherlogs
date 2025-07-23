import Image from "next/image";
import styles from "./about.module.css";
import { fadeInProps } from "@/utility/fadeIn";
import * as motion from "motion/react-client"
import { slideInProps } from "@/utility/slideIn";
// import dynamic from "next/dynamic";

// const SomeComponentCSRonly = dynamic(import("@/components/SomeComponent"))
export const metadata = {
  title: "About Page",
  description:
    "We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibility and precission We’re world’s Our Special Team best consulting & finance solution provider. Wide range of web and software development services.",
};

function AboutPage() {
  return (
    <div className={styles.container}>
      <motion.div className={styles.textContainer} {...fadeInProps}>
        <h2 className={styles.subtitle}>About BloomBlog</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </motion.div>
      <motion.div className={styles.imgContainer} {...slideInProps}>
        <Image src='/about.png' alt='About Image' fill className={styles.img} />
      </motion.div>
    </div>
  );
}

export default AboutPage;
