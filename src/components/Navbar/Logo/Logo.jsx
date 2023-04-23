import React from "react";
import styles from './Logo.module.css'


const Logo = () => {
  return (
    <>
      <div className={styles.a}>
        <a className={styles.a2} href="#home">
          <img src="./assets/images/Logo.png "  alt="Logo" />
        </a>
        <span className={styles.logo}>Interno</span>
      </div>
    </>
  );
};

export default Logo;

{
  /* <nav class="navbar navbar-expand-md aNavbar fixed-top">
<div class="container">
// -----------------
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#main-nav"
    aria-controls="main-nav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div
    class="collapse navbar-collapse justify-content-end align-center"
    id="main-nav"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pages">Pages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#services">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item ms-2 d-md-inline">
        <img
          src="./assets/images/Vector.png"
          alt="Search Icon"
          width="21px"
          height="21px"
          class="d-flex align-item-center mt-2"
        />
      </li>
    </ul>
  </div>
</div>
</nav> */
}
