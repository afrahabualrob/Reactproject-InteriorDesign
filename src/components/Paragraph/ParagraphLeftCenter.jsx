import React from "react";
import styles from "./Paragraph.module.css";

const ParagraphLeftCenter = ({ content }) => {
  return <p className={styles.paragraphLeftCenter}>{content}</p>;
};

export default ParagraphLeftCenter;
