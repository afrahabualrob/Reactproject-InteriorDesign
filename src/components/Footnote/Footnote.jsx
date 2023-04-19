import React from "react";
import styles from "./Footnote.module.css";

const Footnote = () => {
  return (
    <section className={styles.copyright}>
      <img src="./assets/images/Line.png" width="100%"/>
      <p>
        Copyright © Interno | Designed by Victorflow Templates - Powered by
        Webflow
      </p>
    </section>
  );
};

export default Footnote;
