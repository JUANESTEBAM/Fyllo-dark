import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials({ quote, picture, customer, position }) {
  return (
    <article className={styles.testim}>
      <p className={styles.testimQuote}>{quote}</p>
      <div className={styles.testimProfile}>
        <img
          src={picture}
          alt={"Profile picture of " + customer}
          className={styles.testimPicture}
        />
        <h6 className={styles.testimCustomer}>{customer}</h6>
        <p className={styles.testimPosition}>{position}</p>
      </div>
    </article>
  );
}

export default Testimonials;
