import React from "react";

function TotalResult({ countryData, index }) {
  return (
    <p className="text-end text-secondary">
      {index} of {countryData.length} results.
    </p>
  );
}

export default TotalResult;
