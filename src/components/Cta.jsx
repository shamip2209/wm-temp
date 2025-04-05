import React, { useRef, useEffect, useState } from "react";

export default function Cta() {
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black flex justify-center items-center pb-20 md:pb-50">
      <div
        ref={ctaRef}
        className={`w-[85%] p-14 bg-gradient-to-r from-pink-600 via-fuchsia-600 via-cyan-400 to-blue-700 
        rounded-2xl flex flex-col md:flex-row justify-between items-center overflow-hidden gap-6
        transition-all duration-1000 ${
          isVisible 
            ? "opacity-100 scale-100" 
            : "opacity-0 scale-95"
        }
        relative`}
        style={{
          boxShadow: isVisible ? "0 0 50px rgba(219, 39, 119, 0.5)" : "none",
          transition: "opacity 1s ease, transform 1s ease, box-shadow 1.5s ease"
        }}
      >
        {/* Background animation */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-pink-600 via-fuchsia-600 via-cyan-400 to-blue-700 opacity-0
          transition-opacity duration-3000 ${isVisible ? "animate-pulse-slow" : ""}`}
          style={{
            animationDuration: "8s",
            animationIterationCount: "infinite",
            animationDelay: "1s"
          }}
        />
        
        {/* Subscribe text */}
        <div className={`lg:w-96 flex flex-col items-center md:items-start gap-6 text-center md:text-left relative z-10
          transition-all duration-1000 transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className={`text-white text-4xl lg:text-5xl font-medium leading-[48px] lg:leading-[64px]
            transition-all duration-700 transform ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Subscribe to Our Newsletter
          </div>
          <div className={`text-white text-base font-medium
            transition-all duration-700 transform ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            By subscribing, you agree with our Privacy Policy and consent to
            receive updates from our company.
          </div>
        </div>

        {/* Email input section */}
        <div className={`w-full lg:w-[512.36px] flex flex-col justify-start items-center md:items-start gap-4 relative z-10
          transition-all duration-1000 transform ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className={`text-white text-xl sm:text-2xl lg:text-3xl font-medium leading-10
            transition-all duration-700 transform ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Your Email Address
          </div>

          {/* Input and Button Section */}
          <div className={`w-full lg:w-full h-auto px-6 py-3 bg-white/20 rounded-[40px] 
            flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0
            transition-all duration-1000 transform ${
              isVisible 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-90"
            }
            ${isInputFocused ? "shadow-lg shadow-white/30" : ""}`}
            style={{ 
              transitionDelay: "1000ms",
              transition: "opacity 1s ease, transform 1s ease, box-shadow 0.3s ease" 
            }}
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 w-full sm:w-auto justify-center items-center bg-transparent text-white text-base font-normal md:placeholder:text-start placeholder:text-center placeholder-white outline-none border-none"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />

            {/* Button (Moves below text on `sm` and smaller) */}
            <div className={`w-full sm:w-48 px-6 py-4 bg-white rounded-[40px] 
              flex justify-center sm:justify-center items-center gap-2
              transition-all duration-700 transform ${
                isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-10"
              } hover:scale-105`}
              style={{ 
                transitionDelay: "1200ms",
                transition: "opacity 0.7s ease, transform 0.7s ease, scale 0.3s ease" 
              }}
            >
              <button
                className="bg-gradient-to-r from-pink-500 via-fuchsia-700 to-cyan-400  
                text-transparent bg-clip-text text-xl text-center font-semibold
                transition-all duration-300 hover:opacity-80"
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

