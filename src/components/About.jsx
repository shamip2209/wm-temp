import React, { useEffect, useRef } from "react";
import data from "/public/assets/data/data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const countRefs = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
        },
      }
    );

    // Animate count boxes with stagger
    gsap.fromTo(
      countRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: countRefs.current[0],
          start: "top 90%",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="w-full h-auto bg-zinc-800 rounded-b-[100px] sm:rounded-b-[150px] md:rounded-b-[220px]">
        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-center mb-5 pt-25 text-5xl font-semibold"
        >
          About Us
        </h1>

        {/* Paragraph */}
        <div
          ref={paraRef}
          className="ml-[15%] mr-[15%] text-center justify-start text-white text-base font-normal leading-normal"
        >
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth. Por scientie, musica, sport etc, litot Europa usa li sam
          vocabular. Li lingues differe solmen in li grammatica, li
          pronunciation e li plu commun vocab. Omnicos directe al desirabilite
          de un no v lingua franca
        </div>

        {/* Count Section */}
        <div className="ml-[10%] mr-[10%] md:ml-[15%] md:mr-[15%] lg:ml-[20%] lg:mr-[20%] pt-10">
          <div className="py-8 px-2 rounded-2xl outline outline-1 outline-offset-[-0.50px] outline-neutral-400 text-2xl sm:text-4xl md:text-5xl flex justify-evenly items-center overflow-hidden flex-wrap gap-y-8">
            {data.About.map((abt, index) => (
              <div
                key={index}
                ref={(el) => (countRefs.current[index] = el)}
                className="w-60 inline-flex flex-col justify-center items-center"
              >
                <div className="self-stretch text-center justify-start text-white font-medium font-['Outfit'] leading-[64px]">
                  {abt.count}
                </div>
                <div className="self-stretch text-center justify-start text-white text-sm sm:text-base md:text-xl lg:text-2xl font-medium font-['Outfit'] leading-loose">
                  {abt.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="w-full p-5 sm:p-10 md:p-12 lg:p-20">
          <img
            ref={imageRef}
            src="/public/assets/images/abt.png"
            alt="about us"
            className="w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover rounded-b-[100px] sm:rounded-b-[150px] md:rounded-b-[220px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
