import React from "react";
import styles from "./Footer.module.css";
import { Container } from "@mui/material";
import Logo from "../Navbar/Logo/Logo";
import FooterItem from "../Footer/FooterItem/FooterItem";

const Footer = () => {
  const footerIcons = [
    "./assets/images/facebook icon.png",
    "./assets/images/twitter icon.png",
    "./assets/images/linkedin icon.png",
    "./assets/images/instagram icon.png",
  ];
  return (
    <footer className={styles.footerSection}>
      <Container>
        <div className={styles.footerItems}>
          <div className={styles.footerRightSide}>
            <Logo />
            <p>
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <div className={styles.socialMedia}>
              {footerIcons.map((imgSrc) => (
                <img src={imgSrc} />
              ))}
            </div>
          </div>
          <div className={styles.pages}>
            <FooterItem
              title="pages"
              items={[
                "About Us",
                "Our Projects",
                "Our Team",
                "Contact Us",
                "Services",
              ]}
            />
          </div>
          <div className={styles.services}>
            <FooterItem
              title="services"
              items={[
                "Kitchan",
                "Living Area",
                "Bathroom",
                "Dinning Hall",
                "Bedroom",
              ]}
            />
          </div>
          <div className={styles.contact}>
            <FooterItem
              title="contact"
              items={[
                "55 East Birchwood Ave. Brooklyn, New York 11201",
                "contact@interno.com",
                "(123) 456 - 7890",
              ]}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
