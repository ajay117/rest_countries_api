import React from "react";

function Input({ handleChange, name }) {
  return (
    <input
      onChange={handleChange}
      name="country"
      className="main_input"
      type="text"
      placeholder="Search for a country"
      value={name}
    />
  );
}

export default Input;
