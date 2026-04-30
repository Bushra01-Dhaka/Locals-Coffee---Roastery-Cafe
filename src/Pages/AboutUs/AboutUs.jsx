import cafeSign from "../../assets/3.png";
import SubscribeNow from "../../Components/SubscribeNow";

const AboutUs = () => {
  return (
    <div className="relative flex justify-center items-center  bg-black text-white px-10 py-40 lg:py-20 lg:px-20">
      <div>

        <div className="text-center flex flex-col lg:flex-row justify-between items-center">
          {/* right */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="flex-1"
          >
            <div className="pt-20 flex flex-col justify-center items-center gap-8">
              <div className="p-4">
                <h2 className="text-4xl lg:text-5xl font-style uppercase">
                  Locals Coffee - Roastery & Cafe
                </h2>
                <p className="py-4 text-white/40 uppercase">
                  800 E Willow Grove Ave, Wyndmoor, Pennsylvania 19038, United
                  States
                </p>
              </div>
              <div className="p-4">
                <h2 className="text-4xl lg:text-5xl font-style uppercase">
                  We look forward to serving you!
                </h2>
                <p className="py-4 text-white/40 uppercase">
                  Please feel free to send us a message, and we will get back to
                  you as soon as possible.
                </p>
              </div>
            </div>

            <h1 className="text-5xl pt-8 font-style lg:text-6xl  uppercase">
              Our Opening Hours
            </h1>
            <p className="py-4 text-white/40  uppercase">
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
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            className="flex-1 transition-all"
          >
            <img src={cafeSign} alt="" />
          </div>
        </div>

        {/* <SubscribeNow/> */}

      </div>
    </div>
  );
};

export default AboutUs;
