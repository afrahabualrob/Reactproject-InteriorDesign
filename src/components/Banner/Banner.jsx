import React from "react";
import styles from "./Banner.module.css";
import { Container } from "@mui/material";
import BtnWithArrow from "../BtnWithArrow/BtnWithArrow";
import ParagraphCenter from "../Paragraph/ParagraphCenter";

const Banner = () => {
  return (
    <header className={styles.banner} id="home">
      <img
        src="assets/images/haeding.jpg"
        alt="heading"
        width="100%"
        height="91%"
        className={styles.bannerImage}
      />
      <Container>
        <div>
          <div className={styles.innerBanner}>
            <div>
              <h1>
                Let Your Home
                <br />
                Be Unique
              </h1>
              <ParagraphCenter
                content="There are many variations of the passages of lorem Ipsum
                fromavailable,variations of the passages."
                textAligned="left"
              />
              <BtnWithArrow content="Get satrted" />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Banner;
