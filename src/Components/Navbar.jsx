import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import logo from "../assets/logo.webp";
import useAuth from "../Hook/useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  const {data: userData = []} = useQuery({
    queryKey:["user", user?.email],
    enabled: !!user?.email,
    queryFn: async() => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      res.data;
    }
  })

  console.log("Role: ", userData?.role)

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav className="w-full bg-black/60 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
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

        {/* Desktop Menu */}
        <div className="hidden uppercase md:flex items-center gap-6 font-medium">
          <Link to="/giftCard" className="hover:text-yellow-800 transition">
            Gift Cards
          </Link>
          <Link to="/catering" className="hover:text-yellow-800 transition">
            Catering
          </Link>
          <Link to="/contactUs" className="hover:text-yellow-800 transition">
            Contact Us
          </Link>
          <Link to="/announcement" className="hover:text-yellow-800 transition">
            Announcements
          </Link>

          <div className="relative">
            {user ? (
              <>
                {/* Profile Image */}
                <img
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-[40px] h-[40px] rounded-full cursor-pointer border border-white/20 hover:scale-105 transition"
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="profile"
                />

                {/* Dropdown */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-40 bg-[#111] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-3 text-sm hover:bg-white hover:text-black transition"
                      onClick={() => setProfileOpen(false)}
                    >
                     {user?.displayName}
                    </Link>

                   
                     <Link
                      to="/dashboard"
                      className="block px-4 py-3 text-sm hover:bg-white hover:text-black transition"
                      onClick={() => setProfileOpen(false)}
                    >
                      Dashboard
                    </Link>

                    {/* <Link
                      to="/dashboard"
                      className="block px-4 py-3 text-sm hover:bg-white hover:text-black transition"
                      onClick={() => setProfileOpen(false)}
                    >
                      Dashboard
                    </Link> */}

                    <button
                      onClick={() => {
                        handleLogOut();
                        setProfileOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-white hover:text-black transition"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="btn btn-md rounded-full btn-outline py-2 hover:text-yellow-800 hover:bg-white transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden uppercase bg-black/80 backdrop-blur-md px-4 py-10 pb-10 space-y-3 text-center">
          <Link
            to="/giftCard"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Gift Cards
          </Link>
          <Link
            to="/catering"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Catering
          </Link>
          <Link
            to="/contactUs"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/announcement"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Anouncements
          </Link>
          {user ? (
            <Link
              onClick={handleLogOut}
              className="block py-2 hover:text-yellow-800"
              onClick={() => setOpen(false)}
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="block py-2 hover:text-yellow-800"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
