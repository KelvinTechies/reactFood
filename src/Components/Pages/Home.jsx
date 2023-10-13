import React, { useState } from "react";

function Home() {
  const myStyle = {
    color: "red",
    backgroundColor: "Grey",
    fontSize: "30px",
  };

  const [color, setColor] = useState("blue");
  const [name, setName] = useState("John");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Lexus",
    year: "1964",
    color: "red",
  });

  const clickEvent = () => {
    setColor("red");
  };

  function CLickInputButton(e) {
    e.preventDefault();
    setName("Osas");
    alert(name);
  }

  const updateFunction = (e) => {
    e.preventDefault();
    setCar((previousItem) => {
      return { ...previousItem, color: "black", model: "Masserati" };
    });
  };
  return (
    <div>
      <h1
        style={{
          color: "white",
          backgroundColor: "green",
        }}
      >
        Home Components
      </h1>
      <p style={myStyle}>This is styling with JavaScript Object</p>
      <button onClick={clickEvent}>Change Color</button>
      <p>My fave Color is {color}</p>

      <form action="">
        <input type="text" placeholder="Enter Username" value={name} />
        <input type="email" placeholder="Enter Email" />
        <button onClick={CLickInputButton}>change name</button>
      </form>

      <p>
        The name of My Car is {car.brand} from model {car.model} i love the{" "}
        {car.color} as the color of the Car, and it was made in the year{" "}
        {car.year}
      </p>

      <button onClick={updateFunction}>updateFunctionCall</button>
    </div>
  );
}

export default Home;
