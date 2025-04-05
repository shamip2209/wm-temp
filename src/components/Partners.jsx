import React, { useRef, useEffect, useState } from "react";
import data from "/public/assets/data/data.json";

function Partners() {
  const sectionRef = useRef(null);
  const greyLogosSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isGreyVisible, setIsGreyVisible] = useState(false);

  // Set up Intersection Observer to detect when sections enter viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    // Main section observer
    const sectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        sectionObserver.unobserve(entry.target);
      }
    }, observerOptions);

    // Grey logos section observer
    const greyObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsGreyVisible(true);
        greyObserver.unobserve(entry.target);
      }
    }, observerOptions);

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (greyLogosSectionRef.current) {
      greyObserver.observe(greyLogosSectionRef.current);
    }

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      if (greyLogosSectionRef.current) greyObserver.unobserve(greyLogosSectionRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Section Wrapper */}
      <div 
        ref={sectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Title Section */}
          <div className="flex flex-col justify-start items-start gap-6 mb-8 md:mb-0">
            <div 
              className={`text-black text-2xl sm:text-3xl font-medium leading-tight
                transition-all duration-1000 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              Collaborated with <br /> Esteemed Brands
            </div>
            <button 
              className={`bg-lime-400 cursor-pointer hover:bg-lime-500 transition-all duration-700 px-6 sm:px-10 py-2 rounded-full text-sm sm:text-base font-medium ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
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
                className={`w-20 h-auto sm:w-24 md:w-28 lg:w-32 object-contain
                  transition-all duration-700 transform ${
                  isVisible 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Leading brands grey section */}
      <div 
        ref={greyLogosSectionRef}
        className="w-full py-10 sm:py-16 bg-neutral-100 flex flex-col justify-start items-center gap-6 sm:gap-10"
      >
        <div 
          className={`w-full max-w-3xl mx-auto px-4 text-center text-zinc-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed
            transition-all duration-1000 ${
            isGreyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Trusted by Leading Brands to Deliver Exceptional Design Solutions
        </div>

        {/* Grey Logos Section - Horizontal Row with animation */}
        <div className="w-full overflow-hidden bg-neutral-100 py-6 sm:py-10">
          {/* First row with animation */}
          <div 
            className={`flex items-center gap-8 sm:gap-14 
              transition-all duration-1000 ${
              isGreyVisible 
                ? "opacity-100 animate-scroll-partner" 
                : "opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
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
            {[
              "/public/assets/Collaborators/thunderblack.png",
              "/public/assets/Collaborators/parallelogram.png",
              "/public/assets/Collaborators/hexagonIpsum.png",
              "/public/assets/Collaborators/flowerblack.png"
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Static logo ${index + 1}`}
                className={`w-20 sm:w-24 md:w-28 lg:w-36 h-auto object-contain
                  transition-all duration-700 transform ${
                  isGreyVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;

