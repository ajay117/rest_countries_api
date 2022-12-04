import React from "react";

function Select() {
  return (
    <select className="main_select" name="country">
      <option value="" disabled>
        Filter by region
      </option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}

export default Select;