import React from "react";
import styles from "./FooterItem.module.css";

const FooterItem = ({ title, items }) => {
  return (
    <div className={styles.footerItem}>
      <h4 className={styles.footerCategory}>{title}</h4>
      <ul>
        {items.map((item) => {
          const classes = item.length < 20 ? "oneLineItem" : "towLineItem";
          return (
            <li key={item} className={styles[classes]}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
