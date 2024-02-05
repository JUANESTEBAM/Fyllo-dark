import React from "react";
import styles from "./feature.module.css";

function Features({ icon, alt, heading, body }) {
  return (
    <article className={styles.feat}> 
      <img className={styles.featIcon} src={icon} alt={alt} />
      <h2 className={styles.featHeading}>{heading}</h2>
      <p className={styles.featBody}>{body}</p>
    </article>
  );
}
export default Features;