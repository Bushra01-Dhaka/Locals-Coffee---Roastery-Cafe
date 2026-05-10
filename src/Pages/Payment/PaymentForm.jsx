import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import useAxios from "../../Hook/useAxios";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentPage = () => {
  const { state } = useLocation();
  const { cart, totalPrice, giftCard } = state || {};

  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
          },
        },
      },
    );

    if (error) {
      console.error(error.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      // ✅ SAVE ORDER HERE
      const orderData = {
        email: user.email,
        items: cart,
        totalPrice,
        transactionId: paymentIntent.id,
        createdAt: new Date(),
      };

      await axiosSecure.post("/cart", orderData);

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Payment Successful 🎉",
        showConfirmButton: false,
        timer: 1500,
      });





      // Giftycard Payment 

      const createdAt = new Date();

  const validUntil = new Date();
  validUntil.setMonth(validUntil.getMonth() + 1);

  const giftCardPayload = {
    ...giftCard,
    email: user?.email,
    totalPrice,
    transactionId: paymentIntent.id,
    createdAt,
    validUntil,
  };

  // 🔥 send to backend
  await axiosSecure.post("/giftcard", giftCardPayload);

  Swal.fire({
    icon: "success",
    title: "Gift Card Sent 🎁",
    timer: 1500,
    showConfirmButton: false,
  });



    //  giftcard payment ends 


    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#111] p-6 rounded-xl w-[400px]"
      >
        <h2 className="text-2xl mb-4">Payment</h2>

        <CardElement className="p-3 bg-white text-black rounded" />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 mt-4 rounded"
        >
          Pay ${totalPrice}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
