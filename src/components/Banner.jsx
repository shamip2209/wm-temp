import React, { useEffect, useRef } from "react";

const Banner = () => {
  // Create refs for image elements to apply animations
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  // Add scroll-triggered animations for the images
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Apply different rotation animations based on scroll position
      if (image1Ref.current) {
        image1Ref.current.style.transform = `rotate(${-15 + scrollPosition * 0.02}deg)`;
      }
      
      if (image2Ref.current) {
        image2Ref.current.style.transform = `rotate(${-15 - scrollPosition * 0.01}deg)`;
      }
      
      if (image3Ref.current) {
        image3Ref.current.style.transform = `rotate(${15 + scrollPosition * 0.015}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Add custom styles for animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .slide-right {
          animation: slideRight 20s linear infinite;
        }
        
        .slide-left {
          animation: slideLeft 20s linear infinite;
        }
        
        .image-container {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        
        .image-container:hover {
          z-index: 10;
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.5);
        }
        
        .image-pulse {
          animation: imagePulse 3s ease-in-out infinite;
        }
        
        @keyframes imagePulse {
          0% { transform: scale(1) rotate(-15deg); }
          50% { transform: scale(1.05) rotate(-13deg); }
          100% { transform: scale(1) rotate(-15deg); }
        }
        
        .image-float {
          animation: imageFloat 4s ease-in-out infinite;
        }
        
        @keyframes imageFloat {
          0% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-10px) rotate(-17deg); }
          100% { transform: translateY(0) rotate(-15deg); }
        }
        
        .image-spin {
          animation: imageSpin 6s ease-in-out infinite;
        }
        
        @keyframes imageSpin {
          0% { transform: rotate(15deg); }
          50% { transform: rotate(20deg); }
          100% { transform: rotate(15deg); }
        }
      `}} />

      {/* Background div, responsive height */}
      <div className="bg-black w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[800px]"></div>
      
      <div className="relative w-full min-h-screen bg-black overflow-hidden">
        {/* Motion Design Row - sliding right */}
        <div className="relative py-5 sm:py-8 md:py-10 border-t mb-20 border-b border-stone-500 my-10 sm:my-20 md:my-30 overflow-hidden flex items-center justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase">
          <div className="flex whitespace-nowrap items-center slide-right" style={{ width: "200%" }}>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light px-3 sm:px-4 md:px-5">MOTION DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            {/* Duplicate content for seamless loop */}
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

        {/* Product Design Row - sliding left */}
        <div className="relative py-5 sm:py-8 md:py-10 border-t border-b my-10 sm:my-20 md:my-30 border-stone-500 overflow-hidden justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase flex items-center bg-violet-700">
          <div className="flex whitespace-nowrap items-center slide-left" style={{ width: "200%" }}>
            {/* Duplicate content for seamless loop */}
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            {/* Original content */}
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="font-light text-white px-3 sm:px-4 md:px-5">PRODUCT DESIGN</span>
            <img src="public/assets/images/ecllipse-white.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
          </div>
        </div>

        {/* UI/UX Design Row - sliding right (faster) */}
        <div className="relative py-5 sm:py-8 md:py-10 border-t border-b border-stone-500 sm:my-20 md:my-30 sm:mb-5 md:mb-60 overflow-hidden flex items-center justify-start text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight font-['Sora'] uppercase">
          <div className="flex whitespace-nowrap items-center slide-right" style={{ width: "200%", animationDuration: "15s" }}>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            {/* Duplicate content for seamless loop */}
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
            <span className="px-3 sm:px-4 md:px-5">UI UX DESIGN</span>
            <img src="/public/assets/images/ecllipse.png" alt="ecllipse" className="w-4 sm:w-5 md:w-6"/>
          </div>
        </div>

        {/* Squares with responsive size, positioning and animations */}
        <div ref={image1Ref} className="absolute image-container image-pulse size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center rotate-[-15deg] overflow-hidden top-[4%] sm:top-[7.5%] left-[5%] sm:left-[8%] md:left-[13%] hover:scale-110 transition-transform duration-300">
          <img src="public/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
        </div>
        
        <div ref={image2Ref} className="absolute image-container image-float size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center rotate-[-15deg] overflow-hidden sm:top-[36%] top-[28%] md:top-[34%] lg:top-[33.9%] right-[5%] sm:right-[8%] md:right-[13%] shadow-[5px_10px_10px_rgba(76,29,149,0.5)] hover:scale-110 transition-transform duration-300">
          <img src="public/assets/images/drawing.jpg" alt="Design element" className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
        </div>
        
        <div ref={image3Ref} className="absolute image-container image-spin size-24 sm:size-32 md:size-40 lg:size-52 bg-gray-200 rounded-3xl sm:rounded-3xl flex items-center justify-center overflow-hidden rotate-[15deg] bottom-[40%] sm:bottom-[16%] md:bottom-[22%] lg:bottom-[20%] left-[5%] sm:left-[8%] amd:left-[13%] hover:scale-110 transition-transform duration-300">
          <img src="public/assets/images/potted-plant.jpg" alt="Design element" className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default Banner;