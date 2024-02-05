import React from "react";
import styles from "./Hero.module.css"

function Hero({ src, alt, heading, body, cta }) {
  return (
    <main>
      <img className={styles.heroImg} src={src} alt={alt} />
      <div className={styles.heroDesc}>
        <h1>{heading}</h1>
        <p>{body}</p>
        <button className={styles.cta}>{cta}</button>
      </div>
    </main>
  );
}
export default Hero;