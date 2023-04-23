import { Container, Grid } from "@mui/material";
import React from "react";
import styles from "./About.module.css";
import CircularIcon from "../../HOC/CircularIcon/CircularIcon";
import BtnWithArrow from "../BtnWithArrow/BtnWithArrow";
import ParagraphLeftCenter from "../Paragraph/ParagraphLeftCenter";

const About = () => {
  return (
    <Container className={styles.aboutSection}>
      <Grid container justifyContent="space-between">
        <Grid item sm={6} className={styles.leftSide}>
          <h2 className={styles.header}>
            We Create The Art Of Stylish Livin Stylishly
          </h2>
          <ParagraphLeftCenter
            content=" It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal."
          />

          <Grid container className={styles.callSection}>
            <Grid item>
              <CircularIcon icon="./assets/images/Call.svg" />
            </Grid>
            <Grid item className={styles.callSectionRightSide}>
              <div>
                <span className={styles.mobileNumber}>012345678</span>
                <span className={styles.callUs}>Call Us Anytime</span>
              </div>
            </Grid>
          </Grid>
          <div className={styles.btnWrapper}>
            <BtnWithArrow content="Get Free Estimate" className={styles.bb} />
          </div>
        </Grid>

        <Grid item sm={6} className={styles.rightSide}>
          <img
            src="./assets/images/Stylish home.jpg"
            alt="stylish home"
            className={styles.home}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
