import React from "react";
import styles from "./Paragraph.module.css";

const ParagraphCenter = ({ content }) => {
  return <p className={styles.centerContent}>{content}</p>;
};

export default ParagraphCenter;
