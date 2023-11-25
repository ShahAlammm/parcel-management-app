import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/HomePage/Dashboard/Admin/AllUsers";
import Bookings from "../Pages/HomePage/Dashboard/User/Bookings";
import MyParcel from "../Pages/HomePage/Dashboard/User/MyParcel";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "myParcel",
        element: <MyParcel></MyParcel>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default Router;
