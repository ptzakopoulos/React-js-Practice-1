import React, { useState, Fragment } from "react";

//Styling
import styles from "./AddUserForm.module.css";

//Local Modules
import ErrorMessage from "./ErrorMessage";

const AddUserForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: null,
    userName: "",
    age: null,
  });

  let message = "";

  const onChangeHandler = (e) => {
    const input = e.target;
    switch (input.name) {
      case "username":
        setUserInfo((info) => {
          return { ...info, userName: input.value.trim() };
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
    if (
      userInfo.userName.trim().length < 2 ||
      userInfo.age < 13 ||
      userInfo.age > 80
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.onFormSubmit(userInfo);
    }

    switch (true) {
      case userInfo.userName.trim().length === 0 && !userInfo.age:
        message =
          'Input field "Username" and "Age" are empty. They should be filled.';
        break;
      case userInfo.userName.trim().length === 0:
        message = "You should give a username";
        break;
      case !userInfo.age:
        message = "You should enter your age";
        break;
      case userInfo.userName.length < 2:
        message = `Your username should contain atleast 2 Characters, you have entered ${userInfo.userName.length} characters.`;
        break;
      case userInfo.age < 13:
        message = `The age should be 13 or greater, you have entered ${userInfo.age}.`;
        break;
      case userInfo.age > 80:
        message = `The maximum age is 80 and you have entered ${userInfo.age}.`;
        break;
      default:
        break;
    }
    setErrorMessage(message);
  };

  const onProcceedHandler = (clicked) => {
    setIsValid(true);
  };

  return (
    <>
      {isValid ? (
        <form>
          <div className={styles.section}>
            <label>Username</label>
            <input
              name="username"
              type="text"
              onChange={onChangeHandler}
              value={userInfo.userName}
            />
          </div>
          <div className={styles.section}>
            <label>Age (Years)</label>
            <input
              name="age"
              type="number"
              onChange={onChangeHandler}
              value={userInfo.age}
            />
          </div>
          <div className={styles.section}>
            <button type="submit" onClick={onClickHandler}>
              Add User
            </button>
          </div>
        </form>
      ) : (
        <ErrorMessage message={errorMessage} onProcceed={onProcceedHandler} />
      )}
    </>
  );
};

export default AddUserForm;
