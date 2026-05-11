import { Link } from "react-router";

export default function UserDashboard() {
  const stats = [
    {
      title: "Total Orders",
      value: "1,284",
      growth: "+12% this month",
    },
    {
      title: "Gift Cards Sold",
      value: "326",
      growth: "+8% this week",
    },
    {
      title: "Revenue",
      value: "$12,480",
      growth: "+18% this month",
    },
    {
      title: "Customers",
      value: "942",
      growth: "+5% this month",
    },
  ];

  const recentOrders = [
    {
      id: "#LC-1021",
      customer: "Sarah Ahmed",
      amount: "$48.50",
      status: "Completed",
      date: "Today",
    },
    {
      id: "#LC-1022",
      customer: "John Carter",
      amount: "$22.00",
      status: "Pending",
      date: "Today",
    },
    {
      id: "#LC-1023",
      customer: "Emma Wilson",
      amount: "$79.25",
      status: "Completed",
      date: "Yesterday",
    },
    {
      id: "#LC-1024",
      customer: "Michael Lee",
      amount: "$16.00",
      status: "Cancelled",
      date: "Yesterday",
    },
  ];

  const announcements = [
    {
      title: "Ft. Washington has soup and salads",
      date: "01/28/2025",
    },
    {
      title: "New location now open",
      date: "01/12/2025",
    },
    {
      title: "Both locations closed Monday",
      date: "01/22/2025",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* TOP NAV */}
      <div className="border-b border-white/10 bg-[#0d0d0d] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-style">
              Locals Coffee Dashboard (User)
            </h1>
            <p className="text-white/50 mt-1 uppercase text-sm md:text-base">
              Manage orders, gift cards, revenue & customers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link>
              <button className="px-5 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition">
                Add Product
              </button>
            </Link>
            <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-3xl p-6 hover:border-white/30 transition"
            >
              <p className="text-white/50 text-sm uppercase tracking-wider">
                {stat.title}
              </p>

              <h2 className="text-4xl font-bold mt-4">{stat.value}</h2>

              <p className="text-green-400 text-sm mt-3">{stat.growth}</p>
            </div>
          ))}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-8">
            {/* SALES OVERVIEW */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold uppercase">
                    Sales Overview
                  </h2>
                  <p className="text-white/50 mt-1 text-sm">
                    Monthly revenue and order performance.
                  </p>
                </div>

                <select className="bg-black border border-white/20 rounded-xl px-4 py-2 text-sm outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 6 Months</option>
                </select>
              </div>

              {/* FAKE CHART */}
              <div className="h-[260px] flex items-end gap-3">
                {[35, 60, 45, 80, 70, 95, 75, 55, 90, 68, 50, 85].map(
                  (height, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-white/10 rounded-t-2xl relative overflow-hidden"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute inset-0 bg-white/80 opacity-90" />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* RECENT ORDERS */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-2xl font-bold uppercase">
                    Recent Orders
                  </h2>
                  <p className="text-white/50 mt-1 text-sm">
                    Latest customer purchases and payment status.
                  </p>
                </div>

                <button className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                  View All
                </button>
              </div>

              {/* DESKTOP TABLE */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-white/50 text-sm uppercase">
                      <th className="pb-4">Order ID</th>
                      <th className="pb-4">Customer</th>
                      <th className="pb-4">Amount</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition"
                      >
                        <td className="py-5 font-medium">{order.id}</td>
                        <td className="py-5">{order.customer}</td>
                        <td className="py-5">{order.amount}</td>
                        <td className="py-5">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === "Completed"
                                ? "bg-green-500/20 text-green-400"
                                : order.status === "Pending"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-5 text-white/50">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARDS */}
              <div className="md:hidden space-y-4">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl p-4"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold">{order.id}</h3>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : order.status === "Pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p className="text-white/70">{order.customer}</p>

                    <div className="flex justify-between mt-3 text-sm text-white/50">
                      <span>{order.amount}</span>
                      <span>{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            {/* PROFILE */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6 text-center">
              <img
                src="https://i.ibb.co/9H0VZBt/avatar.png"
                alt="Admin"
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white/10"
              />

              <h2 className="text-2xl font-bold mt-5">Admin Panel</h2>

              <p className="text-white/50 mt-2">localscoffee@gmail.com</p>

              <button className="w-full mt-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition">
                Edit Profile
              </button>
            </div>

            {/* QUICK ACTIONS */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-bold uppercase mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">
                <button className="w-full py-3 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition">
                  Manage Menu
                </button>

                <button className="w-full py-3 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition">
                  Gift Cards
                </button>

                <button className="w-full py-3 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition">
                  Customers
                </button>

                <button className="w-full py-3 rounded-2xl border border-white/10 hover:bg-white hover:text-black transition">
                  Announcements
                </button>
              </div>
            </div>

            {/* ANNOUNCEMENTS */}
            <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold uppercase">Announcements</h2>

                <button className="text-sm text-white/50 hover:text-white transition">
                  View All
                </button>
              </div>

              <div className="space-y-5">
                {announcements.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 pb-4 last:border-none"
                  >
                    <h3 className="font-semibold leading-relaxed">
                      {item.title}
                    </h3>

                    <p className="text-white/40 text-sm mt-2">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
