import React from "react";

function CountryCard({ data }) {
  return (
    <div className="card">
      <img src={data.flags.png} />
      <div className="card-info">
        <h2>{data.name.common}</h2>
        <p>Population: {data.population}</p>
        <p>Region: {data.region}</p>
        <p>Capital: {data.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard;
