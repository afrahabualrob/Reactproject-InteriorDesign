import { Grid, Fab } from "@mui/material";
import React from "react";
import styles from "./ProjectItem.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProjectItem = ({
  projectImg,
  projectName,
  projectCategory,
  projectClassName,
}) => {
  return (
    <div className={styles.projectItem}>
      <img
        className={`styles.w + ${styles[projectClassName]}`}
        src={projectImg}
        alt={projectName}
      />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <p className={styles.projectName}>{projectName}</p>
          <p className={styles.peojectCategory}>{projectCategory}</p>
        </Grid>
        <Grid item>
          <Fab
            aria-label="add"
            sx={{ boxShadow: "0", color: "#292F36", background: "#F4F0EC" }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 20 }}/>
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectItem;
