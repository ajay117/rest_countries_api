import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CountryCard({ handleClickForDetails, data }) {
  return (
    <Card
      onClick={() =>
        data.capital
          ? handleClickForDetails(data)
          : alert("Sorry we do not have much info about this one")
      }
      className="card px-0 mx-auto"
    >
      <Card.Img variant="top" src={data.flags.png} />
      <Card.Body className="px-2 py-2">
        <Card.Title className="card-title">{data.name.common}</Card.Title>
        <Card.Text className="card-text">
          <strong>Population</strong>: {data.population}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Region</strong>: {data.region}
        </Card.Text>
        <Card.Text className="card-text">
          <strong>Capital</strong>: {data.capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  // return (
  //   <div className="card">
  //     <img src={data.flags.png} />
  //     <div className="card-info">
  //       <h2>{data.name.common}</h2>
  //       <p>Population: {data.population}</p>
  //       <p>Region: {data.region}</p>
  //       <p>Capital: {data.capital}</p>
  //     </div>
  //   </div>
  // );
}

export default CountryCard;
