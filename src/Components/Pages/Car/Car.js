import React from "react";
import Person from "../Person/Person";

const Car = (obj) => {
  return (
    <div>
      This is the latest {obj.brand}
      <div>
        <Person name="Osas" color="dark" />
      </div>
    </div>
  );
};

export default Car;
