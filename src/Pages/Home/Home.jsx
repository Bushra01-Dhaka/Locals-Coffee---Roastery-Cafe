import Banner from "../../Components/Banner"
import AboutUs from "../AboutUs/AboutUs"
import OurStory from "../Our Story/OurStory"


const Home = () => {
  return (
    <div className="bg-black">
        <Banner/>
        <AboutUs/>
        <OurStory/>
    </div>
  )
}

export default Home