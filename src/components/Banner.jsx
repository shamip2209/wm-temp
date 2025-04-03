import React from "react";

const Banner = () => {
  return (
    <div>
      {/* Background div, responsive height */}
      <div className="bg-black w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[800px]"></div>
      
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Motion Design Row - responsive text size and padding */}
        <div className="relative py-5 sm:py-8 md:py-10 border-t  mb-20 border-b border-stone-500 my-10 sm:my-20 md:my-30 overflow-x-auto scroll-smooth flex items-center justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase">
          <div className="flex whitespace-nowrap items-center">
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
          </div>
        </div>

        {/* Product Design Row - responsive text size and padding */}
        <div className="relative py-5 sm:py-8 md:py-10 overflow-x-auto border-t border-b my-10 sm:my-20 md:my-30 border-stone-500 overflow-hidden justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase flex items-center bg-violet-700">
          <div className="flex whitespace-nowrap items-center">
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
          </div>
        </div>

        {/* UI/UX Design Row - responsive text size and padding */}
        <div className="relative  py-5 sm:py-8 md:py-10 border-t border-b border-stone-500 sm:my-20 md:my-30  sm:mb-5 md:mb-60 overflow-x-auto flex items-center justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase">
          <div className="flex whitespace-nowrap items-center">
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
          </div>
        </div>

        {/* Squares with responsive size and positioning */}
        <div className="absolute size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center rotate-[-15deg] overflow-hidden top-[4%] sm:top-[7.5%] left-[5%] sm:left-[8%] md:left-[13%]">
          <img src="public/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center rotate-[-15deg] overflow-hidden sm:top-[36%] top-[28%] md:top-[34%] lg:top-[33.9%] right-[5%] sm:right-[8%] md:right-[13%] shadow-[5px_10px_10px_rgba(76,29,149,0.5)]">
          <img src="public/assets/images/drawing.jpg" alt="Design element" className="w-full h-full object-cover" />
        </div>
        
        <div className="absolute size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center overflow-hidden rotate-[15deg] bottom-[40%] sm:bottom-[16%] md:bottom-[22%] lg:bottom-[20%]left-[5%] sm:left-[8%] md:left-[13%]">
          <img src="public/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;