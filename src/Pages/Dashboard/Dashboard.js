import React from "react";
import ProfileDashNav from "../../Components/ProfileDashNav/ProfileDashNav";
import SearchBar from "../../Components/SearchBar/SearchBar";

function Dashboard() {
  return (
    <div className="p-3 pr-10" style={{ width: "calc(100% - 18rem)" }}>
      <ProfileDashNav />
      <div className="flex">
        <div className="w-56 min-h-screen">
          <SearchBar />
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
