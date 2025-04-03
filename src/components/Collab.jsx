import React from "react";
import drawing from "/public/assets/images/drawing.jpg"; // Ensure correct path"
import pottedPlant from "/public/assets/images/potted-plant.jpg"; // Ensure correct path"

function Collab() {
  return (
    <div className="lg:m-15 2xl:m-18 lg:rounded-[24px] h-screen bg-zinc-900 flex justify-center items-center relative overflow-hidden sm:m-0 sm:rounded-none">
      {/* Text & Button */}
      <div className="text-center  max-w-3xl px-6 relative z-10">
        <h1 className="text-zinc-300 text-5xl md:text-6xl sm:text-4xl 2xl:text-7xl font-medium leading-tight relative">
          Transform Your Ideas into <br />
          <span className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent">
            Impactful Designs
          </span>
        </h1>
        <button className=" px-4 py-2 mt-6 sm:px-8 sm:py-4  bg-lime-400 text-zinc-900 text-lg sm:text-sm 2xl:text-2xl font-medium rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(163,230,53,0.7)]">
          Collaborate With Me
        </button>
      </div>

      {/* Floating Images with Responsive Scaling & Overlapping Effect */}
      
       <img
        className="w-24 sm:w-30  md:w-30 lg:w-36 2xl:w-50 h-auto absolute top-[20%] left-[15%] md:top-[9%] md:left-[8%] rounded-3xl z-0"
        src={drawing}
        alt="Image 1"
      />
      <img
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute top-[5%] right-[1.5%] 2xl:top-[10%]  md:right-[5%] rotate-[15deg] rounded-3xl z-0"
        src={pottedPlant}
        alt="image-2"
      />
      <img
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute bottom-[5%] left-[8%] md:bottom-[10%] md:left-[5%] rotate-[-19deg] rounded-3xl z-0"
        src={drawing}
        alt="Image 3"
      />
      <img
        className="w-20 h-auto  md:w-24 lg:w-28 2xl:w-45  bottom-[100.65px] right-[60.86px] absolute md:bottom-[60.86px] md:right-[70.36px] 2xl:bottom-[10%]  2xl:right-[6%] rotate-[-10deg] rounded-xl z-0"
        src={pottedPlant}
        alt="image 4"
      />
     
    </div>
  );
}

export default Collab;
