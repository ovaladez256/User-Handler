import React from "react";
import UserItem from "./UserItem";
import "./Users.css";
const Users = (props) => {
  const { usersDB } = props;
  return (
    <div className="users-list">
      {usersDB.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age} />
      ))}
    </div>
  );
};

export default Users;
