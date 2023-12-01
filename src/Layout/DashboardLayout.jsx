import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
