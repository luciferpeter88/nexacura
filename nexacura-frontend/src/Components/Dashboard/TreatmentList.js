/**
 * The `TreatmentList` function renders a list of treatment components based on data from
 * `treatmentData` with a search bar above it.
 * @returns The `TreatmentList` component is being returned. It includes a `SearchBar` component and
 * maps over the `treatmentData` array to render multiple `TreatmentComponent` components with the data
 * from the `treatmentData` array.
 */
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
