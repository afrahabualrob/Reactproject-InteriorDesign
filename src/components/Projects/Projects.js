import React from "react";
import MainHeader from "../Headers/MainHeader/MianHeader";
import SubHeader from "../Headers/SubHeader/SubHeader";
import { Container, Grid } from "@mui/material";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./Projects.module.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      imgSrc: "./assets/images/project1.png",
      name: "Modern Kitchan",
      category: "Decor / Artchitecture",
      projectClassName: "topRightBorder",
    },
    {
      id: 2,
      imgSrc: "./assets/images/project2.png",
      name: "Modern Kitchan",
      category: "Decor / Artchitecture",
      projectClassName: "topLeftBorder",
    },
    {
      id: 3,
      imgSrc: "./assets/images/project3.png",
      name: "Modern Kitchan",
      category: "Decor / Artchitecture",
      projectClassName: "buttomRightBorder",
    },
    {
      id: 4,
      imgSrc: "./assets/images/project4.png",
      name: "Modern Kitchan",
      category: "Decor / Artchitecture",
      projectClassName: "buttomLeftBorder",
    },
  ];

  return (
    <section id="Project">
      <Container>
        <Container maxWidth="md">
          <MainHeader mainHeader="Follow Our Projects" />
          <SubHeader subHeader="It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points." />
        </Container>

        <Grid
          container
          rowSpacing={3}
          justifyContent={{ sm: "center", md: "space-between" }}
          columnSpacing={10}
        >
          {projects.map((project) => {
            const { id, imgSrc, name, category, projectClassName } = project;
            return (
              <Grid item md={6}>
                <ProjectItem
                  key={id}
                  projectImg={imgSrc}
                  projectName={name}
                  projectCategory={category}
                  projectClassName={projectClassName}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Projects;
