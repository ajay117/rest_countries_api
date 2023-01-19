import React from "react";
import CountryCard from "./CountryCard";
import Input from "./Input";
import Select from "./Select";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { Animate } from "react-simple-animate";
import CountryDetails from "./CountryDetails";
import TotalResult from "./TotalResult";

function Main({ handleClickForDetails, darkMode }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [index, setIndex] = useState(4);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let [filteredByInputData, setFilteredByInputData] = useState(null);
  // let [details, setDetails] = useState([]);
  let countryData;

  const handleChange = (e) => {
    if (e.target.name === "region") {
      setRegion(e.target.value);

      setName("");
      // setFilteredByInputData([]);
    } else if (e.target.name === "country") {
      let filteredData;
      filteredData = data.filter((obj) => {
        return obj.name.common
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase());
      });

      setFilteredByInputData(filteredData);
      setRegion("");
      setName(e.target.value);
    }
    setIndex(4);
  };

  const handleClick = () => {
    if (index >= (filteredByInputData ? filteredByInputData.length : 1)) {
      return;
    } else {
      setIndex(index + 4);
    }
  };

  // const handleClickForDetails = () => {
  //   return setDetails(obj);
  // };

  useEffect(() => {
    let link = region
      ? `https://restcountries.com/v3.1/region/${region}`
      : "https://restcountries.com/v3.1/all";
    fetch(link)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          if (region) {
            setFilteredByInputData(result);
          } else {
            setData(result);
            setFilteredByInputData(result);
          }
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
    countryData = filteredByInputData.map((obj, i) => {
      if (i < index) {
        return (
          <Col key={i} className="mb-3" md={4} lg={3} sm={6}>
            <CountryCard
              handleClickForDetails={handleClickForDetails}
              data={obj}
            />
          </Col>
        );
      }
    });
  } else {
    countryData = data.map((obj, i) => {
      if (i < index) {
        return (
          <Col key={i} className="mb-3 " md={4} lg={3} sm={6}>
            <Animate
              play={data}
              duration={2}
              start={{
                opacity: "0.1",
              }}
              end={{ opacity: "1" }}
            >
              <CountryCard
                handleClickForDetails={handleClickForDetails}
                data={obj}
              />
            </Animate>
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
          <Select region={region} handleChange={handleChange} />
        </div>
      </Container>
      <Container fluid className="mt-4">
        <Row>
          {countryData.length < 1 ? (
            <div className="alert alert-warning" role="alert">
              <p className="text-center">
                Sorry! No country found. Please check your input.
              </p>
            </div>
          ) : (
            countryData
          )}
        </Row>

        <TotalResult countryData={countryData} index={index} />

        {countryData.length < 1 ? null : (
          <div
            className="d-grid gap-2 mx-auto mt-4"
            style={{ maxWidth: "1000px" }}
          >
            <Button
              onClick={handleClick}
              variant={darkMode ? "light" : "primary"}
              size="lg"
            >
              See More
            </Button>
          </div>
        )}
      </Container>
    </main>
  );
}

export default Main;
