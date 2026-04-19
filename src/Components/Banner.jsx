import logo from "../assets/logo.webp";
import bannerImg from "../assets/2.jpg";
import cafePhoto from "../assets/3.jpg";
import cafeOutdoorPhoto from "../assets/7.jpg";

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
          <div className="bg-white relative z-10 shadow-2xl shadow-black  rounded-full w-[300px] h-[300px]">
            <img className="mx-auto pt-10 p-4" src={logo} alt="" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-5 top-30">
        <img className=" w-[400px]" src={cafePhoto} alt="" />
      </div>

      <div className="hidden lg:block absolute left-10 top-0">
        <img
          className=" h-[400px] w-[400px] object-cover "
          src={cafeOutdoorPhoto}
          alt=""
        />
      </div>

      <div className="absolute top-80 lg:left-0 z-3 ">
        <h2 className="text-2xl p-4 lg:p-6 lg:text-5xl font-bold uppercase lg:w-[700px] text-center mx-auto lg:text-start pt-20 bg-black text-white lg:pt-30 lg:leading-[1.2]">
          We are open! <br />
          Come try our express drive-thru <br />
          800 E. WILLOW GROVE AVE
        </h2>
      </div>


    </div>
  );
};

export default Banner;
