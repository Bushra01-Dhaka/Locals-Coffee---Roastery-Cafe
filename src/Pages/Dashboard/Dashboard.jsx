import { useState } from "react";
import {
  HiMenu,
  HiX,
  HiHome,
  HiShoppingBag,
  HiGift,
  HiUser,
} from "react-icons/hi";
import { Outlet, Link, NavLink } from "react-router";
import useAuth from "../../Hook/useAuth";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const {user} = useAuth();

  const navLinks = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: <HiHome size={20} />,
    },
    {
      name: "My Orders",
      path: "/dashboard/userOrder",
      icon: <HiShoppingBag size={20} />,
    },
    {
      name: "Gift Cards",
      path: "/dashboard/gift-cards",
      icon: <HiGift size={20} />,
    },
    {
      name: "Account",
      path: "/dashboard/account",
      icon: <HiUser size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* ================= SIDEBAR DESKTOP ================= */}
      <aside className="hidden lg:flex flex-col w-[280px] bg-[#111] border-r border-white/10 p-6 fixed left-0 top-0 h-screen">
        {/* LOGO */}
        <Link
          to="/"
          className="text-3xl lg:text-5xl font-style mb-10 border-b border-white/10 pb-6"
        >
          LOCALS COFFEE
        </Link>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-white text-black"
                    : "hover:bg-white/10 text-white"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* QUICK ACTIONS */}
        <div className="mt-auto space-y-3">
          <Link
            to="/orderMenus"
            className="block w-full text-center bg-white text-black py-3 rounded-xl font-semibold"
          >
            Order Coffee
          </Link>

          <Link
            to="/giftCard"
            className="block w-full text-center border border-white/20 py-3 rounded-xl hover:bg-white hover:text-black transition"
          >
            Buy Gift Card
          </Link>
        </div>
      </aside>

      {/* ================= MOBILE TOPBAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#111] border-b border-white/10 z-50">
        <div className="flex items-center justify-between px-4 py-4">
          <h2 className="text-xl font-bold">LOCALS</h2>

          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen w-[280px] bg-[#111] z-40 transition-all duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-24">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/dashboard"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-white text-black"
                      : "hover:bg-white/10 text-white"
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* QUICK ACTIONS */}
          <div className="mt-10 space-y-3">
            <Link
              to="/orderMenus"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-white text-black py-3 rounded-xl font-semibold"
            >
              Order Coffee
            </Link>

            <Link
              to="/giftCard"
              onClick={() => setOpen(false)}
              className="block w-full text-center border border-white/20 py-3 rounded-xl hover:bg-white hover:text-black transition"
            >
              Buy Gift Card
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <main className="flex-1 lg:ml-[280px] pt-[80px] lg:pt-0 p-4 md:p-8">
        <div className="bg-[#111] min-h-[calc(100vh-40px)] rounded-3xl border border-white/10 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;