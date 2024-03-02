import React from "react";
import ProfileDashNav from "../../Components/ProfileDashNav/ProfileDashNav";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TreatmentComponent from "../../Components/TreatmentComponent/TreatmentComponent";
import treatmentData from "../../data/treatmentData";

function Dashboard() {
  return (
    <div className="p-3 pr-10" style={{ width: "calc(100% - 18rem)" }}>
      <ProfileDashNav />
      <div className="flex">
        <div className="w-56 border-2 border-green-500 min-h-screen">
          <SearchBar />
          {treatmentData.map((treatment, index) => (
            <TreatmentComponent key={index} text={treatment} />
          ))}
          <TreatmentComponent text="Anxiety disorder" />
        </div>
        <div
          className=" min-h-screen bg-red-500"
          style={{ width: "calc(100% - 14rem)" }}
        ></div>
      </div>
    </div>
  );
}

export default Dashboard;
