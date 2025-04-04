import React, { useState, useEffect, useRef } from "react";
import drawing from "/public/assets/images/drawing.jpg"; // Ensure correct path
import pottedPlant from "/public/assets/images/potted-plant.jpg"; // Ensure correct path

function Collab() {
  // State to track if component is in viewport and animation status
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Refs for animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRefs = useRef([]);
  const observerRef = useRef(null);
  
  // Clear imageRefs on re-render
  useEffect(() => {
    imageRefs.current = [];
  }, []);
  
  // Set up Intersection Observer to detect when component enters viewport
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Trigger animations only if they haven't run yet
          if (!hasAnimated) {
            runAnimations();
            setHasAnimated(true);
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
      }
    );
    
    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasAnimated]);
  
  // Main function to run all animations once
  const runAnimations = () => {
    // Prepare all elements
    prepareElements();
    
    // Request animation frame to ensure all elements are prepared
    requestAnimationFrame(() => {
      // Text and button animations
      animateTextAndButton();
      
      // Image animations - start immediately alongside text
      animateImages();
    });
  };
  
  // Prepare all elements for animation
  const prepareElements = () => {
    // Set initial state for title
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
      void titleRef.current.offsetWidth; // Force reflow
    }
    
    // Set initial state for images
    imageRefs.current.forEach((img) => {
      if (img) {
        img.style.opacity = "0";
        const originalRotation = getRotation(imageRefs.current.indexOf(img));
        img.style.transform = `translateY(20px) rotate(${originalRotation}deg)`;
        void img.offsetWidth; // Force reflow
      }
    });
  };
  
  // Animate text and button elements
  const animateTextAndButton = () => {
    if (titleRef.current) {
      titleRef.current.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
      titleRef.current.style.opacity = "1";
      titleRef.current.style.transform = "translateY(0)";
    }
    
    if (spanRef.current) {
      spanRef.current.style.backgroundSize = "200% auto";
      spanRef.current.style.animation = "gradientShift 4s ease infinite";
    }
    
    if (buttonRef.current) {
      buttonRef.current.style.animation = "pulse 1s infinite";
    }
  };
  
  // Animate image elements
  const animateImages = () => {
    imageRefs.current.forEach((img, index) => {
      if (img) {
        const originalRotation = getRotation(index);
        
        // Set transition for images - same duration as text (0.7s)
        img.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
        
        // Make image visible immediately with text (no staggered delay)
        img.style.opacity = "1";
        img.style.transform = `translate(0, 0) rotate(${originalRotation}deg)`;
        
        // Start floating animation after initial appearance
        setTimeout(() => {
          startFloatingAnimation(img, originalRotation);
        }, 700); // Start floating immediately after initial fade-in completes
      }
    });
  };
  
  // Continuous floating animation function with increased movement range
  function startFloatingAnimation(img, originalRotation) {
    // Ensure the image exists
    if (!img) return;
    
    // Calculate float area based on image size - INCREASED movement range
    const imgRect = img.getBoundingClientRect();
    const moveRangeX = imgRect.width * 0.25;  // Increased from 0.1 to 0.25 (25% of width)
    const moveRangeY = imgRect.height * 0.25; // Increased from 0.1 to 0.25 (25% of height)
    
    // Generate new position and rotation
    const offsetX = (Math.random() - 0.5) * moveRangeX;
    const offsetY = (Math.random() - 0.5) * moveRangeY;
    
    // Increased rotation variation
    const rotationVariation = (Math.random() - 0.5) * 8; // Increased from 5 to 8 degrees
    const newRotation = originalRotation + rotationVariation;
    
    // Apply smooth transition to new position
    img.style.transition = "transform 3s ease-in-out"; // Increased from 2s to 3s for smoother movement
    img.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${newRotation}deg)`;
    
    // Continue floating indefinitely
    // Vary the timing more to make movement feel more natural
    const moveTime = 2500 + (Math.random() * 1500); // Increased variation (2.5-4s)
    setTimeout(() => {
      startFloatingAnimation(img, originalRotation);
    }, moveTime);
  }
  
  // Helper function to get rotation based on index
  function getRotation(index) {
    const rotations = [0, 15, -19, -10];
    return rotations[index] || 0;
  }
  
  // Component-specific keyframes
  useEffect(() => {
    if (!document.getElementById("collab-component-styles")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "collab-component-styles";
      styleSheet.innerHTML = `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
    
    // Check if component is already in view on initial load
    const checkInitialVisibility = () => {
      if (containerRef.current && !hasAnimated) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
          runAnimations();
          setHasAnimated(true);
        }
      }
    };
    
    // Run check immediately and after a short delay to ensure the DOM is ready
    checkInitialVisibility();
    setTimeout(checkInitialVisibility, 100);
    
  }, []);

  // Add images to refs collection
  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className="lg:m-15 2xl:m-18 lg:rounded-[24px] h-screen bg-zinc-900 flex justify-center items-center relative overflow-hidden sm:m-0 sm:rounded-none"
    >
      {/* Text & Button */}
      <div className="text-center max-w-3xl px-6 relative z-10">
        <h1 
          ref={titleRef}
          className="text-zinc-300 text-5xl md:text-6xl sm:text-4xl 2xl:text-7xl font-medium leading-tight relative opacity-0"
        >
          Transform Your Ideas into <br />
          <span 
            ref={spanRef}
            className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent"
          >
            Impactful Designs
          </span>
        </h1>
        <button 
          ref={buttonRef}
          className="px-4 py-2 mt-6 sm:px-8 sm:py-4 bg-lime-400 text-zinc-900 text-lg sm:text-sm 2xl:text-2xl font-medium rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(163,230,53,0.7)]"
        >
          Collaborate With Me
        </button>
      </div>

      {/* Floating Images with Responsive Scaling & Overlapping Effect */}
      <img
        ref={addImageRef}
        className="w-24 sm:w-30 md:w-30 lg:w-36 2xl:w-50 h-auto absolute top-[20%] left-[15%] md:top-[9%] md:left-[8%] rounded-3xl z-0 opacity-0"
        src={drawing}
        alt="Image 1"
      />
      <img
        ref={addImageRef}
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute top-[5%] right-[1.5%] 2xl:top-[10%] md:right-[5%] rotate-[15deg] rounded-3xl z-0 opacity-0"
        src={pottedPlant}
        alt="image-2"
      />
      <img
        ref={addImageRef}
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute bottom-[5%] left-[8%] md:bottom-[10%] md:left-[5%] rotate-[-19deg] rounded-3xl z-0 opacity-0"
        src={drawing}
        alt="Image 3"
      />
      <img
        ref={addImageRef}
        className="w-20 h-auto md:w-24 lg:w-28 2xl:w-45 bottom-[100.65px] right-[60.86px] absolute md:bottom-[60.86px] md:right-[70.36px] 2xl:bottom-[10%] 2xl:right-[6%] rotate-[-10deg] rounded-xl z-0 opacity-0"
        src={pottedPlant}
        alt="image 4"
      />
    </div>
  );
}

export default Collab;