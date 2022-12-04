import React from "react";
import CountryCard from "./CountryCard";
import Input from "./Input";
import Select from "./Select";
import data from "../../data";
import { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(5);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleClick = () => {
    setIndex(index + 5);
  };
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    let countrydata = data.map((obj, i) => {
      if (i < index) {
        return <CountryCard key={i} data={obj} />;
      }
    });

    return (
      <main className="main">
        <div className="flex input">
          <Input />
          <Select />
        </div>
        <section className="country-info">{countrydata}</section>
        <button onClick={handleClick}>See More</button>
      </main>
    );
  }
}

export default Main;
