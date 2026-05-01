import { useForm } from "react-hook-form";

const GiftCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Gift Card Data:", data);
  };

  const deliveryType = watch("deliveryType");

  return (
    <section className="bg-black text-white py-20 px-6 md:px-10 lg:px-16">
      <div 
      data-aos="flip-left" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="1000"
      className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-style my-10 text-center">
          Buy Gift Card
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-[#111] p-8 rounded-2xl border border-white/10"
        >
          {/* -------- Gift Amount -------- */}
          <div>
            <label className="block mb-3 text-lg">Gift Amount *</label>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[5, 25, 50, 100].map((amount) => (
                <label
                  key={amount}
                  className="border border-white/20 p-3 rounded cursor-pointer text-center hover:bg-white hover:text-black transition"
                >
                  <input
                    type="radio"
                    value={amount}
                    {...register("amount", { required: true })}
                    className="hidden"
                  />
                  ${amount}
                </label>
              ))}
            </div>

            <input
              type="number"
              placeholder="Custom amount ($5 - $100)"
              {...register("customAmount", {
                min: 5,
                max: 100,
              })}
              className="w-full p-3 bg-black border border-white/20 rounded text-white"
            />

            {errors.amount && (
              <p className="text-red-400 text-sm mt-2">
                Please select an amount
              </p>
            )}
          </div>

          {/* -------- Delivery -------- */}
          <div>
            <label className="block mb-3 text-lg">Delivery Options *</label>

            <input
              type="email"
              placeholder="Recipient email"
              {...register("email", { required: true })}
              className="w-full mb-3 p-3 bg-black border border-white/20 rounded"
            />

            <input
              type="email"
              placeholder="Confirm email"
              {...register("confirmEmail", { required: true })}
              className="w-full p-3 bg-black border border-white/20 rounded"
            />
          </div>

          {/* -------- Delivery Time -------- */}
          <div>
            <label className="block mb-3 text-lg">Delivery Date & Time *</label>

            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="today"
                  {...register("deliveryType")}
                />
                Today
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="later"
                  {...register("deliveryType")}
                />
                Later
              </label>
            </div>

            {deliveryType === "later" && (
              <input
                type="datetime-local"
                {...register("schedule")}
                className="w-full p-3 bg-black border border-white/20 rounded"
              />
            )}

            <p className="text-white/50 text-sm mt-2">
              We'll send the digital card immediately after purchase.
            </p>
          </div>

          {/* -------- Personalization -------- */}
          <div>
            <label className="block mb-3 text-lg">Personalize Your Card</label>

            <input
              type="text"
              placeholder="Recipient's Name"
              {...register("recipientName")}
              className="w-full mb-3 p-3 bg-black border border-white/20 rounded"
            />

            <input
              type="text"
              placeholder="Sender's Name"
              {...register("senderName")}
              className="w-full mb-3 p-3 bg-black border border-white/20 rounded"
            />

            <textarea
              maxLength={255}
              placeholder="Custom message (max 255 characters)"
              {...register("message")}
              className="w-full p-3 bg-black border border-white/20 rounded"
            />
          </div>

          {/* -------- Submit -------- */}
          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-full uppercase tracking-wider font-semibold hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </section>
  );
};

export default GiftCard;
