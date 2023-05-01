import React, { useState } from "react";

//Styling
import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    userName: "",
    age: 0,
  });

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

  const onClickHandler = (e) => {
    e.preventDefault();
    props.onFormSubmit(userInfo);
  };

  return (
    <form>
      <div className={styles.section}>
        <label>Username</label>
        <input name="username" type="text" onChange={onChangeHandler} />
      </div>
      <div className={styles.section}>
        <label>Age (Years)</label>
        <input name="age" type="number" onChange={onChangeHandler} />
      </div>
      <div className={styles.section}>
        <button type="submit" onClick={onClickHandler}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
