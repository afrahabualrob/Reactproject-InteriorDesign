import React from "react";
import styles from "./CircularIcon.module.css";

const CircularIcon = ({ icon }) => {
  return (
    <div className={styles.IconWrapper}>
      <img className={styles.icon} src={icon} />
    </div>
  );
};

export default CircularIcon;

// const styledHeading = (Title, icon) => {
//   const colors = [
//     { name: "white", color: "#fff" },
//     { name: "gray", color: "#202020" },
//   ];
//   const { color,background } = colors.find((item) => item.name === name);

//   const handleStyles = {
//     color,
//     background,
//     textAlign: "center",
//     fontSize: "20px",
//     fontWeight: 500,
//     textTransform: "uppercase",
//     wordSpacing: "1px",
//     letterSpacing: " 2px",
//   };
//   return (props) => {
//     return <div style={handleStyles}></div> />;
//   };
// };
// export default styledHeading;
