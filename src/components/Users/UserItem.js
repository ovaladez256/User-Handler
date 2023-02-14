import React from "react";
import "./UserItem.css";
const UserItem = (props) => {
  return (
    <div className="user-item">
      {props.username} - ({props.age} years old)
    </div>
  );
};

export default UserItem;
