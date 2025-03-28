import React, { useRef } from "react";
import data from "/src/assets/data/data.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

export default function Testimonials() {
  const scrollRef = useRef(null); // Reference for the scrolling container
  const scrollAmount = 300; // Scroll distance per click

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
    <div className="bg-black w-full min-h-screen text-white">
      {/* Header Section */}
      <div className="flex flex-nowrap items-center gap-4 justify-between top-10 py-10 px-15">
        <h1 className="text-white text-5xl text-medium">What They Say</h1>
        <div className="flex gap-3">
          {/* Scroll Backward Button */}
          <button
            onClick={scrollBackward}
            className="text-white px-4 py-2 border rounded-full w-12 h-12 flex items-center justify-center"
          >
            <FaArrowLeft />
          </button>
          {/* Scroll Forward Button */}
          <button
            onClick={scrollForward}
            className="text-white px-4 py-2 border rounded-full w-12 h-12 flex items-center justify-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Testimonials Section */}
      <div
        ref={scrollRef}
        className="flex gap-4 ml-15 p-2 overflow-hidden"
      >
        {data.testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="border-2 rounded-xl p-4 w-[250px] h-auto text-normal flex flex-col gap-1 shrink-0 snap-center"
          >
            <div className="flex flex-col gap-2">
              <div className="text-medium text-sm font-medium">
                {testimonial.title}
              </div>
              <p className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent text-xs">
                {testimonial.account}
              </p>
              <div className="text-xs mt-2">{testimonial.description}</div>
              <div className="flex justify-between text-[10px] mt-5">
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
