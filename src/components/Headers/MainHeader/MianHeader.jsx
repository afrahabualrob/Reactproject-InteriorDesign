import React from "react";
import styles from './MianHeader.module.css'

const MianHeader = ({ mainHeader }) => {
  return <h1 className={styles.mainHeader}>{mainHeader}</h1>;
};

export default MianHeader;
