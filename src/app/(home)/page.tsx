import Image from "next/image";
import React from "react";
import styles from "./home.module.css";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";
import {  slideInProps } from "@/utility/slideIn";
import Link from "next/link";

function Home() {
  return (
    <div className={styles.container}>
      <motion.div {...fadeInProps} className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
        <Link className={styles.button} href={"/about"}>Learn More</Link>
        <Link className={styles.button} href={"/contact"}>Contact</Link>
        </div>
        <div className={styles.brands}>
          <Image
            src='/brands.png'
            alt='brands-pic'
            fill
            className={styles.brandImg}
          />
        </div>
      </motion.div>
      <motion.div {...slideInProps} className={styles.imgContainer}>
        <Image src='/hero.gif' unoptimized alt='hero-gif' fill className={styles.heroImg} />
      </motion.div>
    </div>
  );
}

export default Home;
