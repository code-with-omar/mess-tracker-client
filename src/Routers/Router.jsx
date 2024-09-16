import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Main/Login/Login";
import SignUp from "../Pages/Main/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRouter from "./PrivateRoute";
import AllMembers from "../Pages/Main/AllMembers/Allmembers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Dashboard />
      </PrivateRouter>
    ),
    children: [
    {
      path:"/",
      element:<></>
    },
    {
      path:"/allMembers",
      element:<AllMembers></AllMembers>
    }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);
