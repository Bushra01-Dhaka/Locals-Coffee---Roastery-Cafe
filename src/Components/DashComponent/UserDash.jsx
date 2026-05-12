import { useQuery } from "@tanstack/react-query";
import {
  HiOutlineShoppingBag,
  HiOutlineGift,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from "react-icons/hi";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const UserDash = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // USER ORDERS
  const { data: orders = [] } = useQuery({
    queryKey: ["user-orders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/${user?.email}`);
      return res.data;
    },
  });

  // USER GIFT CARDS
  const { data: giftCards = [] } = useQuery({
    queryKey: ["user-giftcards", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/giftCard/${user?.email}`);
      return res.data;
    },
  });

  // TOTAL SPENT
  const totalSpent = orders.reduce(
    (total, item) => total + Number(item.totalPrice),
    0,
  );

  // ACTIVE GIFTCARDS
  const activeGiftCards = giftCards.filter((card) => card.status === "active");

  return (
    <section className="text-white">
      {/* TOP HEADER */}
      <div className="bg-[#111] border border-white/10 rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* LEFT */}
        <div className="flex items-center gap-5">
          <img
            src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt=""
            className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-white/10"
          />

          <div>
            <h2 className="text-3xl lg:text-5xl font-style uppercase">
              Welcome Back,
            </h2>

            <p className="text-xl lg:text-2xl mt-2 font-semibold">
              {user?.displayName || "Coffee Lover"}
            </p>

            <p className="text-white/50 mt-1">{user?.email}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-black border border-white/10 rounded-2xl px-6 py-5 text-center">
          <p className="text-white/50 uppercase text-sm">Member Since</p>

          <h3 className="text-xl font-semibold mt-2">
            {new Date(user?.metadata?.creationTime).toLocaleDateString()}
          </h3>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {/* TOTAL ORDERS */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 uppercase text-sm">Total Orders</p>

              <h2 className="text-4xl font-bold mt-3">{orders.length}</h2>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <HiOutlineShoppingBag size={28} />
            </div>
          </div>
        </div>

        {/* TOTAL SPENT */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 uppercase text-sm">Total Spent</p>

              <h2 className="text-4xl font-bold mt-3">
                ${totalSpent.toFixed(2)}
              </h2>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <HiOutlineCurrencyDollar size={28} />
            </div>
          </div>
        </div>

        {/* GIFTCARDS */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 uppercase text-sm">Gift Cards</p>

              <h2 className="text-4xl font-bold mt-3">{giftCards.length}</h2>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <HiOutlineGift size={28} />
            </div>
          </div>
        </div>

        {/* ACTIVE GIFTCARDS */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 uppercase text-sm">Active Cards</p>

              <h2 className="text-4xl font-bold mt-3">
                {activeGiftCards.length}
              </h2>
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              <HiOutlineClock size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS + GIFTCARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        {/* RECENT ORDERS */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-style uppercase">Recent Orders</h2>
          </div>

          {orders.length === 0 ? (
            <p className="text-white/50">No recent orders</p>
          ) : (
            <div className="space-y-5">
              {orders.slice(0, 4).map((order) => (
                <div
                  key={order._id}
                  className="border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">${order.totalPrice}</h3>

                      <p className="text-white/50 text-sm mt-1">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        order.status === "cancelled"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {order.status || "paid"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RECENT GIFTCARDS */}
        <div className="bg-[#111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-style uppercase">Recent Gift Cards</h2>
          </div>

          {giftCards.length === 0 ? (
            <p className="text-white/50">No gift cards purchased</p>
          ) : (
            <div className="space-y-5">
              {giftCards.slice(0, 4).map((card) => (
                <div
                  key={card._id}
                  className="border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{card.recipientName}</h3>

                      <p className="text-white/50 text-sm mt-1">
                        ${card.totalPrice}
                      </p>

                      <p className="text-white/40 text-xs mt-2">{card.code}</p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        card.status === "active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {card.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserDash;
