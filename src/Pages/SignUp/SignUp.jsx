import { useForm } from "react-hook-form";
import logo from "../../assets/logo.webp"; // adjust path
import bgImg from "../../assets/2.jpg"; // your background image
import { Link, useLocation } from "react-router";
import useAuth from "../../Hook/useAuth";
import useAxios from "../../Hook/useAxios";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {createUser, updateUserProfile} = useAuth();
  const axiosPublic = useAxios();
    const location = useLocation();
   const from = location.state?.from || "/";

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("Logged User: ", loggedUser);

      // Update User Info into DB
      const userInfo = {
        name: data.name,
        email: data.email,
        role: "user",
        createdAt: new Date().toISOString(),
      }
      
      const userRes = axiosPublic.post(`/user`, userInfo);
      console.log(userRes.data);

      // update user profile
      const userProfile = {
         displayName: data.name,
         photoURL: data.photo || "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
      }

       updateUserProfile(userProfile)
       .then(() => {
        console.log("Name and Image are updated");
        refetch;
       })
       .catch(error => {
        console.error(error)
       })

       toast("Account Created Successfully!", {
        style: {
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
        },
      });
      navigate(from);


    })



  };

  return (
    <div
      className="min-h-screen py-30 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 px-6">
        {/* LEFT SIDE (Logo) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="bg-white rounded-full w-[260px] h-[260px] flex items-center justify-center shadow-2xl">
            <img src={logo} alt="logo" className="w-[70%] object-contain" />
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div 
        data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
        className="bg-[#111]/90 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-4xl md:text-5xl font-style text-white mb-2">
            Create Account
          </h2>
          <p className="text-white/60 mb-8 uppercase">
             Welcome to your coffee journey ☕
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* name */}
             <div>
              <input
                type="text"
                placeholder="User Name"
                {...register("name", { required: "User Name is required" })}
                className="w-full p-3 bg-black border border-white/20 rounded text-white focus:outline-none focus:border-white"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>


            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 bg-black border border-white/20 rounded text-white focus:outline-none focus:border-white"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full p-3 bg-black border border-white/20 rounded text-white focus:outline-none focus:border-white"
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm text-white/60">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" {...register("remember")} />
                Remember me
              </label>

              <button type="button" className="hover:text-white">
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-full font-semibold uppercase tracking-wider hover:opacity-90 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-white/50 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login">
            <span className="text-white cursor-pointer hover:underline">
              Login
            </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
