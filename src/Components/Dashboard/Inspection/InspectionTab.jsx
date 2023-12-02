import insured from "../../../assets/insured.png";
import property from "../../../assets/property.png";
import hazard from "../../../assets/hazard.png";
import outbuilding from "../../../assets/outbuilding.png";
import attachment from "../../../assets/attachments.png";
import action from "../../../assets/action.png";
import history from "../../../assets/history.png";
import "./Inspection.css";
import Insured from "./Insured";
import { useState } from "react";
import Property from "./Property";

const InspectionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      pic: insured,
      title: "Insured",
    },
    {
      pic: property,
      title: "Property",
    },
    {
      pic: hazard,
      title: "Hazards",
    },
    {
      pic: outbuilding,
      title: "Outbuildings",
    },
    {
      pic: attachment,
      title: "Attachments",
    },
    {
      pic: action,
      title: "Actions",
    },
    {
      pic: history,
      title: "History Logs",
    },
  ];
  return (
    <div>
      <div className="inspection_tab">
        {tabs.map((data, index) => (
          <div
            onClick={() => setActiveTab(index)}
            style={{ cursor: "pointer" }}
            className="d-flex gap-1 align-items-center tab fs-6 "
            key={index}
          >
            <img src={data.pic} alt="" />
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      <div className="inspection_body">
        {activeTab === 0 && <Insured />}
        {activeTab === 1 && <Property />}
        </div>
    </div>
  );
};

export default InspectionTab;
