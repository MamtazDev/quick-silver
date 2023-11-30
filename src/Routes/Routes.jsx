import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Components/Auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>,
  },
]);
