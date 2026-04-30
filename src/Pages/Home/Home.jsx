import Banner from "../../Components/Banner"
import Marquees from "../../Components/Marquees"
import SubscribeNow from "../../Components/SubscribeNow"
import AboutUs from "../AboutUs/AboutUs"
import Gallery from "../Gallery/Gallery"
import OurStory from "../Our Story/OurStory"
import TestimonialSection from "../TestimonialSection/TestimonialSection"


const Home = () => {
  return (
    <div className="bg-black">
        <Banner/>
        <AboutUs/>
        <OurStory/>
        <Gallery/>
        <Marquees/>
        <TestimonialSection/>
        <SubscribeNow/>
    </div>
  )
}

export default Home