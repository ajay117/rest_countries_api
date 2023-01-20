import React from "react";

function Select({ handleChange, region }) {
  return (
    <select
      onChange={handleChange}
      value={region}
      className="main_select"
      name="region"
    >
      <option value="">Filter by region</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
      <option value="antarctic">Antarctic</option>
    </select>
  );
}

export default Select;
