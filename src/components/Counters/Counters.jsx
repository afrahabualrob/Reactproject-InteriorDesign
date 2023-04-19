import React from "react";
import { Container, Grid } from "@mui/material";
import styles from "./Counters.module.css";
import ParagraphCenter from "../Paragraph/ParagraphCenter";

const Counters = () => {
  const counters = [
    { id: 1, number: "12", caption: "Years Of Experiance" },
    { id: 2, number: "85", caption: "Success Project" },
    { id: 3, number: "15", caption: "Active Project" },
    { id: 4, number: "95", caption: "Happy CUstomers" },
  ];

  return (
    <section className={styles.countersSection}>
      <Container>
        <Grid container justifyContent="space-between">
          {counters.map((count) => {
            let { id, number, caption } = count;
            return (
              <Grid key={id} item xs={6} md={3} className={styles.counterItem}>
                <span className={styles.number}>{number}</span>
                {/* <p className={styles.caption}>{caption}</p> */}
                <ParagraphCenter content={caption} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Counters;
