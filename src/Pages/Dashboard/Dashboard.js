import React from "react";
import Text from "../../Components/Text/Text";
import user from "../../assets/users/49.jpg";

function Dashboard() {
  return (
    <div className="p-3 pr-10" style={{ width: "calc(100% - 18rem)" }}>
      <div className="flex gap-x-3 items-center justify-end">
        <img src={user} alt="profile" className="rounded-full h-10 w-10" />
        <Text size="lg" weight="bold" className="">
          John Wick
        </Text>
      </div>
    </div>
  );
}

export default Dashboard;
