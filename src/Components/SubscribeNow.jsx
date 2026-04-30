import React, { useState } from "react";
import image from "../assets/8.jpg"
import { GoMail } from "react-icons/go";


const SubscribeNow = () => {
    const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleMail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=humayraanjum87@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank"); // open Gmail compose in new tab

    // Clear fields after sending
    setSubject("");
    setBody("");
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-yellow-950">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-20">

        {/* left */}
        <div className="flex-1 w-full pt-10 px-4 lg:px-0 uppercase">
            <h2 className="text-4xl lg:text-6xl font-style w-full  mx-auto mb-6">Send us a note!</h2>
          <div className="flex flex-col gap-4 py-4 border-0  w-full  mx-auto">
            <input
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-0 uppercase border-b text-white p-2 w-full  focus:outline-none focus:ring-2 focus:ring-white"
            />

            <textarea
              placeholder="Enter your message"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="border-0 uppercase border-b w-full p-2 text-white  h-28 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              onClick={handleMail}
              className="btn btn-block hover:bg-white hover:text-black transition-all duration-150 cursor-pointer rounded-full text-xl mx-auto uppercase btn-outline my-6"
            >
              <GoMail className="text-2xl" /> Send Email
            </button>
          </div>
        </div>
        
        {/* right */}
        <div className="flex-1">
           <img className="h-[500px] w-[600px] object-cover" src={image} alt="" />
        </div>

      </div>
    </div>
  );
};

export default SubscribeNow;
