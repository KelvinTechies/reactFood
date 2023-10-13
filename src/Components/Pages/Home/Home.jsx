import React from "react";
import Car from "../Car/Car";

const Home = () => {
  const newCar = <Car brand="Lexus" model="es570" />;
  return (
    <div>
      <h1>My First React Components</h1>
      {newCar}
    </div>
  );
};

export default Home;
