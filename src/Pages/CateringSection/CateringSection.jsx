import React from "react";
import cateringImg from "../../assets/17.png";
import { MdArrowOutward } from "react-icons/md";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

const CateringSection = () => {
  return (
    <section
      className="relative min-h-[100vh] bg-fixed  px-6 md:px-10 lg:px-16"
      style={{
        backgroundImage: `url(${cateringImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      {/* Floating content card */}
      <div 
      data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
      className="relative z-10 max-w-3xl text-center my-20 bg-black/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <span className="mb-4 inline-block text-sm uppercase tracking-[0.3em] text-white/60">
          Catering Service
        </span>

        <h2 className="mb-6 font-style text-3xl md:text-5xl font-semibold leading-tight text-white">
          Let us cater your next event
        </h2>

        <p className="mb-5 text-white/70 text-base md:text-lg leading-8">
          Whether it’s an intimate gathering of 10 or a celebration of 200,
          we serve handcrafted coffee, fresh sandwiches, bagels, and more—
          designed to make every event memorable.
        </p>

        <p className="mb-8 text-white/70 text-base md:text-lg leading-8">
          Our catering menu reflects the same locally crafted flavors you
          love in our café—fresh, thoughtful, and beautifully served.
        </p>

        <button className="group  rounded-full border border-white px-7 py-4 font-style lg:text-xl uppercase tracking-wider text-white transition duration-300 hover:bg-white hover:text-black my-6">
          Contact us about catering
          <MdArrowOutward className="ml-2 inline text-xl transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
      </div>

      {/* testimonial section */}
      <div>
        <TestimonialSection/>
      </div>

    </section>
  );
};

export default CateringSection;