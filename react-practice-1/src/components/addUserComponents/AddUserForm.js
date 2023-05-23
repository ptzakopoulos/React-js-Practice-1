import React, { useState, Fragment, useRef } from "react";

//Styling
import styles from "./AddUserForm.module.css";

//Local Modules
import ErrorMessage from "./ErrorMessage";

const AddUserForm = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userInfo = {
    userName: useRef(),
    age: useRef(),
  };

  let message = "";

  const onClickHandler = (e) => {
    e.preventDefault();
    const userName = userInfo.userName.current.value.trim();
    const age = userInfo.age.current.value;
    const validation = userName.length < 2 || age < 13 || age > 80;
    if (validation) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const user = {
        id: null,
        userName: userInfo.userName.current.value.trim(),
        age: userInfo.age.current.value,
      };
      props.onFormSubmit(user);
    }

    switch (true) {
      case userName.length === 0 && !age:
        message =
          'Input field "Username" and "Age" are empty. They should be filled.';
        break;
      case userName.length === 0:
        message = "You should give a username";
        break;
      case !age:
        message = "You should enter your age";
        break;
      case userName.length < 2:
        message = `Your username should contain atleast 2 Characters, you have entered ${userInfo.userName.length} characters.`;
        break;
      case age < 13:
        message = `The age should be 13 or greater, you have entered ${userInfo.age}.`;
        break;
      case age > 80:
        message = `The maximum age is 80 and you have entered ${userInfo.age}.`;
        break;
      default:
        break;
    }
    setErrorMessage(message);
  };

  const onProcceedHandler = () => {
    setIsValid(true);
  };

  return (
    <>
      {isValid ? (
        <form>
          <div className={styles.section}>
            <label>Username</label>
            <input name="username" type="text" ref={userInfo.userName} />
          </div>
          <div className={styles.section}>
            <label>Age (Years)</label>
            <input name="age" type="number" ref={userInfo.age} />
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
