import React from "react";
import styles from "./Footer.module.css";

function Footer({
  addressIcon,
  addressAlt,
  address,
  numberIcon,
  numberAlt,
  number,
  mailIcon,
  mailAlt,
  mail,
}) {
  return (
    <footer className={styles.footer}>
      <a href="/" className={styles.logoFooter}>
        <img className={styles.logoImg} src="/assets/logo.svg" alt="Fylo logo" />
      </a>
      <div className={styles.contact}>
        <img className={styles.footerIcon} src={addressIcon} alt={addressAlt} />
        <p className={styles.addressTxt}>{address}</p>
      </div>
      <div className={styles.footerContact}>
        <div className={styles.contact}>
          <img className={styles.footerIcon} src={numberIcon} alt={numberAlt} />
          <p className={styles.contactTxt}>{number}</p>
        </div>
        <div className={styles.contact}>
          <img className={styles.footerIcon} src={mailIcon} alt={mailAlt} />
          <p className={styles.contactTxt}>{mail}</p>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <a href="/">About Us</a>
        <a href="/">Jobs</a>
        <a href="/">Press</a>
        <a href="/">Blog</a>
      </div>
      <div className={styles.footerLinks}>
        <a href="/">Contact Us</a>
        <a href="/">Terms</a>
        <a href="/">Privacy</a>
      </div>
      <div className={styles.footerSocials}>
        <a className={styles.social} href="/" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className={styles.social} href="/" aria-label="Twitter">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className={styles.social} href="/" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

