import React, { useRef } from "react";
import data from "/src/assets/data/data.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const scrollAmount = 316;
  const scrollForward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollBackward = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black w-full pb-20 md:pb-50 text-white px-4 sm:px-6 md:px-15">
      {/* Header Section */}
      <div className="flex flex-wrap items-center gap-4 justify-between py-10">
        <h1 className="text-white text-3xl sm:text-4xl pl-2 md:text-5xl font-medium">
          What They Say
        </h1>
        <div className="flex gap-3">
          <button
            onClick={scrollBackward}
            className="text-white px-4 py-2 border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollForward}
            className="text-white px-4 py-2 border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Testimonials Section */}
      <div
        ref={scrollRef}
        className="gap-4  scroll-smooth flex flex-nowrap overflow-hidden p-2 "
      >
        {data.testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 rounded-xl p-4 w-[90%] sm:w-[250px] h-auto flex flex-col gap-1 shrink-0 snap-center"
          >
            <div className="flex flex-col gap-2">
              <div className="text-sm sm:text-base font-medium">
                {testimonial.title}
              </div>
              <p className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent text-xs sm:text-sm">
                {testimonial.account}
              </p>
              <div className="text-xs sm:text-sm mt-2">
                {testimonial.description}
              </div>
              <div className="flex justify-between text-[10px] sm:text-xs mt-5">
                <div>{testimonial.date}</div>
                <div className="flex justify-center items-center gap-1">
                  {testimonial.rating} <FcApproval />
                </div>
              </div>
            </div>
          </div>
           
        ))}
      </div>
    </div>
  );
}
