import React from "react";
import NewInspectionHeader from "../Components/Dashboard/Inspection/NewInspectionHeader";
import InspectionTable from "../Components/Dashboard/Inspection/InspectionTable";
import InspectionTab from "../Components/Dashboard/Inspection/InspectionTab";

const NewInspection = () => {
  return (
    <div>
      <NewInspectionHeader />
      <InspectionTable />
      <InspectionTab />
    </div>
  );
};

export default NewInspection;
