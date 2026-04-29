import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Event Organizer",
    text: "Absolutely loved the catering! The coffee was exceptional and the food was fresh and beautifully presented. Our guests were impressed.",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Local Customer",
    text: "This is my go-to cafe. The atmosphere, the people, and the quality of coffee make it a perfect place to relax or work.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Business Owner",
    text: "We hired them for a corporate event and everything was flawless. Professional service and amazing taste.",
  },
];

const TestimonialSection = () => {
  return (
    <section 
    data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
    className="bg-black py-20 rounded-t-2xl px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-white/60 uppercase tracking-[0.3em] text-sm">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-6xl font-style text-white mt-4">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:translate-y-[-5px] transition duration-300"
          >
            <p className="text-white/80 leading-7 mb-6">“{item.text}”</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#6f4e37] flex items-center justify-center text-white font-semibold">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-semibold">{item.name}</h4>
                <p className="text-white/50 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
