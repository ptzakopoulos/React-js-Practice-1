import React, { useState } from "react";

//Styling
import styles from "./AddUser.module.css";

//Local Components
import AddUserForm from "./addUserComponents/AddUserForm";

const AddUser = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const onFormSubmitHandler = (userData) => {
    const extractedUserData = { ...userData, id: Math.random() };
    props.onUserAdd(extractedUserData);
    setIsAdding(false);
  };

  const onNewUserClickHander = () => {
    setIsAdding(true);
  };

  return (
    <div className={styles.addUserField}>
      {isAdding ? (
        <AddUserForm onFormSubmit={onFormSubmitHandler} />
      ) : (
        <button
          onClick={onNewUserClickHander}
          className={styles.newUser}
          type="button"
        >
          New User
        </button>
      )}
    </div>
  );
};

export default AddUser;
