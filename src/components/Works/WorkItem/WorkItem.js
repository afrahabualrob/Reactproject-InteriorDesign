import React from "react";
import styles from "./WorkItem.module.css";
import ParagraphCenter from "../../Paragraph/ParagraphCenter";

const WorkItem = ({ title, description }) => {
  return (
    <div className={styles.workItem}>
      <h3>{title}</h3>
      <ParagraphCenter content={description} />
      <a href="#">
        Read More
        <img
          src="./assets/images/right arrow.png"
          alt="right arrow"
          className={styles.rightArrow}
        />
      </a>
    </div>
  );
};

export default WorkItem;
