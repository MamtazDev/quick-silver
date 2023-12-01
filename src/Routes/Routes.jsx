import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Auth/SignIn";
import SignUp from "../Components/Auth/SignUp";
import ValidEmail from "../Pages/ValidEmail";
import ValidCell from "../Pages/ValidCell";
import DashboardLayout from "../Layout/DashboardLayout";
import Office from "../Pages/Office";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/validate-email",
    element: <ValidEmail />,
  },
  {
    path: "/validate-cell",
    element: <ValidCell />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/office",
        element: <Office />,
      },
    ],
  },
]);
