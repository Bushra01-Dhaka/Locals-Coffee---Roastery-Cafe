import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const MainLayout = () => {
  return (
    <div>
         <Navbar/>
        <Outlet/>
        <Footer/>
        <ScrollRestoration/>
    </div>
  )
}

export default MainLayout