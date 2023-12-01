import React from "react";
import "./Office.css";
import { officeEntries } from "../../../Utils/SidebarElement";

const Entries = () => {
  return (
    <div>
      <table className="fs_14">
        <thead>
          <tr>
            <th>Entry Date</th>
            <th>Due Date</th>
            <th>Assigned To</th>
            <th>Insured</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {officeEntries.map((data, index) => (
            <tr key={index}>
              <td className="date">{data.entryDate}</td>
              <td>{data.dueDate}</td>
              <td>{data.assigned}</td>
              <td>{data.insured} </td>
              <td>{data.address}</td>
              <td>{data.phone}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Entries;