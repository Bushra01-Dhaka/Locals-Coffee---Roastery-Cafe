import cafeSign from "../../assets/3.jpg";

const AboutUs = () => {
  return (
    <div className="relative flex justify-center items-center  bg-black text-white px-10 py-40 lg:py-20 lg:px-20">

      <div className="text-center flex flex-col lg:flex-row justify-between items-center">
        {/* right */}
        <div 
        data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
        className="flex-1">
          <h2 className="text-3xl font-style pt-20 lg:text-6xl font-bold uppercase">
            Our Opening Hours
          </h2>
          <p className="py-4  uppercase">
            We are open every day. Thank you for your continued support!
          </p>

          <div className="py-10 flex flex-col justify-center items-center gap-6">
            <button className="btn hover:bg-white hover:text-black transition-all duration-150 cursor-pointer rounded-full p-8 lg:p-10 text-lg lg:text-xl uppercase btn-outline">
              Monday - Friday, 7:00am - 2:00am
            </button>
            <button className="btn hover:bg-white hover:text-black transition-all duration-150 cursor-pointer rounded-full p-8 lg:p-10 text-lg lg:text-xl uppercase btn-outline">
              Saturday & Sunday, 7:30am - 2:00pm
            </button>
          </div>
        </div>
         {/* left */}
         <div 
         data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000" 
         className="flex-1 transition-all">
             <img src={cafeSign} alt="" />
         </div>
      </div>

      {/* <div className="absolute top-0 right-0">
            <img src={cafeSign} alt="" />
         </div> */}
    </div>
  );
};

export default AboutUs;
