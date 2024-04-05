/**
 * The Dashboard function renders a layout with an AvatarMain component inside.
 * @returns The `Dashboard` component is being returned. It includes a `Layout` component wrapping a
 * `div` element with the class name "flex mt-3 h-full". Inside the `div`, there is a commented out
 * component `<TreatmentList />` and an `AvatarMain` component.
 */
import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import AvatarMain from "../../Components/Avatar/AvatarMain";

function Dashboard() {
  return (
    <Layout>
      <div className="flex mt-3 h-full">
        {/* <TreatmentList /> */}
        <AvatarMain />
      </div>
    </Layout>
  );
}

export default Dashboard;
