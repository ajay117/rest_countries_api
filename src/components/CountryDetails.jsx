import React from "react";
import { Card } from "react-bootstrap";
import BackArrow from "../assets/arrow-left-thin.svg";

function CountryDetails({ details }) {
  const obj = details[0];
  // const regionNames = new Intl.DisplayNames(["en"], { type: "language" });
  return (
    <main className="container fluid">
      <div className="my-5">
        <button
          type="button"
          className="d-flex align-items-center btn btn-outline-dark px-4"
          onClick={() => window.location.reload()}
        >
          <img style={{ height: 53, width: 36 }} src={BackArrow} />
          <span>Back</span>
        </button>
      </div>

      {/* flag */}
      <div className="row">
        <img
          src={obj.flags.png}
          className="img-fluid col-lg-4 mb-5"
          alt={`Flag of ${obj.name.common}`}
        />
        <div className="col-lg-8">
          <h1>{obj.name.common}</h1>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <b>Native Name:</b>{" "}
                {Object.values(obj.name.nativeName).pop().common}
              </p>
              <p>
                <b>Population</b>: {obj.population}
              </p>
              <p>
                <b>Region</b>: {obj.region}
              </p>
              <p>
                <b>Sub Region:</b> {obj.subregion}
              </p>
              <p>
                <b>Capital</b>: {obj.capital}
              </p>
            </div>
            <div>
              <p>
                <b>Top Level Domain:</b>
                {obj.tld}
              </p>
              <p>
                <b>Currencies:</b> {Object.values(obj.currencies).pop().name}
              </p>
              <p>
                <b>Languages:</b> {Object.values(obj.languages).join(",")}
              </p>
            </div>
          </div>
          <p>
            <b>Border Countries:</b> {obj.borders.join(",")}
          </p>
        </div>
      </div>
    </main>
  );
}

export default CountryDetails;
