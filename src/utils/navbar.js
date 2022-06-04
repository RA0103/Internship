import React from "react";
import Generic from "../pages/Generic";
import Home from "../pages/Home";
import Detailes from "../pages/Detailes";
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <Properties />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: "2-1",
    title: "Properties",
    path: "/properties/:id",
    Element: <Detailes />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/signin",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
  {
    id: 5,
    title: "Sign Up",
    path: "/signup",
    Element: <Generic />,
    search: "?",
    hidden: true,
    private: false,
    param: true,
  },
];
