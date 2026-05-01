import { Link } from "react-router";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <div className="relative z-20 bg-black/80 backdrop-blur-md border-t border-white/10 ">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo + Description */}
          <div className="text-center md:text-left">
            {/* <p className="text-lg lg:text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-green-500 to-purple-800 bg-clip-text text-transparent uppercase">
                Civic.Ai
              </span>
            </p> */}
            <Link
              className="bg-white w-[80px] h-[80px] rounded-full flex justify-center"
              href="/"
            >
              <img
                className="w-[50px] h-[50px] object-fill mt-4"
                src={logo}
                alt=""
              />
            </Link>
            <p className="text-xl font-style text-white mt-2">
              Rooted in community. <br />
              Brewed with care.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm">
            <div>
              <p className="font-semibold mb-2 uppercase">Quick Links</p>
              <ul className="space-y-1 flex flex-col text-gray-400">
                <Link
                 to="/giftCard"
                  className="hover:text-yellow-800 transition"
                >
                  Gift Cards
                </Link>
                <Link
                 to="/catering"
                  className="hover:text-yellow-800 transition"
                >
                  Catering
                </Link>
                <Link
                 to="/contactUs"
                  className="hover:text-yellow-800 transition"
                >
                  Contact Us
                </Link>
                <Link
                 to="/dashboard"
                  className="hover:text-yellow-800 transition"
                >
                  Announcements
                </Link>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">Join With</p>
              <ul className="space-y-1 text-gray-400">
                <Link  to="/subscribeNow">
                <li className="hover:text-yellow-800 cursor-pointer">
                  Newsletter 
                </li>
                </Link>
                <Link to="/subscribeNow">
                <li className="hover:text-yellow-800 cursor-pointer">
                  Subscribe Now
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t uppercase border-white/10 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Locals Coffee - Roastery & Cafe
        </div>
      </div>
    </div>
  );
};

export default Footer;
