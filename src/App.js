import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
const dummyData = [
  {
    username: "matt",
    age: "23",
    id: "d1",
  },
  {
    username: "doglover123",
    age: "25",
    id: "d2",
  },
];
function App() {
  const [userDataBase, setUserDataBase] = useState(dummyData);
  console.log(userDataBase);
  const userDataHandler = (userData) => {
    setUserDataBase((prevDataBase) => {
      return [userData, ...prevDataBase];
    });
  };
  return (
    <div>
      <NewUser userHandler={userDataHandler} />
      <Users usersDB={userDataBase} />
    </div>
  );
}

export default App;
