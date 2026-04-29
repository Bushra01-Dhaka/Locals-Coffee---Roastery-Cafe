import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Children, Component } from "react";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CateringSection from "../Pages/CateringSection/CateringSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
    { 
      path:"/",
      Component: Home,
    },
    {
      path:"/contactUs",
      Component: AboutUs,
    },
    {
      path:"/catering",
      Component: CateringSection,
    }
  ]
  },
 
  
]);

export default router