import React from "react";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  const clickHandler = () => {
    props.onProcceed();
  };
  return (
    <div className={styles.errorField}>
      <article className={styles.errorMessage}>{props.message}</article>
      <div className={styles.backButton} type="button" onClick={clickHandler}>
        Back
      </div>
    </div>
  );
};

export default ErrorMessage;
