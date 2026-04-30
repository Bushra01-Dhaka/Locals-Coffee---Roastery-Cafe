import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const locations = [
  {
    id: 1,
    name: "Wyndmoor",
    subtitle: "Our original location in the heart of Wyndmoor",
    address: "800 E. Willow Grove Ave., Wyndmoor, PA 19038",
    phone: "267-422-3165",
    button: "Order from Wyndmoor",
    image: "https://i.ibb.co.com/PZz7sDPF/1.png",
  },
  {
    id: 2,
    name: "Ft. Washington (Now Open)",
    subtitle: "Our newest spot in the Maplewood Office Park",
    address: "1300 Virginia Drive, Ft. Washington, PA 19034",
    phone: "215-399-5009",
    button: "Order from Ft. Washington",
    image:
      "https://img1.wsimg.com/isteam/ip/e86c7757-df0b-4736-8f37-5e513576080f/78992316550__0C6BFF58-D669-458E-8353-E94B790D.jpeg/:/cr=t:23.26%25,l:0%25,w:100%25,h:75%25/rs=w:355,h:355,cg:true",
  },
];

const LocationsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-style mb-4">
          Order Online for Pickup
        </h2>
        <p className="text-white/60 text-lg">
          Choose your nearest location and enjoy fresh coffee & food made just
          for you.
        </p>
      </div>

      {/* Locations */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {locations.map((loc, index) => (
          <div
            key={loc.id}
            className={`grid lg:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div 
            data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            className="overflow-hidden rounded-2xl">
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div 
            data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1500"
            >
              <h3 className="text-4xl md:text-6xl font-style mb-3">
                {loc.name}
              </h3>

              <p className="text-white/60 mb-4">{loc.subtitle}</p>

              <p className="text-white/80 mb-2">{loc.address}</p>
              <p className="text-white/80 mb-6">{loc.phone}</p>

              <Link to="/orderMenus">
                <button className="group border border-white px-6 py-3 rounded-full uppercase tracking-wider text-sm hover:bg-white hover:text-black transition">
                  {loc.button}
                  <MdArrowOutward className="inline ml-2 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;
