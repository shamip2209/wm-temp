import React from "react";
import data from "/src/assets/data/data.json";

export default function Project() {
  return (
    <div className="w-full bg-black py-20 px-10 md:py-30 md:px-15 text-white">
      {/* head and details */}
      <div className="inline-flex flex-col justify-center items-start gap-6">
        <div className="justify-start text-3xl  sm:text-4xl md:text-5xl font-medium leading-[88px]">
          Our Lasted Project
        </div>
        <div className="md:w-[50%] justify-start text-base font-light font-['Plus_Jakarta_Sans'] leading-normal">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular.
        </div>
      </div>
      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
        {data.projectData.map((project, index) => (
          <div key={index} className="flex flex-col mt-20">

            {/* image container */}
            <div className="w-full h-[200px]  md:h-[300px] bg-white rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt="3D Design"
              />
            </div>

{/* title description and button */}
            <div className=" inline-flex justify-between  mt-8 items-center">
              {/* tile and  description*/}
              <div className="w-72 inline-flex flex-col justify-start items-start gap-[5px]">
                <div className=" justify-start text-white 
                text-xl sm:text-2xl font-medium leading-[48px]">
                  {project.title}
                </div>
                <div className="self-stretch justify-start text-white text-base font-extralight text-md md:text-sm leading-normal">
                  {project.description}
                </div>
              </div>

              {/* Button with Gradient Outline */}
              <div className="p-[2px] rounded-[40px] bg-gradient-to-r from-pink-500 via-fuchsia-700 via-blue-700  to-cyan-400 ">
                <a href={project.link}>
                  <button className="w-[100px] text-lg sm:w-full px-3 lg:px-6 py-3 bg-black rounded-[40px] flex justify-center items-center">
                    <span
                      className="bg-gradient-to-r bg-gradient-to-r from-pink-500 via-fuchsia-700 via-blue-700  to-cyan-400 
                                    text-transparent bg-clip-text text-xs lg:text-xl"
                    >
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
  );
}
