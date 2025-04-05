import React, { useRef, useEffect, useState } from "react";
import data from "/public/assets/data/data.json";

function CustomerTestimonial() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="w-screen" ref={sectionRef}>
      {/* top free space */}
      <div className="bg-black h-20 w-full"></div>
      <div className="py-10 md:p-15 bg-white overflow-hidden">
        <div className="w-screen inline-flex flex-col justify-start items-start gap-10">
          <div 
            className={`justify-start text-zinc-900 text-xl md:text-3xl md:py-15 font-medium transition-all duration-1000 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            Premium Clients, Exceptional
            <br />
            Results: Hear Their Success Stories
          </div>
          <div className="w-full overflow-x-auto pl-3 scroll-smooth flex flex-nowrap gap-6 snap-x snap-mandatory pr-8">
            {data.Customers.map((customer, index) => (
              <div
                key={index}
                className={`scroll-container bg-zinc-900 rounded-3xl flex flex-col
                justify-start items-start
                p-6 sm:w-90 w-80 md:w-110 md:h-[700px] h-auto flex flex-col gap-1 shrink-0 snap-center last:mr-12
                transition-all duration-1000 transform ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-24"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Premium container */}
                <div 
                  className={`px-3 py-1 rounded-xl outline outline-1 outline-offset-[-1px] outline-lime-400 inline-flex justify-center items-center
                  transition-all duration-700 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="text-lime-400 text-sm font-normal font-['Inter_Tight']">
                    Premium Plan
                  </div>
                </div>
                
                {/* Quote section with flex-grow to push the name section down */}
                <div 
                  className={`self-stretch text-white text-lg font-normal font-['Inter_Tight'] leading-relaxed flex-grow my-10 md:my-40
                  transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  {customer.quote}
                </div>
                
                {/* Name and Position at the same bottom alignment */}
                <div 
                  className={`flex flex-col items-start gap-3
                  transition-all duration-1000 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="text-white text-2xl font-medium font-['Inter_Tight'] leading-loose">
                    {customer.cName}
                  </div>
                  <div className="text-lime-400 text-lg font-normal font-['Inter_Tight'] leading-relaxed">
                    {customer.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom free space */}
      <div className="bg-black h-20 w-full hidden md:block"></div>
    </div>
  );
}

export default CustomerTestimonial;