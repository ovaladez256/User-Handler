import React from "react";
import UserForm from "./UserForm.js";
import "./NewUser.css";
const NewUser = (props) => {
  const onSaveDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.userHandler(userData);
  };
  return (
    <div className="new-user">
      <UserForm onSaveData={onSaveDataHandler} />
    </div>
  );
};

export default NewUser;
