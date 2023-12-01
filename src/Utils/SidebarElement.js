import dashboard from "../assets/dashboard.png";
import inspection from "../assets/inspection.png";
import search from "../assets/search.png";
import newInspection from "../assets/new-inspection.png";
import administration from "../assets/administration.png";
import report from "../assets/report.png";
import entity from "../assets/entities.png";
import company from "../assets/company.png";
import list from "../assets/list.png";

export const sidebarElement = [
  {
    pic: dashboard,
    title: "Dashboard",
    dropdown: false,
  },
  {
    pic: inspection,
    title: "Inspection",
    dropdown: true,
    subtitle: [
      {
        pic: search,
        title: "Search",
      },
      {
        pic: newInspection,
        title: "New Inspection",
      },
    ],
  },
  {
    pic: administration,
    title: "Administration",
    dropdown: true,
    subtitle: [
      {
        pic: entity,
        title: "Entities",
      },
      {
        pic: company,
        title: "Company",
      },
      {
        pic: list,
        title: "Lists",
      },
    ],
  },
  {
    pic: report,
    title: "Reports",
    dropdown: true,
  },
];
