import { createBrowserRouter, redirect } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Homepublic from "../pages/Homepublic";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Employee from "../pages/Employee";
import AddTransaction from "../pages/AddTransaction";
import GeminiAI from "../pages/GeminiAI";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepublic />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) throw redirect("/home");
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) throw redirect("/home");
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) throw redirect("/home");
      return null;
    },
  },
  {
    path: "/",
    element: <RootLayout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) throw redirect("/login");
      return null;
    },
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "employee",
        element: <Employee />,
      },
      {
        path: "addtransaction",
        element: <AddTransaction />,
      },
      {
        path: "geminiAI",
        element: <GeminiAI />,
      },
    ],
  },
]);
