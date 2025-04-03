import React from "react";
import data from "/public/assets/data/data.json";

function Partners() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Section Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Title Section */}
          <div className="flex flex-col justify-start items-start gap-6 mb-8 md:mb-0">
            <div className="text-black text-2xl sm:text-3xl font-medium leading-tight">
              Collaborated with <br /> Esteemed Brands
            </div>
            <button className="bg-lime-400 cursor-pointer not-only-of-type:hover:bg-lime-500 transition-colors px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium">
              See All
            </button>
          </div>

          {/* Partners Logos Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center items-center">
            {data.PartnerCollaborators.map((part, index) => (
              <img
                key={index}
                src={part.logo}
                alt={`Brand ${index + 1}`}
                className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Leading brands grey section */}
      <div className="w-full py-10 sm:py-16 bg-neutral-100 flex flex-col justify-start items-center gap-6 sm:gap-10">
        <div className="w-full max-w-3xl mx-auto px-4 text-center text-zinc-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          Trusted by Leading Brands to Deliver Exceptional Design Solutions
        </div>

        {/* Grey Logos Section - Horizontal Row with animation */}
        <div className="w-full overflow-hidden bg-neutral-100 py-6 sm:py-10">
          {/* First row with animation */}
          <div className="flex items-center gap-8 sm:gap-14 animate-scroll">
            {data.greyLogos.concat(data.greyLogos).map((grey, index) => (
              <img
                key={index}
                src={grey.gLogo}
                alt={`Brand ${index + 1}`}
                className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
              />
            ))}
          </div>

          {/* Second row static */}
          <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-10 gap-6 sm:gap-10 md:gap-14 px-4">
            <img
              src="public/assets/Collaborators/thunderblack.png"
              alt="Thunder logo"
              className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
            />
            <img
              src="/public/assets/Collaborators/parallelogram.png"
              alt="Parallelogram logo"
              className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
            />
            <img
              src="/public/assets/Collaborators/hexagonIpsum.png"
              alt="Hexagon Ipsum logo"
              className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
            />
            <img
              src="/public/assets/Collaborators/flowerblack.png"
              alt="Flower logo"
              className="w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;