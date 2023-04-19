import { Container, Grid } from "@mui/material";
import React from "react";
import WorkItem from "./WorkItem/WorkItem";
import styles from './Works.module.css'

const Works = () => {
  const worksItems = [
    {
      id: 1,
      title: "Project Plan",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 2,
      title: "Interior Work",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
    {
      id: 3,
      title: "Realization",
      description:
        "There are many variations of the passages of lorem Ipsum from available, majority.",
    },
  ];

  return (
    <section className={styles.workSection}>
      <Container>
        <Grid container>
          {worksItems.map((workItem) => {
            const { id, title, description } = workItem;
            return (
              <Grid item md={4}>
                <WorkItem key={id} title={title} description={description} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Works;
