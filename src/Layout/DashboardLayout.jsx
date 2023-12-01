import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header";

const DashboardLayout = () => {
  return (
    <div className="d-flex">
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      <div className="w-100">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
