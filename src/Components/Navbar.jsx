import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router";
import logo from "../assets/logo.webp"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black/60 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link className="bg-white w-[80px] h-[80px] rounded-full flex justify-center" href="/">
          
          <img className="w-[50px] h-[50px] object-fill mt-4" src={logo} alt="" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden uppercase md:flex items-center gap-6 font-medium">
          <Link
            href="/complaintForm"
            className="hover:text-yellow-800 transition"
          >
            Gift Cards
          </Link>
          <Link href="/dashboard" className="hover:text-yellow-800 transition">
            Catering
          </Link>
           <Link href="/dashboard" className="hover:text-yellow-800 transition">
            Contact Us
          </Link>
           <Link href="/dashboard" className="hover:text-yellow-800 transition">
            Announcements
          </Link>
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
            href="/complaintForm"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Gift Cards
          </Link>
          <Link
            href="/dashboard"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Catering
          </Link>
           <Link
            href="/dashboard"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
           <Link
            href="/dashboard"
            className="block py-2 hover:text-yellow-800"
            onClick={() => setOpen(false)}
          >
            Anouncements
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
