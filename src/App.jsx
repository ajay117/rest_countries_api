import React from "react";
import "../src/stylesheets/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryDetails from "./components/CountryDetails";
import { useState } from "react";

function App() {
  let [details, setDetails] = useState([]);
  let [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    if (darkMode === false) {
      return setDarkMode(true);
    }
    setDarkMode(false);
  };

  const handleClickForDetails = (obj) => {
    // return setDetails();
    let newArr = [];
    newArr.push(obj);
    return setDetails(newArr);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header handleDarkMode={handleDarkMode} />
      {details.length < 1 ? (
        <Main
          handleClickForDetails={handleClickForDetails}
          darkMode={darkMode}
        />
      ) : (
        <CountryDetails details={details} />
      )}
    </div>
  );
}

export default App;
