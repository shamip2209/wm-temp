import React, { useState, useEffect, useRef } from "react";
import drawing from "/public/assets/images/drawing.jpg"; // Ensure correct path
import pottedPlant from "/public/assets/images/potted-plant.jpg"; // Ensure correct path

function Collab() {
  // State to track if component is in viewport
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRefs = useRef([]);
  
  // Clear imageRefs on re-render
  useEffect(() => {
    imageRefs.current = [];
  }, []);
  
  // Set up Intersection Observer to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && (!entry.rootBounds || entry.boundingClientRect.top >= 0)) {
          setIsVisible(true);
          // Reset animations when scrolling back to top and then down again
          setTimeout(() => {
            if (!document.querySelector(`[data-animation-active="true"]`)) {
              setIsVisible(false);
              setTimeout(() => setIsVisible(true), 100);
            }
          }, 100);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -20% 0px"
      }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Handle animations when component becomes visible
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    
    // Get container dimensions for calculating float boundaries
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Text animations
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";
      titleRef.current.dataset.animationActive = "true";
      
      setTimeout(() => {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
        titleRef.current.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
      }, 100);
    }
    
    if (spanRef.current) {
      spanRef.current.style.backgroundSize = "200% auto";
      spanRef.current.style.animation = "gradientShift 8s ease infinite";
    }
    
    if (buttonRef.current) {
      buttonRef.current.style.animation = "pulse 2s infinite";
    }
    
    // Float images through the main container
    imageRefs.current.forEach((img, index) => {
      if (img) {
        // Set initial styles
        img.style.opacity = "0";
        img.dataset.animationActive = "true";
        
        // Get image dimensions
        const imgRect = img.getBoundingClientRect();
        const imgWidth = imgRect.width;
        const imgHeight = imgRect.height;
        
        // Calculate safe boundaries (with padding to keep images mostly visible)
        const padding = Math.max(imgWidth, imgHeight) / 2;
        const minX = padding;
        const maxX = containerWidth - padding;
        const minY = padding;
        const maxY = containerHeight - padding;
        
        // Remove absolute positioning constraints
        img.style.top = "auto";
        img.style.left = "auto";
        img.style.right = "auto";
        img.style.bottom = "auto";
        img.style.position = "absolute";
        
        // Set initial random position
        const initialX = Math.random() * (maxX - minX) + minX;
        const initialY = Math.random() * (maxY - minY) + minY;
        img.style.transform = `translate(${initialX}px, ${initialY}px) rotate(${getRotation(index)}deg)`;
        
        // Fade in with slight delay based on index
        setTimeout(() => {
          img.style.opacity = "1";
          img.style.transition = "opacity 1.5s ease-in-out, transform 8s ease-in-out";
          
          // Start floating animation
          floatImage(img, minX, maxX, minY, maxY, index);
        }, 300 * index);
      }
    });
    
    // Function to continuously float images across the container
    function floatImage(img, minX, maxX, minY, maxY, index) {
      // Generate random destination within boundaries
      const destX = Math.random() * (maxX - minX) + minX;
      const destY = Math.random() * (maxY - minY) + minY;
      const rotation = getRotation(index) + (Math.random() - 0.5) * 10;
      
      // Move to new position with rotation
      img.style.transform = `translate(${destX}px, ${destY}px) rotate(${rotation}deg)`;
      
      // Set next movement after current transition completes
      const moveTime = 8000 + (Math.random() * 4000); // 8-12 seconds
      
      // Store timeout ID for cleanup
      img.floatTimeoutId = setTimeout(() => {
        if (containerRef.current && containerRef.current.contains(img)) {
          floatImage(img, minX, maxX, minY, maxY, index);
        }
      }, moveTime);
    }
    
    // Helper function to get rotation based on index
    function getRotation(index) {
      const rotations = [0, 15, -19, -10];
      return rotations[index] || 0;
    }
    
    // Component-specific keyframes
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
    
    // Cleanup function
    return () => {
      // Clear all animation timeouts when component unmounts
      imageRefs.current.forEach(img => {
        if (img && img.floatTimeoutId) {
          clearTimeout(img.floatTimeoutId);
        }
      });
      
      // Remove component-specific stylesheet
      const styleElement = document.getElementById("collab-component-styles");
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, [isVisible]);

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
      {/* Text & Button (in a centered container) */}
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

      {/* Floating Images - initially positioned but will float freely */}
      <img
        ref={addImageRef}
        className="w-24 sm:w-30 md:w-30 lg:w-36 2xl:w-50 h-auto absolute rounded-3xl z-0 opacity-0"
        src={drawing}
        alt="Image 1"
      />
      <img
        ref={addImageRef}
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute rounded-3xl z-0 opacity-0"
        src={pottedPlant}
        alt="Image 2"
      />
      <img
        ref={addImageRef}
        className="w-30 h-30 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 2xl:w-70 2xl:h-70 absolute rounded-3xl z-0 opacity-0"
        src={drawing}
        alt="Image 3"
      />
      <img
        ref={addImageRef}
        className="w-20 h-auto md:w-24 lg:w-28 2xl:w-45 absolute rounded-xl z-0 opacity-0"
        src={pottedPlant}
        alt="Image 4"
      />
    </div>
  );
}

export default Collab;