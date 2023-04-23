import React from "react";
import styles from "./SubHeader.module.css";

const SubHeader = ({ subHeader }) => {
  return <p className={styles.subHeader}>{subHeader}</p>;
};

export default SubHeader;
