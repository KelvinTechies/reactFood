import React from "react";

const AddEventListener = () => {
  const ClickHandler = () => {
    alert("Its Working");
  };
  const isAgoal = true;

  const Truthy = () => {
    if (isAgoal) {
      alert("He kicked the ball and Scored the Goal");
    } else {
      alert("He kicked the ball buh, Missed the goal");
    }
  };

  const conditional = true;

  return (
    <div>
      <button onClick={Truthy}>Shoot</button>
      <p>{conditional ? "Its a Truthy Value" : "Its a Falsy Value"}</p>
    </div>
  );
};

export default AddEventListener;
