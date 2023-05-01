import React, { useState } from "react";

import styles from "./App.module.css";

//Local Components
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const getNewUser = (newUser) => {
    setUsers((users) => {
      return [newUser, ...users];
    });
  };

  const usersUpdate = (updatedUsers) => {
    setUsers([...updatedUsers]);
  };

  return (
    <div className={styles.App}>
      <AddUser onUserAdd={getNewUser} />
      <UserList users={users} onUsersUpdate={usersUpdate} />
    </div>
  );
}

export default App;
