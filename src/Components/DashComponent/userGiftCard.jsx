import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const UserGiftCard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: giftCards = [], isLoading } = useQuery({
    queryKey: ["giftCard", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/giftCard/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center text-white">
        Loading Gift Cards...
      </div>
    );
  }

  return (
    <section className="text-white">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-style uppercase">
          My Gift Cards
        </h1>

        <p className="text-white/60 mt-2">View all purchased gift cards</p>
      </div>

      {/* EMPTY */}
      {giftCards.length === 0 ? (
        <div className="bg-[#111] border border-white/10 rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold">No Gift Cards Found</h2>

          <p className="text-white/50 mt-3">Purchase your first gift card 🎁</p>
        </div>
      ) : (
        <>
          {/* DESKTOP TABLE */}
          <div className="hidden lg:block overflow-x-auto rounded-3xl border border-white/10">
            <table className="w-full">
              <thead className="bg-[#111]">
                <tr className="border-b border-white/10 text-left">
                  <th className="px-6 py-5">#</th>
                  <th className="px-6 py-5">Recipient</th>
                  <th className="px-6 py-5">Amount</th>
                  <th className="px-6 py-5">Gift Code</th>
                  <th className="px-6 py-5">Created</th>
                  <th className="px-6 py-5">Valid Until</th>
                  <th className="px-6 py-5">Status</th>
                </tr>
              </thead>

              <tbody>
                {giftCards.map((card, index) => (
                  <tr
                    key={card._id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="px-6 py-5">{index + 1}</td>

                    <td className="px-6 py-5">
                      <div>
                        <h3 className="font-semibold">{card.recipientName}</h3>

                        <p className="text-sm text-white/50">
                          {card.confirmEmail}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5 font-semibold">
                      ${card.totalPrice}
                    </td>

                    <td className="px-6 py-5">
                      <span className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                        {card.code}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      {new Date(card.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5">
                      {new Date(card.validUntil).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`px-4 py-2 rounded-full text-sm ${
                          card.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {card.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARD */}
          <div className="lg:hidden space-y-5">
            {giftCards.map((card) => (
              <div
                key={card._id}
                className="bg-[#111] border border-white/10 rounded-3xl p-5"
              >
                {/* TOP */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {card.recipientName}
                    </h2>

                    <p className="text-white/50 text-sm mt-1">
                      {card.confirmEmail}
                    </p>
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

                {/* BODY */}
                <div className="space-y-3 border-t border-white/10 pt-4">
                  <div className="flex justify-between">
                    <p className="text-white/50">Amount</p>
                    <p>${card.totalPrice}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-white/50">Gift Code</p>
                    <p className="font-mono">{card.code}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-white/50">Created</p>
                    <p>{new Date(card.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-white/50">Expires</p>
                    <p>{new Date(card.validUntil).toLocaleDateString()}</p>
                  </div>
                </div>

                {/* MESSAGE */}
                {card.message && (
                  <div className="border-t border-white/10 mt-5 pt-4">
                    <p className="text-white/50 text-sm mb-2">Message</p>

                    <p className="text-sm text-white/80 leading-relaxed">
                      {card.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default UserGiftCard;
