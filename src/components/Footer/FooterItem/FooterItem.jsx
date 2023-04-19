import React from "react";
import styles from "./FooterItem.module.css";

const FooterItem = ({ title, items }) => {
    let classes;
  return (
    <div className={styles.footerItem}>
      <h4 className={styles.footerCategory}>{title}</h4>
      <ul>
      {items.map((item) => {
          const classes=item.length<20?"oneLineItem":"towLineItem"
          return (
            <li className={styles[classes]}>{item}</li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default FooterItem;
