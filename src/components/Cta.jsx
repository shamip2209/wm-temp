import React from "react";

export default function Cta() {
  return (
    <div className="bg-black flex justify-center items-center pb-20 md:pb-50">
      <div
        className="w-[85%] p-14 bg-gradient-to-r from-pink-600 via-fuchsia-600 via-cyan-400 to-blue-700 
      rounded-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden gap-6"
      >
        {/* Subscribe text */}
        <div className="lg:w-96 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          <div className="text-white text-4xl lg:text-5xl font-medium leading-[48px] lg:leading-[64px]">
            Subscribe to Our Newsletter
          </div>
          <div className="text-white text-base font-medium">
            By subscribing, you agree with our Privacy Policy and consent to
            receive updates from our company.
          </div>
        </div>

        {/* Email input section */}
        <div className="w-full lg:w-[512.36px] flex flex-col justify-start items-center md:items-start gap-4">
          <div className="text-white text-xl sm:text-2xl lg:text-3xl font-medium leading-10">
            Your Email Address
          </div>

          {/* Input and Button Section */}
          <div className="w-full lg:w-full h-auto px-6 py-3 bg-white/20 rounded-[40px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 w-full sm:w-auto justify-center items-center bg-transparent text-white text-base font-normal md:placeholder:text-start placeholder:text-center placeholder-white outline-none border-none"
            />

            {/* Button (Moves below text on `sm` and smaller) */}
            <div className="w-full sm:w-48 px-6 py-4 bg-white rounded-[40px] flex justify-center sm:justify-center items-center gap-2">
              <button
                className="bg-gradient-to-r from-pink-500 via-fuchsia-700 to-cyan-400  
      text-transparent bg-clip-text text-xl text-center font-semibold"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
