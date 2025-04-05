import React, { useRef, useEffect, useState } from "react";
import data from "/public/assets/data/data.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollAmount = 316;
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  // Set up Intersection Observer to detect when the section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Add custom styles for hover effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        .testimonial-card {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          cursor: pointer;
        }
        
        .testimonial-card:hover {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);
          z-index: 10;
          position: relative;
        }
        
        .testimonial-card:hover .card-title {
          color: #ec4899;
          transition: color 0.15s ease;
        }
        
        .testimonial-card:hover .card-account {
          background-size: 200% 100%;
          animation: gradientShift 1.5s ease infinite;
        }

        .testimonial-card-active {
          transform: scale(1.08);
          box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4);
          z-index: 10;
          position: relative;
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}} />

      <div 
        ref={sectionRef}
        className="bg-black w-full pb-20 md:pb-50 text-white px-4 sm:px-6 md:px-15"
      >
        {/* Header Section */}
        <div 
          className={`flex flex-wrap items-center gap-4 justify-between py-10 transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-white text-3xl sm:text-4xl pl-2 md:text-5xl font-medium">
            What They Say
          </h1>
          <div className={`flex gap-3 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{ transitionDelay: "400ms" }}
          >
            <button
              onClick={scrollBackward}
              className="text-white px-4 py-2 border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollForward}
              className="text-white px-4 py-2 border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Scrollable Testimonials Section */}
        <div
          ref={scrollRef}
          className="gap-4 scroll-smooth flex flex-nowrap overflow-hidden p-2"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {data.testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card border-2 rounded-xl p-4 w-[90%] sm:w-[250px] h-auto flex flex-col gap-1 shrink-0 snap-center transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              } ${hoveredCard === index ? "testimonial-card-active" : ""}`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseOver={() => setHoveredCard(index)}
            >
              <div className="flex flex-col gap-2">
                <div className={`card-title text-sm sm:text-base font-medium transition-colors duration-300 ${
                  hoveredCard === index ? "text-pink-500" : ""
                }`}>
                  {testimonial.title}
                </div>
                <p className={`card-account bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent text-xs sm:text-sm ${
                  hoveredCard === index ? "animate-pulse" : ""
                }`}>
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
    </>
  );
}