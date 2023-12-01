import React from "react";
import Entries from "../Components/Dashboard/Office/Entries";
import StatusChart from "../Components/Dashboard/Office/StatusChart";

const Office = () => {
  return (
    <div>
      <StatusChart />
      <Entries />
    </div>
  );
};

export default Office;
