import React from "react";
import Login from "../component/Login";
import SignUp from "../component/SignUp";
const Account = () => {
  let user = undefined;
  const list = () => {
    if (user) {
      return <div>{/* {<Signout/>}  {<Main/>} */}</div>;
    } else {
      return (
        <div>
          {" "}
          {<Login />} {<SignUp />}{" "}
        </div>
      );
    }
  };
  return <div>Home Page Data{list()}</div>;
};
export default Account;
