import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="/" className={styles.logoLink}>
        <img className={styles.logo} src="/assets/logo.svg" alt="Fylo logo" />
      </a>
      <ul className={styles.navbar}>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar