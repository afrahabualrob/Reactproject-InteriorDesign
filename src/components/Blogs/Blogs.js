import React from "react";
import MainHeader from "../Headers/MainHeader/MianHeader";
import SubHeader from "../Headers/SubHeader/SubHeader";
import { Container, Grid } from "@mui/material";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      name: "Let’s Get Solution For Building Construction Work",
      caption: "Kitchan Design",
      date: "26 December,2022 ",
      imgSrc: "./assets/images/article1.png",
      qoute: "Kitchan Design",
    },
    {
      id: 2,
      name: "Low Cost Latest Invented Interior DesigningIdeas.",
      caption: "Living Design",
      date: "22 December,2022 ",
      imgSrc: "./assets/images/article2.png",
      qoute: "Living Design",
    },
    {
      id: 3,
      name: "Best For Any Office & Business Interior Solution",
      caption: "Interior Design",
      date: "25 December,2022 ",
      imgSrc: "./assets/images/article3.png",
      qoute: "Interior Design",
    },
  ];
  return (
    <Container>
      <Container>
        <MainHeader mainHeader="Articles & News" />
        <SubHeader subHeader="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using." />
      </Container>

      <Grid
        container
        rowSpacing={3}
        justifyContent={{ sm: "center", md: "space-between" }}
        columnSpacing={5}
      >
        {blogs.map((blog) => {
          const { id, imgSrc, name, qoute, date } = blog;
          return (
            <Grid item md={4}>
              <Blog
                key={id}
                BlogImage={imgSrc}
                BlogName={name}
                BlogDate={date}
                qoute={qoute}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Blogs;
