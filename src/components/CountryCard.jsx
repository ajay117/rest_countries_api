import React from "react";

function CountryCard({ data }) {
  return (
    <div className="card">
      <img src={data[0].flags.png} />
      <div className="card-info">
        <h2>{data[0].name.common}</h2>
        <p>Population: {data[0].population}</p>
        <p>Region: {data[0].region}</p>
        <p>Capital: {data[0].capital}</p>
      </div>
    </div>
  );
}

export default CountryCard;
