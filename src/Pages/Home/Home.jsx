import Banner from "../../Components/Banner"
import AboutUs from "../AboutUs/AboutUs"
import Gallery from "../Gallery/Gallery"
import OurStory from "../Our Story/OurStory"


const Home = () => {
  return (
    <div className="bg-black">
        <Banner/>
        <AboutUs/>
        <OurStory/>
        <Gallery/>
    </div>
  )
}

export default Home