import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import {
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineUser,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import useAuth from "../../Hook/useAuth";

const Account = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  // FETCH USER INFO FROM DATABASE
  const { data: userInfo = {}, isLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-[40vh] flex justify-center items-center text-white">
        Loading Account...
      </div>
    );
  }

   console.log("User Data: ", userInfo)
  return (
    <section className="text-white">
      {/* PAGE TITLE */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-5xl font-style uppercase">
          My Account
        </h1>

        <p className="text-white/50 mt-2">
          Manage your profile & account details
        </p>
      </div>

      {/* PROFILE CARD */}
      {
        userInfo.map((item) => 
            <div 
            key={item?._id}
            className="bg-[#111] border border-white/10 rounded-3xl p-6 md:p-10">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* PROFILE IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={
                user?.photoURL ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="profile"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-white/10"
            />
          </div>

          {/* USER INFO */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold">
              {user?.displayName || item?.name || "Coffee Lover"}
            </h2>

            <p className="text-white/50 mt-2 break-all">
              {user?.email}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm uppercase">
                {item?.role || "User"}
              </span>

              <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
                Active Account
              </span>
            </div>
          </div>
        </div>

        {/* ACCOUNT DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {/* NAME */}
          <div className="bg-black border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <HiOutlineUser className="text-2xl text-yellow-500" />

              <h3 className="text-lg font-semibold">Full Name</h3>
            </div>

            <p className="text-white/70">
              {user?.displayName || item?.name || "Not Added"}
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-black border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <HiOutlineMail className="text-2xl text-yellow-500" />

              <h3 className="text-lg font-semibold">Email Address</h3>
            </div>

            <p className="text-white/70 break-all">
              {user?.email}
            </p>
          </div>

          {/* ROLE */}
          <div className="bg-black border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <HiOutlineShieldCheck className="text-2xl text-yellow-500" />

              <h3 className="text-lg font-semibold">Account Role</h3>
            </div>

            <p className="text-white/70 capitalize">
              {item?.role || "user"}
            </p>
          </div>

          {/* JOIN DATE */}
          <div className="bg-black border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <HiOutlineCalendar className="text-2xl text-yellow-500" />

              <h3 className="text-lg font-semibold">Joined On</h3>
            </div>

            <p className="text-white/70">
            {
               new Date(item?.createdAt).toLocaleDateString()
            }
            </p>
          </div>
        </div>
      </div>

        )
      }
     



    </section>
  );
};

export default Account;