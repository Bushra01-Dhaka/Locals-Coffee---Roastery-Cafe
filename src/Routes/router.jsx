import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Children, Component } from "react";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import CateringSection from "../Pages/CateringSection/CateringSection";
import TestimonialSection from "../Pages/TestimonialSection/TestimonialSection";
import MenuPage from "../Pages/MenuPage/MenuPage";
import SubscribeNow from "../Components/SubscribeNow";
import GiftCard from "../Pages/GiftCard/GiftCard";
import Announcement from "../Pages/Announcement/Announcement";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../Pages/Payment/Payment";
import LocalCoffeeDashboard from "../Pages/Dashboard/LocalCoffeeDashboard";
import UserDashboard from "../Pages/Dashboard/UserDashboard";

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
    },
    {
      path:"/giftCard",
      Component: GiftCard,
    },
    {
      path:"/announcement",
      Component: Announcement
    },
    {
      path:"/login",
      Component: Login,
    },
    {
      path:"/signUp",
      Component: SignUp,
    },
    {
      path:"/payment",
      element: <PrivateRoutes><Payment></Payment></PrivateRoutes>
    }
  ]
  },
  
  {
    path:"/dashboard",
    Component: LocalCoffeeDashboard,
  },
  {
    path:"/userDashboard",
    Component: UserDashboard
  }
  
]);

export default router