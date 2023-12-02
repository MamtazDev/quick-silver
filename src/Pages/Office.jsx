import React, { useState } from "react";
import Entries from "../Components/Dashboard/Office/Entries";
import StatusChart from "../Components/Dashboard/Office/StatusChart";
import Map from "../Components/Dashboard/Office/Map";

const Office = () => {
  const [selectedDashboard, setSelectedDashboard] =
    useState("Office Dashboard");

  const handleDashboardChange = (event) => {
    setSelectedDashboard(event.target.value);
  };
  return (
    <div>
      <div className="text-end mt-4 me-5 mb-4">
        <select onChange={handleDashboardChange}>
          <option disabled selected>
            Select Dashboard
          </option>
          <option>Office Dashboard</option>
          <option>Location Dashboard</option>
        </select>
      </div>
      {selectedDashboard === "Office Dashboard" && <StatusChart />}
      {selectedDashboard === "Location Dashboard" && <Map />}
      <Entries />
    </div>
  );
};

export default Office;
