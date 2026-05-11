import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { HiOutlineTrash } from "react-icons/hi";

const UserOrder = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: cart = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/${user?.email}`);
      return res.data;
    },
  });

  // TOTAL SPENT
  const totalSpent = cart.reduce(
    (total, item) => total + Number(item.totalPrice),
    0,
  );

  const handleCancelOrder = async (id) => {
    try {
      await axiosSecure.patch(`/cart/cancel/${id}`);
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center text-white">
        Loading Orders...
      </div>
    );
  }

  return (
    <section className="text-white">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-5xl font-style uppercase">
            My Orders
          </h1>

          <p className="text-white/60 mt-2">Manage your recent coffee orders</p>
        </div>

        {/* STATS CARD */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl px-6 py-4">
          <p className="text-white/60 text-sm uppercase">Total Spent</p>

          <h2 className="text-3xl font-bold mt-1">${totalSpent.toFixed(2)}</h2>
        </div>
      </div>

      {/* EMPTY STATE */}
      {cart.length === 0 ? (
        <div className="bg-[#111] border border-white/10 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold">No Orders Found</h2>

          <p className="text-white/50 mt-3">
            Start ordering your favorite coffee ☕
          </p>
        </div>
      ) : (
        <>
          {/* DESKTOP TABLE */}
          <div className="hidden lg:block overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full">
              <thead className="bg-[#111]">
                <tr className="text-left border-b border-white/10">
                  <th className="px-6 py-5">#</th>
                  <th className="px-6 py-5">Items</th>
                  <th className="px-6 py-5">Total</th>
                  <th className="px-6 py-5">Transaction</th>
                  <th className="px-6 py-5">Date</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Action</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((order, index) => (
                  <tr
                    key={order._id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5">{index + 1}</td>

                    {/* ITEMS */}
                    <td className="px-6 py-5">
                      <div className="space-y-2">
                        {order.items?.map((item) => (
                          <div key={item.id}>
                            <p className="font-medium">{item.name}</p>

                            <p className="text-sm text-white/50">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* TOTAL */}
                    <td className="px-6 py-5 font-semibold">
                      ${order.totalPrice}
                    </td>

                    {/* TRANSACTION */}
                    <td className="px-6 py-5">
                      <span className="text-sm text-white/60">
                        {order.transactionId?.slice(0, 18)}...
                      </span>
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <span
                        className={`px-4 py-2 rounded-full text-sm ${
                          order.status === "cancelled"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {order.status || "Paid"}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5">
                      {order.status !== "cancelled" && (
                        <button
                          onClick={() => handleCancelOrder(order._id)}
                          className="bg-red-500/10 hover:bg-red-500/20 text-red-400 p-3 rounded-xl transition"
                        >
                          <HiOutlineTrash size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD VIEW */}
          <div className="lg:hidden space-y-5">
            {cart.map((order, index) => (
              <div
                key={order._id}
                className="bg-[#111] border border-white/10 rounded-3xl p-5"
              >
                {/* TOP */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <p className="text-white/50 text-sm">Order #{index + 1}</p>

                    <h2 className="text-xl font-semibold mt-1">
                      ${order.totalPrice}
                    </h2>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      order.status === "cancelled"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {order.status || "Paid"}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="space-y-2 border-t border-white/10 pt-4">
                  {order.items?.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <p>{item.name}</p>

                        <p className="text-sm text-white/50">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p>${item.price}</p>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="border-t border-white/10 mt-5 pt-4">
                  <p className="text-sm text-white/50 mb-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                  <p className="text-xs text-white/40 mb-4 break-all">
                    {order.transactionId}
                  </p>

                  {order.status !== "cancelled" && (
                    <button
                      onClick={() => handleCancelOrder(order._id)}
                      className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 py-3 rounded-2xl transition"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default UserOrder;
