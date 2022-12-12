import React from "react";
import "../src/stylesheets/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
