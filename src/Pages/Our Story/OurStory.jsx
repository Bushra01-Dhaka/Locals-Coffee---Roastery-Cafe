import { PiCoffeeBold } from "react-icons/pi";
import coffeeImg from "../../assets/6.jpg";
import { AiTwotoneFire } from "react-icons/ai";
import { LiaChairSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";

const OurStory = () => {
  return (
    <div className="flex justify-center items-center min-h-screen lg:py-20 lg:px-20 px-10 ">
      <div>
        <div 
        data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
        className="text-center">
          <h1
          className="text-4xl lg:text-6xl  font-style">
            Our Story & Experience
          </h1>
          <p className="py-2 uppercase">Crafted with passion. Served with purpose.</p>
        </div>

        <div className="py-10 flex flex-col lg:flex-row justify-center items-end">
            {/* left */}
          <div className="flex-1 flex flex-col space-y-4">
            <div 
            data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            className="border-2 w-full lg:w-[500px] p-4 mb-10 rounded-md shadow-2xl hover:bg-linear-to-r from-yellow-900 to-yellow-950 transition-all duration-500 cursor-pointer">
              <PiCoffeeBold className="text-5xl " />
              <h2 className="text-3xl pt-2  font-style">Dedicated to Quality</h2>
              <p className="py-2">
                We craft exceptional coffee and tea using locally sourced,
                high-quality ingredients—fresh, honest, and made with care.
              </p>
            </div>

            <div 
            data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            className="border-2 w-full lg:w-[500px] p-4 mb-10 rounded-md shadow-2xl hover:bg-linear-to-r from-yellow-900 to-yellow-950 transition-all duration-500 cursor-pointer">
              <AiTwotoneFire className="text-5xl " />
              <h2 className="text-3xl pt-2 font-style">Roasted In-House, Always Fresh</h2>
              <p className="py-2">
                Every bean is roasted right here, ensuring rich flavor in every cup—never past its peak.
              </p>
            </div>

            <div 
            data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            className="border-2 w-full lg:w-[500px] p-4 mb-10 rounded-md shadow-2xl hover:bg-linear-to-r from-yellow-900 to-yellow-950 transition-all duration-500 cursor-pointer">
              <LiaChairSolid className="text-5xl " />
              <h2 className="text-3xl pt-2 font-style">Join Us</h2>
              <p className="py-2">
                Your space to relax, connect, and enjoy. Comfortable seating, warm atmosphere, and free Wi-Fi.
              </p>
            </div>

            <div 
            data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            className="border-2 w-full lg:w-[500px] p-4 mb-10 rounded-md shadow-2xl hover:bg-linear-to-r from-yellow-900 to-yellow-950 transition-all duration-500 cursor-pointer">
              <IoFastFoodOutline className="text-5xl " />
              <h2 className="text-3xl pt-2 font-style">More Than Drinks</h2>
              <p className="py-2">
               From handcrafted beverages to fresh savory and sweet bites—perfect for mornings or mid-day breaks.
              </p>
            </div>


          </div>

          {/* right */}
          <div className="flex-1">
            <img src={coffeeImg} alt="" />
          </div>
        </div>






      </div>
    </div>
  );
};

export default OurStory;
