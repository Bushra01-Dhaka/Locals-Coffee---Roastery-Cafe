const announcements = [
  {
    title: "Ft. Washington has soup and salads",
    date: "01/28/2025",
    description:
      "Starting Thursday, Ft. Washington will feature salads & soups! See the menu for more details.",
  },
  {
    title: "Wyndmoor & Ft. Washington closed Monday, 1/26",
    date: "01/26/2025",
    description: "We will get back to normal Tuesday.",
  },
  {
    title: "Wyndmoor closed Sunday, 1/25",
    date: "01/25/2025",
    description:
      "With the snow, we will be closed today. Stay safe!",
  },
  {
    title: "Both locations closed Monday",
    date: "01/22/2025",
    description:
      "This sounds like a big one...so in anticipation of the coming snowfall, we will close Monday at both locations. We are sorry for the inconvenience - please stay safe and we will see you Tuesday.",
  },
  {
    title: "New location now open",
    date: "01/12/2025",
    description:
      "Our newest location in the Maplewood Office Park is now open. Located at 1300 Virginia Drive in Ft. Washington. You can order ahead and pick up when you get to the office! Open M-F, 8-3.",
  },
];

const Announcement = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 lg:px-16">
      
      {/* Header */}
      <div 
      data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
      className="max-w-3xl mx-auto text-center mb-16 uppercase">
        <h2 className="text-4xl pt-10 md:text-6xl font-style mb-4">
          Special Announcements
        </h2>
        <p className="text-white/60 uppercase">
          Stay updated with what's happening at Locals Coffee.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10"></div>

        <div className="space-y-12">
          {announcements.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-start md:items-center gap-6`}
            >
              
              {/* Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#6F4E37] rounded-full border border-white"></div>

              {/* Card */}
              <div 
              data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
              className="bg-[#111] border border-white/10 rounded-xl p-6 w-full md:w-[45%] ml-10 md:ml-0 hover:border-white/30 transition">
                
                <p className="text-sm text-white/40 mb-2">{item.date}</p>

                <h3 className="text-md md:text-xl font-semibold uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-white/70 uppercase leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcement;
