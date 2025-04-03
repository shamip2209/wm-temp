import React from "react";
import data from '/public/assets/data/data.json';

function About() {
  return (
    <div className="bg-black text-white">
      <div className="w-full h-auto bg-zinc-800  rounded-b-[100px] sm:rounded-b-[150px] md:rounded-b-[220px]">
        <h1 className="text-center mb-5 pt-25 text-5xl font-semibold">About Us</h1>
        <div className="ml-[15%] mr-[15%] text-center justify-start text-white text-base font-normal leading-normal">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocab. Omnicos directe al desirabilite
          de un no v lingua franca
        </div>

        {/* Count  */}
            <div className="ml-[10%] mr-[10%] md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] pt-10">
            <div className="py-8 px-2 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-neutral-400 text-2xl sm:text-4xl md:text-5xl flex justify-evenly items-center overflow-hidden">
             {data.About.map((abt,index)=>(
                  
                   <div key={index} className="w-60 inline-flex flex-col justify-center items-center">
                     <div className="self-stretch text-center justify-start text-white  font-medium font-['Outfit'] leading-[64px]">
                      {abt.count}
                     </div>
                     <div className="self-stretch text-center justify-start text-white text-sm sm:text-base md:text-xl lg:text-2xl font-medium font-['Outfit'] leading-loose">
                      {abt.description}
                     </div>
                   </div>  
                 
             ))}
            </div>
            </div>

        {/* image container */}

        <div className="w-full p-5 sm:p-10 md:p-12 lg:p-20 ">
          <img src="/public/assets/images/abt.png" alt="" className="w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-b-[100px] sm:rounded-b-[150px] md:rounded-b-[220px]" />
        </div>
      </div>
    </div>
  );
}

export default About;
