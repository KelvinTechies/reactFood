import React from "react";
import { useState } from "react";

function Form() {
  /* const [data, setData] = useState("");
  const [age, setAge] = useState("");
  console.log(age); */

  const [inputs, setInputs] = useState({});
  const HandleSubmit = (e) => {
    // alert(`My name is ${data}`);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  console.log(inputs);
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          id=""
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter Your Age"
          onChange={handleChange}
        />
        <input
          type="email;"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />
        <button onClick={HandleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
