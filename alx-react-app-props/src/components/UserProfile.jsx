import React from "react";
import { createContext } from "react";
import { useContext } from "react";

function UserProfile() {
  const UserContext = createContext();
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}
export default UserProfile;
