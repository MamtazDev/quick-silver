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

export const officeEntries = [
  {
    entryDate: "10/29/2023",
    dueDate: "11/3/2023",
    assigned: "Unassigned",
    insured: "Jason Mead",
    address: "123 4th Ave E, Benton, MS 29834   ",
    phone: "(347) 192-2912",
    status: "Unassigned",
  },
  {
    entryDate: "10/29/2023",
    dueDate: "11/3/2023",
    assigned: "Unassigned",
    insured: "Miranda Williams",
    address: "186 Arlington Lane, Mayberry, SC 29384",
    phone: "(614) 382-4133",
    status: "Unassigned",
  },
  {
    entryDate: "10/29/2023",
    dueDate: "11/3/2023",
    assigned: "Unassigned",
    insured: "Ralph Jacobs",
    address: "14 South 8th Street, Happy Hills, IL 28473",
    phone: "(983) 284-2984",
    status: "Unassigned",
  },
  {
    entryDate: "10/29/2023",
    dueDate: "11/3/2023",
    assigned: "Unassigned",
    insured: "George Matson",
    address: "1238 Billings Ave, Efforton, CA 83745",
    phone: "(848) 183-7629",
    status: "Unassigned",
  },
  {
    entryDate: "10/29/2023",
    dueDate: "11/3/2023",
    assigned: "Unassigned",
    insured: "Pam Sparks",
    address: "3404 9th Ave East, Warren, PA 41334",
    phone: "(616) 941-1506",
    status: "Unassigned",
  },
];