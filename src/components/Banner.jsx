import React from "react";

const Banner = () => {
  return (


    <div>
      <div className="bg-black w-full h-[800px]"></div>
      <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* Motion Design Row */}
      <div className="relative py-10 border-t border-b border-stone-500 my-30 overflow-x-auto flex items-center justify-start text-stone-500 text-6xl font-extralight font-['Sora'] uppercase">
        <div className="flex whitespace-nowrap items-center">
          <span className=" font-light  px-5">MOTION DESIGN</span>
          <img src="/src/assets/images/ecllipse.png" alt="ecllipse" className="w-6"/>
          <span className=" font-light   px-5">MOTION DESIGN</span>
          <img src="/src/assets/images/ecllipse.png" alt="ecllipse" className="w-6"/>
          <span className=" font-light  px-5">MOTION DESIGN</span>
          <img src="/src/assets/images/ecllipse.png" alt="ecllipse" className="w-6"/>
        </div>
      </div>

      {/* Product Design Row */}
      <div className="relative py-10 overflow-x-auto border-t border-b my-30 border-stone-500 overflow-hidden  justify-start text-stone-500 text-6xl font-extralight font-['Sora'] uppercase flex items-center bg-violet-700">
        <div className="flex whitespace-nowrap items-center">
          <span className=" font-light  text-white px-5">PRODUCT DESIGN</span>
          <img src="src/assets/images/ecllipse-white.png" alt="ecllipse" className="w-6"/>
          <span className=" font-light  text-white px-5">PRODUCT DESIGN</span>
          <img src="src/assets/images/ecllipse-white.png" alt="ecllipse" className="w-6"/>
          <span className="font-light text-white px-5">PRODUCT DESIGN</span>
          <img src="src/assets/images/ecllipse-white.png" alt="ecllipse" className="w-6"/>
        </div>
      </div>

      {/* UI/UX Design Row */}
      <div className="relative py-10 border-t border-b border-stone-500 my-30 mb-60 overflow-x-auto flex items-center justify-start text-stone-500 text-6xl font-extralight font-['Sora'] uppercase">
        <div className="flex whitespace-nowrap items-center">
          <span className="px-5">UI UX DESIGN</span>
          <img src="/src/assets/images/ecllipse.png" alt="ecllipse" className="w-6"/>
          <span className="px-5">UI UX DESIGN</span>
          <img src="/src/assets/images/ecllipse.png" alt="ecllipse" className="w-6"/>
          <span className="px-5">UI UX DESIGN</span>
        </div>
      </div>

      {/* Static Squares */}
      <div className="absolute size-52 bg-gray-200 rounded-3xl flex items-center justify-center rotate-[-15deg] overflow-hidden top-[7.5%] left-[13%] shadow-amber-200" >
        <img src="src/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full object-cover" />
      </div>
      
      <div className="absolute size-52 bg-gray-200 rounded-3xl flex items-center justify-center
      rotate-[-15deg] overflow-hidden top-[33.9%] right-[13%] shadow-amber-200">
        <img src="src/assets/images/drawing.jpg" alt="Design element" className="w-full h-full  object-cover" />
      </div>
      
      <div className="absolute size-52 bg-gray-200 rounded-3xl flex items-center justify-center overflow-hidden rotate-[15deg] bottom-[20%] left-[13%]">
        <img src="src/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full  object-cover" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
