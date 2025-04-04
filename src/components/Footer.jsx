import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import data from '/public/assets/data/data.json';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    case: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Set up intersection observer to detect when footer is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );

    // Start observing the footer element
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggeredFadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const socialIconAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  const buttonAnimation = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  const formItemAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const gradientAnimation = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { 
        repeat: Infinity, 
        duration: 8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={footerRef}
      className="bg-zinc-900 min-h-screen relative overflow-hidden
      before:content-[''] before:absolute before:size-120 before:left-[877px] before:top-[-23px] before:bg-lime-400 before:blur-[294px] before:z-0
      after:content-[''] after:absolute after:size-96 after:left-[-18px] after:top-[700px] after:bg-lime-400 after:blur-[322px] after:z-0" 
    >
      <div className="mx-6 px-4 py-16 relative z-10">

        {/* Large Screen Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-1">
          {/* Left Side - Headline */}
          <motion.div 
            className="flex flex-col"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className="text-5xl font-medium text-zinc-300 leading-tight mb-6">
              Let's Work Together and <br/>
              <motion.span 
                className="inline-block bg-gradient-to-r from-gray-300 via-lime-300 to-gray-500 bg-clip-text text-transparent bg-size-200"
                variants={gradientAnimation}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                Create Something Extraordinary!
              </motion.span>
            </h1>
            <motion.div 
              className="mt-50"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.6 }
                }
              }}
            >
              <h2 className="text-2xl text-white font-medium mb-3">Follow Us</h2>
              <p className="text-xs text-white mb-6 font-normal">
                Stay connected and inspired! Follow us on our social media platforms to keep up with the latest design trends, project updates, and behind-the-scenes insights
              </p>
              <motion.div 
                className="flex space-x-6"
                variants={staggeredFadeIn}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {data.socialMediaLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="size-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
                    variants={socialIconAnimation}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <img 
                      src={social.icon} 
                      alt={`Social media icon ${index + 1}`} 
                      className="size-12"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-white/10 rounded-3xl p-8 backdrop-blur-[10px] justify-center item ml-20 w-[480px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl text-white text-center mb-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Let's Work Together!
            </motion.h2>
            <motion.div 
              className="space-y-4"
              variants={staggeredFadeIn}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div variants={formItemAnimation}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <textarea 
                  name="case"
                  placeholder="Describe Your Case" 
                  className="w-full h-52 p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.case}
                  onChange={handleChange}
                ></textarea>
              </motion.div>
              <motion.button 
                className="w-full py-3 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition"
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Medium Screen Layout */}
        <div className="lg:hidden grid md:grid-cols-2 gap-8">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Let's Work Together and <motion.span 
                className="inline-block bg-gradient-to-r from-gray-300 via-lime-300 to-gray-500 bg-clip-text text-transparent bg-size-200"
                variants={gradientAnimation}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                Create Something Extraordinary!
              </motion.span>
            </h1>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl text-white font-medium mb-3">Follow Us</h2>
              <p className="text-sm text-white mb-6">
                Stay connected on social media for updates!
              </p>
              <motion.div 
                className="flex justify-center md:justify-start space-x-4"
                variants={staggeredFadeIn}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {data.socialMediaLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="size-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
                    variants={socialIconAnimation}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <img 
                      src={social.icon} 
                      alt={`Social media icon ${index + 1}`} 
                      className="size-10"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-white/10 rounded-2xl p-6 backdrop-blur-[10px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl text-white text-center mb-6"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Let's Work Together!
            </motion.h2>
            <motion.div 
              className="space-y-4"
              variants={staggeredFadeIn}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div variants={formItemAnimation}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <textarea 
                  name="case"
                  placeholder="Describe Your Case" 
                  className="w-full h-40 p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.case}
                  onChange={handleChange}
                ></textarea>
              </motion.div>
              <motion.button 
                className="w-full py-3 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition"
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Extra-Large Screen Layout */}
        <div className="hidden 2xl:grid grid-cols-2 gap-1">
          {/* Left Side - Headline */}
          <motion.div 
            className="flex flex-col"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h1 className="text-5xl 2xl:text-6xl font-medium text-zinc-300 leading-tight mb-6 2xl:mb-8">
              Let's Work Together and <br/>
              <motion.span 
                className="inline-block bg-gradient-to-r from-gray-300 via-lime-300 to-gray-500 bg-clip-text text-transparent bg-size-200"
                variants={gradientAnimation}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                Create Something Extraordinary!
              </motion.span>
            </h1>
            <motion.div 
              className="mt-50 2xl:mt-60"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: 0.3, duration: 0.6 }
                }
              }}
            >
              <h2 className="text-2xl 2xl:text-3xl text-white font-medium mb-3 2xl:mb-4">Follow Us</h2>
              <p className="text-xs 2xl:text-sm text-white mb-6 2xl:mb-8 font-normal">
                Stay connected and inspired! Follow us on our social media platforms to keep up with the latest design trends, project updates, and behind-the-scenes insights
              </p>
              <motion.div 
                className="flex space-x-6 2xl:space-x-8"
                variants={staggeredFadeIn}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {data.socialMediaLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="size-12 2xl:size-16 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
                    variants={socialIconAnimation}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <img 
                      src={social.icon} 
                      alt={`Social media icon ${index + 1}`} 
                      className="size-12 2xl:size-14"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            className="bg-white/10 rounded-3xl p-8 2xl:p-10 backdrop-blur-[10px] justify-center item ml-20 2xl:ml-24 w-[480px] 2xl:w-[540px]"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h2 
              className="text-3xl 2xl:text-4xl text-white text-center mb-8 2xl:mb-10"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              Let's Work Together!
            </motion.h2>
            <motion.div 
              className="space-y-4 2xl:space-y-5"
              variants={staggeredFadeIn}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              <motion.div variants={formItemAnimation}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>
              <motion.div variants={formItemAnimation}>
                <textarea 
                  name="case"
                  placeholder="Describe Your Case" 
                  className="w-full h-52 2xl:h-60 p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200 focus:ring-2 focus:ring-lime-400/50 transition-all duration-300"
                  value={formData.case}
                  onChange={handleChange}
                ></textarea>
              </motion.div>
              <motion.button 
                className="w-full py-3 2xl:py-4 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition"
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Navigation - Consistent across screen sizes */}
        <motion.div 
          className="mt-20 pt-6 justify-evenly"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            {['Home', 'About Me', 'Portfolio', 'Service'].map((section, index) => (
              <motion.div 
                key={index} 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
              >
                <h3 className="font-medium">{section}</h3>
                <div className="space-y-2 text-sm font-normal">
                  <motion.p whileHover={{ x: 5, transition: { duration: 0.2 } }}>UI/UX Design</motion.p>
                  <motion.p whileHover={{ x: 5, transition: { duration: 0.2 } }}>Brand Identity</motion.p>
                  <motion.p whileHover={{ x: 5, transition: { duration: 0.2 } }}>Product Branding</motion.p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-12 flex flex-col md:flex-row justify-between text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p>Privacy Policy / Terms</p>
            <p>© 2024 Kitpersona, All rights reserved</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}