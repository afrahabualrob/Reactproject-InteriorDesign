import React from "react";
import styles from "./BtnWithArrow.module.css";
import { Grid } from "@mui/material";

const BtnWithArrow = ({ content }) => {
  return (
    <button type="button" className={styles.btnWithArrow}>
      <Grid container alignItems="center">
        <Grid item>{content}</Grid>
        <Grid item>
          <img
            src="./assets/images/right arrow.png"
            alt="right arrow"
            className={styles.arrowIcon}
          />
        </Grid>
      </Grid>
    </button>
  );
};

export default BtnWithArrow;
