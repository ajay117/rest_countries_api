import React from "react";
import Input from "./Input";
import Select from "./Select";

function Main() {
  return (
    <main className="main">
      <div className="flex input">
        <Input />
        <Select />
      </div>
    </main>
  );
}

export default Main;
