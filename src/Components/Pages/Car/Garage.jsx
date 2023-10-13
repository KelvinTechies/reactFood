import React from "react";

const Garage = () => {
  var items = [
    1,
    2,
    3,
    4,
    "Flutter",
    "ReactNative",
    "Express.js",
    "Node.js",
    1,
    0,
    null,
    3.2,
    5.2,
  ];
  return (
    <div>
      {items.map((item) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default Garage;
