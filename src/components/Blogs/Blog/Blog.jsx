import React from "react";
import styles from "./Blog.module.css";
import { Fab, Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Blog = ({ BlogName, BlogImage, BlogDate, qoute, id }) => {
  let classes = id === 2 || (id - 2) / 3 === 0 ? "blog1" : "blog2";
  let btncolor = classes === "blog1" ? "#fff" : "#F4F0EC";

  return (
    <div className={styles.blog}>
      <div className={styles[classes]}>
        <div className={styles.innerBlog}>
          <div className={styles.imageWrapper}>
            <img src={BlogImage} alt={BlogName} />
            <span className={styles.qoute}> {qoute}</span>
          </div>

          <h5>{BlogName}</h5>
          <Grid container justifyContent="space-between">
            <Grid item>
              <span className={styles.date}>{BlogDate}</span>
            </Grid>
            <Grid item>
              <Fab
                aria-label="more"
                sx={{ boxShadow: "0", color: "#292F36", background: btncolor}}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
              </Fab>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Blog;
