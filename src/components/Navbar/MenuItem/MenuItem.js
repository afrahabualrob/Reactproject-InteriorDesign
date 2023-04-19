import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ item, id }) => {
  return (
    <span id={id} className={styles.menuItem}>
      {item}
    </span>
  );
};

export default MenuItem;
