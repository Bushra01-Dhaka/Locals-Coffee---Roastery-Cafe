import logo from "../assets/logo.webp";
import bannerImg from "../assets/2.jpg";
import cafePhoto from "../assets/3.jpg";
import cafeOutdoorPhoto from "../assets/7.jpg";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div
      className="relative flex bg-black  text-center justify-center items-center min-h-screen bg-no-repeat bg-cover bg-blend-50"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div>
        <div>
          <div 
          data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
          className="bg-white relative z-10 shadow-2xl shadow-black  rounded-full w-[300px] h-[300px]">
            <img className="mx-auto pt-10 p-4" src={logo} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-5 top-50">
        <img className=" w-[400px]" src={cafePhoto} alt="" />
      </div>

      <div className="hidden lg:block absolute left-10 top-0">
        <img
          className=" h-[400px] w-[400px] object-cover "
          src={cafeOutdoorPhoto}
          alt=""
        />
      </div>

      <div 
      data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1200"
      className="absolute bg-yellow-950 top-80 lg:left-0 z-3 ">
        <h2 className="text-2xl p-4 lg:p-6 lg:text-5xl font-bold uppercase lg:w-[700px] text-center mx-auto lg:text-start pt-20  text-white lg:pt-20 lg:leading-[1.2] font-style">
          We are open! <br />
          Come try our express drive-thru <br />
          <span className=""> 800 E. WILLOW GROVE AVE</span>
        </h2>
          <div className="py-4 flex justify-start pl-6">
            <button className="btn hover:bg-white hover:text-black transition-all duration-150 cursor-pointer rounded-full text-xl uppercase btn-outline mb-4">
             Order Online <MdArrowOutward className="inline text-xl" />
            </button>
          </div>
      </div>


    </div>
  );
};

export default Banner;
