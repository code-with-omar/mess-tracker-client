import { createBrowserRouter } from "react-router-dom";

import Login from "../Pages/Main/Login/Login";
import SignUp from "../Pages/Main/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRouter from "./PrivateRoute";
import AllMembers from "../Pages/Main/AllMembers/Allmembers";
import AddMeals from "../Pages/Main/Addmeals/Addmeals";
import AdminHome from "../Pages/Main/AdminHome/AdminHome";
import Deposit from "../Pages/Main/Deposit/Deposit";
import AddBazar from "../Pages/Main/AddBazar/AddBazar";
import BazarDetails from "../Pages/Main/BazarDetails/BazarDetails";
import UserDetails from "../Pages/Main/UserDetails/UserDetails";
import MealDetails from "../Pages/Main/MealDetails/MealDetails";
import UserMealDetails from "../Pages/Main/UserMealDetails/UserMealDetails";
import CloseMangerActivity from "../Pages/Main/closeMangerActivity/closeMangerActivity";

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
        path: "/",
        element: <></>
      },
      {
        path: "allMembers",
        element: <AllMembers></AllMembers>
      },
      {
        path: "addMeals",
        element: <AddMeals></AddMeals>
      },
      {
        path: "admin/home",
        element: <AdminHome></AdminHome>
      },
      {
        path: "admin/deposit",
        element: <Deposit></Deposit>
      },
      {
        path: "/bazar",
        element: <AddBazar></AddBazar>
      },
      {
        path: "/bazarDetails",
        element: <BazarDetails></BazarDetails>
      },
      {
        path: "/details/:email",
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/mealDetails",
        element: <MealDetails></MealDetails>
      },
      {
        path: "/userMeal/:email",
        element: <UserMealDetails></UserMealDetails>
      },
      {
        path:"/closeMangerActivity",
        element:<CloseMangerActivity></CloseMangerActivity>
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
