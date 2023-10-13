import React from "react";
import Garage from "../Car/Garage";

const Person = (prop) => {
  return (
    <div>
      {prop.name} is a full stack Develpoer
      <p>He is {prop.color} in complexion</p>
      <Garage />
    </div>
  );
};

export default Person;
