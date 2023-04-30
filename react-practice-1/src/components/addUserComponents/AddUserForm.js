import React from "react";

//Styling
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  return (
    <form>
      <div className={styles.section}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles.section}>
        <label>Age (Years)</label>
        <input type="number" />
      </div>
      <div className={styles.section}>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;
