import React from "react";
import CountryCard from "./CountryCard";
import Input from "./Input";
import Select from "./Select";
import data from "../../data";

function Main() {
    
  return (
    <main className="main">
      <div className="flex input">
        <Input />
        <Select />
      </div>
      <CountryCard data={data} />
    </main>
  );
}

export default Main;
