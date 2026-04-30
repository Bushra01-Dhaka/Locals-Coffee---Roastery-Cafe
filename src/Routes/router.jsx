import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Children, Component } from "react";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CateringSection from "../Pages/CateringSection/CateringSection";
import TestimonialSection from "../Pages/TestimonialSection/TestimonialSection";
import MenuPage from "../Pages/MenuPage/MenuPage";
import SubscribeNow from "../Components/SubscribeNow";

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
    },
    {
      path:"/testimonial",
      Component: TestimonialSection,
    },
    {
      path:"/orderMenus",
      Component: MenuPage,
    },
    {
      path:"/subscribeNow",
      Component:SubscribeNow,
    }
  ]
  },
 
  
]);

export default router