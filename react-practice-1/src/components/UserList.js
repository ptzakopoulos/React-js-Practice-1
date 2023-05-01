import React, { useState } from "react";

import styles from "./UserList.module.css";

//Local Modules
import User from "./userComponents/User";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  users.length < props.users.length && setUsers(() => [...props.users]);

  const onUserDeleteHandler = (userId) => {
    const updatedUsers = users.filter((user) => {
      return user.id !== userId;
    });
    setUsers([...updatedUsers]);
    props.onUsersUpdate(updatedUsers);
  };

  const onEditHandler = (user) => {
    const index = users.findIndex((u) => {
      return u.id === user.id;
    });
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1, user);
    setUsers(...updatedUsers);
  };

  return (
    <div className={styles.list}>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <User
              key={user.id}
              id={user.id}
              userName={user.userName}
              age={user.age}
              onDelete={onUserDeleteHandler}
              onEdit={onEditHandler}
            />
          );
        })
      ) : (
        <h1>No Users Found</h1>
      )}
    </div>
  );
};

export default UserList;
