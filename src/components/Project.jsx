import React, { useEffect, useRef } from "react";
import data from "/public/assets/data/data.json";

export default function Project() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations when section comes into view
            entry.target.classList.add("animate-section");
            
            // Get all animated elements inside the section
            const headingEl = entry.target.querySelector(".heading-animate");
            const descriptionEl = entry.target.querySelector(".description-animate");
            const projectCards = entry.target.querySelectorAll(".project-card-animate");
            const projectImages = entry.target.querySelectorAll(".image-animate");
            const projectTitles = entry.target.querySelectorAll(".title-animate");
            const projectDescs = entry.target.querySelectorAll(".desc-animate");
            const buttons = entry.target.querySelectorAll(".button-animate");
            
            // Apply animations with staggered delays
            headingEl.classList.add("animate-fade-left");
            
            setTimeout(() => {
              descriptionEl.classList.add("animate-fade-right");
            }, 300);
            
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in");
                
                // Animate the image inside this card
                const image = projectImages[index];
                if (image) {
                  image.classList.add("animate-scale");
                }
                
                // Animate title with delay
                setTimeout(() => {
                  const title = projectTitles[index];
                  if (title) {
                    title.classList.add("animate-fade-up");
                  }
                }, 200);
                
                // Animate description with delay
                setTimeout(() => {
                  const desc = projectDescs[index];
                  if (desc) {
                    desc.classList.add("animate-fade-up");
                  }
                }, 400);
                
                // Animate button with delay
                setTimeout(() => {
                  const button = buttons[index];
                  if (button) {
                    button.classList.add("animate-pulse-scale");
                  }
                }, 600);
                
              }, 600 + (index * 300));
            });
            
            // Disconnect observer after animation starts
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      {/* Animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .animate-section {
          opacity: 1 !important;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-left {
          animation: fadeLeft 1s ease-out forwards;
        }
        
        .animate-fade-right {
          animation: fadeRight 1s ease-out forwards;
        }
        
        .animate-fade-up {
          animation: fadeUp 0.7s ease-out forwards;
        }
        
        .animate-scale {
          animation: scale 1.2s ease-out forwards;
        }
        
        .animate-pulse-scale {
          animation: pulseScale 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes fadeLeft {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeRight {
          0% {
            opacity: 0;
            transform: translateX(40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale {
          0% {
            opacity: 0;
            transform: scale(1.15);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulseScale {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Hover Animations */
        .image-container {
          overflow: hidden;
          transition: transform 0.4s ease;
        }
        
        .image-container:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .image-container img {
          transition: transform 0.7s ease;
        }
        
        .image-container:hover img {
          transform: scale(1.08);
        }
        
        .button-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .button-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(236, 72, 153, 0.4);
        }
        
        .button-hover:hover .button-text {
          background-size: 200% 200%;
          animation: gradientShift 2s ease infinite;
        }
        
        .title-hover {
          transition: transform 0.3s ease, color 0.3s ease;
          position: relative;
        }
        
        .title-hover:hover {
          transform: translateX(5px);
          background: linear-gradient(90deg, #ec4899, #7e22ce, #1d4ed8, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent !important;
          background-size: 300% 100%;
          animation: gradientShift 3s ease infinite;
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
        className="w-full bg-black py-20 px-10 md:py-30 md:px-15 text-white relative"
        style={{ 
          opacity: 0,
          transition: "opacity 0.5s ease-out"
        }}
      >
        {/* head and details */}
        <div className="inline-flex flex-col justify-center items-start gap-6">
          <div className="heading-animate justify-start text-3xl sm:text-4xl md:text-5xl font-medium leading-[88px] opacity-0">
            Our Lasted Project
          </div>
          <div className="description-animate md:w-[50%] justify-start text-base font-light font-['Plus_Jakarta_Sans'] leading-normal opacity-0">
            Li Europan lingues es membres del sam familie. Lor separat existentie
            es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
            vocabular.
          </div>
        </div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
          {data.projectData.map((project, index) => (
            <div key={index} className="project-card-animate flex flex-col mt-20 opacity-0">
              {/* image container with hover effect */}
              <div className="w-full h-[200px] md:h-[300px] bg-white rounded-2xl overflow-hidden image-container">
                <img
                  className="w-full h-full object-cover image-animate opacity-0"
                  src={project.image}
                  alt="3D Design"
                />
              </div>

              {/* title description and button */}
              <div className="inline-flex justify-between mt-8 items-center">
                {/* tile and description */}
                <div className="w-72 inline-flex flex-col justify-start items-start gap-[5px]">
                  <div className="title-animate title-hover justify-start text-white text-xl sm:text-2xl font-medium leading-[48px] opacity-0 cursor-pointer">
                    {project.title}
                  </div>
                  <div className="desc-animate self-stretch justify-start text-white text-base font-extralight text-md md:text-sm leading-normal opacity-0">
                    {project.description}
                  </div>
                </div>

                {/* Button with Gradient Outline and hover effect */}
                <div className="button-animate p-[2px] rounded-[40px] bg-gradient-to-r from-pink-500 via-fuchsia-700 via-blue-700 to-cyan-400 opacity-0 button-hover">
                  <a href={project.link}>
                    <button className="w-[100px] text-lg sm:w-full px-3 lg:px-6 py-3 bg-black rounded-[40px] flex justify-center items-center">
                      <span className="bg-gradient-to-r from-pink-500 via-fuchsia-700 via-blue-700 to-cyan-400 text-transparent bg-clip-text text-xs lg:text-xl button-text">
                        See Project
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}