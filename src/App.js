import React, { useState } from "react";
import { RadioButton } from "./RadioButton";

export default function App() {
  const [gender, setGender] = useState("");

  const radioChangeHandler = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={gender === "Male"}
          label="Male"
          value="Male"
        />

        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={gender === "Female"}
          label="Female"
          value="Female"
        />
      </div>
      <h2 style={{ marginTop: "25px" }}>
        The selected radio button value is = {gender}
      </h2>
    </div>
  );
}
