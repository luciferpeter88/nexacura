import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TreatmentComponent from "../TreatmentComponent/TreatmentComponent";
import treatmentData from "../../data/treatmentData";

function TreatmentList() {
  return (
    <div className="w-56 pb-10  h-full overflow-scroll pr-3">
      <SearchBar />
      {treatmentData.map((treatment, index) => (
        <TreatmentComponent key={index} text={treatment} />
      ))}
    </div>
  );
}

export default TreatmentList;
