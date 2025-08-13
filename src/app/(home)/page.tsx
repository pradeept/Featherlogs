import React from "react";
import styles from "./home.module.css";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";

function Home() {
  return (
    <div className={styles.container}>
      <motion.div {...fadeInProps} className={styles.textContainer}>
        <h1 style={{ fontSize: "5rem" }}>
          Welcome to FeatherLogs -{" "}
          <span style={{ color: "#d8eb71" }}>Where Thougts Take Flight✈️</span>!
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem", maxWidth: "70%" }}>
          Discover a beautifully simple way to share your ideas, stories, and
          insights. Featherlogs is your personal space to write freely, connect
          with readers, and let your voice soar.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
