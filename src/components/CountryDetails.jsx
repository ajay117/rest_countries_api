import React from "react";
import { Card } from "react-bootstrap";

function CountryDetails({ details }) {
  const obj = details[0];
  // const regionNames = new Intl.DisplayNames(["en"], { type: "language" });
  return (
    <main>
      <div>
        <button onClick={() => window.location.reload()}>Back</button>
      </div>

      {/* flag */}
      <div className="row">
        <img
          src={obj.flags.png}
          className="img-fluid col-lg-4"
          alt={`Flag of ${obj.name.common}`}
        />
        <div className="col-lg-8">
          <h1>{obj.name.common}</h1>
          <div>
            <div>
              <p>
                Native Name: {Object.values(obj.name.nativeName).pop().common}
              </p>
              <p>Population: {obj.population}</p>
              <p>Region: {obj.region}</p>
              <p>Sub Region: {obj.subregion}</p>
              <p>Capital: {obj.capital}</p>
            </div>
            <div>
              <p>Top Level Domain: {obj.tld}</p>
              <p>Currencies: {Object.values(obj.currencies).pop().name}</p>
              <p>Languages: {Object.values(obj.languages).join(" ")}</p>
            </div>
          </div>
          <p>Border Countries: {Object.values(obj.borders).join(" ")}</p>
        </div>
      </div>

      {/* info */}
      {console.log(details)}
    </main>
  );
}

export default CountryDetails;
