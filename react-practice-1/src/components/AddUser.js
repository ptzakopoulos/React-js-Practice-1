import React, { useState } from "react";

//Styling
import styles from "./AddUser.module.css";

//Local Components
import AddUserForm from "./addUserComponents/AddUserForm";

const AddUser = () => {
  const [userInfo, setUserInfo] = useState([]);

  return (
    <div className={styles.addUserField}>
      <AddUserForm />
    </div>
  );
};

export default AddUser;
