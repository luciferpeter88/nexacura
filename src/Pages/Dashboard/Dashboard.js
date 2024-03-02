import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import TreatmentList from "../../Components/Dashboard/TreatmentList";
import AvatarMain from "../../Components/Avatar/AvatarMain";

function Dashboard() {
  return (
    <Layout>
      <div className="flex mt-3 h-full">
        <TreatmentList />
        <AvatarMain />
      </div>
    </Layout>
  );
}

export default Dashboard;
