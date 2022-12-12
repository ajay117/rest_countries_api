import React from "react";
import CountryCard from "./CountryCard";
import Input from "./Input";
import Select from "./Select";
import data from "../../data";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [index, setIndex] = useState(5);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [filteredByInputData, setFilteredByInputData] = useState(null);
  let countrydata;

  const handleChange = (e) => {
    if (e.target.name === "region") {
      setRegion(e.target.value);
      setName("");
      setFilteredByInputData([]);
    } else if (e.target.name === "country") {
      let filteredData = data.filter((obj) => {
        return obj.name.common.toLowerCase() === e.target.value.toLowerCase();
      });
      setFilteredByInputData(filteredData);
      setName(e.target.value);
    }
    setIndex(5);
  };

  const handleClick = () => {
    setIndex(index + 5);
  };

  useEffect(() => {
    let link = region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";
    fetch(link)
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
  }, [region]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (filteredByInputData) {
    countrydata = filteredByInputData.map((obj, i) => {
      if (i < index) {
        return <CountryCard key={i} data={obj} />;
      }
    });
  } else {
    countrydata = data.map((obj, i) => {
      if (i < index) {
        return (
          <Col className="mb-3" md={4} lg={3} sm={6} >
            <CountryCard key={i} data={obj} />
          </Col>
        );
      }
    });
  }
  return (
    <main className="main">
      <Container fluid>
        <div className="flex input">
          <Input name={name} handleChange={handleChange} />
          <Select handleChange={handleChange} />
        </div>
      </Container>
      <Container fluid>
        {/* <section className="country-info"> */}
        <Row>{countrydata}</Row>
        {/* </section> */}
      </Container>
      <div className="d-grid gap-2 mx-auto mt-4" style={{"max-width": "1000px"}}>
        <Button onClick={handleClick} variant="primary" size="lg">
          See More
        </Button>
      </div>

      {/* <button onClick={handleClick}>See More</button> */}
    </main>
  );
}

export default Main;
