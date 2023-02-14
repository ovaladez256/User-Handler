import React, { useState } from "react";
import "./UserForm.css";
const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length == 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };
    setEnteredUsername("");
    setEnteredAge("");
    props.onSaveData(userData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-inputs">
          <div className="form-input">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={enteredUsername}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="form-input">
            <label>Age (Years)</label>
            <input
              type="number"
              step="1"
              name="age"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
          <div className="form-actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
