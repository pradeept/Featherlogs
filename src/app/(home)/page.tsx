import React from "react";
import styles from "./home.module.css";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";

function Home() {
  return (
    <div className={styles.container}>
      <motion.div {...fadeInProps} className={styles.textContainer}>
        <h1 style={{ fontSize: "2rem", textAlign:"center" }}>
          Welcome to FeatherLogs -{" "}
          <span style={{ color: "#d8eb71" }}>Where Thougts Take ✈️</span>!
        </h1>
      </motion.div>
    </div>
  );
}

export default Home;
