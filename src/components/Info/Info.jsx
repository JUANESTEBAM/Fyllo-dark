import React from "react";
import styles from "./Info.module.css";

function Info({ src, alt, heading, body1, body2, more }) {
  return (
    <section className={styles.infoWrapper}> {/* Usa la clase de estilo desde el módulo CSS */}
      <img className={styles.infoImg} src={src} alt={alt} />
      <div className={styles.infoDesc}>
        <h2 className={styles.infoHeading}>{heading}</h2>
        <p className={styles.infoBody}>{body1}</p>
        <p className={styles.infoBody}>{body2}</p>
        <a className={styles.infoMore} href="">
          {more}
        </a>
      </div>
    </section>
  );
}
export default Info;