import React, { useState } from "react";
import styles from "./Signup.module.css";

function Signup({ header, body, input, button }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className={styles.signupWrapper}>
      <div className={styles.signupDesc}>
        <h2 className={styles.signupHeader}>{header}</h2>
        <p className={styles.signupBody}>{body}</p>
      </div>
      <input
        className={styles.signupEmail}
        type="email"
        name="email"
        placeholder={input}
        value={email}
        onChange={handleChange}
      />
      {!isValidEmail && email !== "" && (
        <p className={styles.error}>Please enter a valid email address</p>
      )}
      <button className={styles.signupBtn} type="submit">
        {button}
      </button>
    </section>
  );
}

export default Signup;
