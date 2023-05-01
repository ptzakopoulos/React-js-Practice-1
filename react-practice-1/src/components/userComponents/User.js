import React, { useState } from "react";

import styles from "./User.module.css";

const User = (props) => {
  const [iseEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({ ...props });

  const onDeleteHandler = () => {
    props.onDelete(userInfo.id);
  };

  const onEditHandler = () => {
    setIsEditing(true);
  };

  const onSaveHandler = () => {
    setIsEditing(false);
  };

  const onChangeHandler = (e) => {
    const input = e.target;
    switch (input.name) {
      case "username":
        setUserInfo((info) => {
          return { ...info, userName: input.value };
        });
        break;
      case "age":
        setUserInfo((info) => {
          return { ...info, age: input.value };
        });
        break;
      default:
        break;
    }
  };

  if (iseEditing) {
    return (
      <div className={styles.user} title={userInfo.id}>
        <input
          type="text"
          name="username"
          className={styles.userName}
          value={userInfo.userName}
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="age"
          className={styles.userAge}
          value={userInfo.age}
          onChange={onChangeHandler}
        />
        <button
          className={styles.deleteButton}
          type="button"
          onClick={onSaveHandler}
        >
          Save
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.user} title={userInfo.id}>
        <div className={styles.userName}>{userInfo.userName}</div>
        <div className={styles.userAge}>{userInfo.age}</div>
        <button onClick={onEditHandler}>Edit</button>
        <button
          className={styles.deleteButton}
          type="button"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </div>
    );
  }
};

export default User;
