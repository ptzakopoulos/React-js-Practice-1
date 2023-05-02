import React, { useState, Fragment, useRef } from "react";

//Styling
import styles from "./AddUserForm.module.css";

//Local Modules
import ErrorMessage from "./ErrorMessage";

const AddUserForm = (props) => {
  // const [userInfo, setUserInfo] = useState({
  //   id: null,
  //   userName: "",
  //   age: null,
  // });

  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(true);

  const userInfo = {
    userName: useRef(),
    age: useRef(),
  };

  let message = "";

  // const onChangeHandler = (e) => {
  //   const input = e.target;
  //   switch (input.name) {
  //     case "username":
  //       setUserInfo((info) => {
  //         return { ...info, userName: input.value.trim() };
  //       });
  //       break;
  //     case "age":
  //       setUserInfo((info) => {
  //         return { ...info, age: input.value };
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const onClickHandler = (e) => {
    e.preventDefault();
    const userName = userInfo.userName.current.value.trim();
    const age = userInfo.age.current.value;
    if (
      // userInfo.userName.current.value.trim().length < 2 ||
      // userInfo.age < 13 ||
      // userInfo.age > 80
      userName.length < 2 ||
      age < 13 ||
      age > 80
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const user = {
        id: null,
        userName: userInfo.userName.current.value.trim(),
        age: userInfo.age.current.value,
      };
      // props.onFormSubmit(userInfo);
      props.onFormSubmit(user);
    }

    switch (true) {
      // case userInfo.userName.trim().length === 0 && !userInfo.age:
      case userName.length === 0 && !age:
        message =
          'Input field "Username" and "Age" are empty. They should be filled.';
        break;
      // case userInfo.userName.trim().length === 0:
      case userName.length === 0:
        message = "You should give a username";
        break;
      // case !userInfo.age:
      case !age:
        message = "You should enter your age";
        break;
      // case userInfo.userName.length < 2:
      case userName.length < 2:
        message = `Your username should contain atleast 2 Characters, you have entered ${userInfo.userName.length} characters.`;
        break;
      // case userInfo.age < 13:
      case age < 13:
        message = `The age should be 13 or greater, you have entered ${userInfo.age}.`;
        break;
      // case userInfo.age > 80:
      case age > 80:
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
              // onChange={onChangeHandler}
              // value={userInfo.userName}
              ref={userInfo.userName}
            />
          </div>
          <div className={styles.section}>
            <label>Age (Years)</label>
            <input
              name="age"
              type="number"
              // onChange={onChangeHandler}
              // value={userInfo.age}
              ref={userInfo.age}
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
