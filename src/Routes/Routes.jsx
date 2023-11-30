import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Auth/SignIn";
import SignUp from "../Components/Auth/SignUp";
import ValidEmail from "../Pages/ValidEmail";
import ValidCell from "../Pages/ValidCell";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
  },
  {
    path: "/validate-email",
    element: <ValidEmail/>,
  },
  {
    path: "/validate-cell",
    element: <ValidCell/>,
  },
]);
