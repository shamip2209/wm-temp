
    import React from 'react';
    import { useState } from 'react';
    import data from '/src/assets/data/data.json';
    
    export default function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        case: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
       
      };
    
      return (
        <div className="bg-zinc-900 min-h-screen relative overflow-hidden
        before:content-[''] before:absolute before:size-120 before:left-[877px] before:top-[-23px] before:bg-lime-400 before:blur-[294px] before:z-0
        after:content-[''] after:absolute after:size-96 after:left-[-18px] after:top-[700px] after:bg-lime-400 after:blur-[322px] after:z-0" >
    
          <div className="mx-6 px-4 py-16 ">

            {/* Large Screen Layout */}
            <div className="hidden lg:grid grid-cols-2 gap-1 ">
              {/* Left Side - Headline */}
              <div className="flex flex-col">
                <h1 className="text-5xl font-medium text-zinc-300 leading-tight mb-6">
                  Let's Work Together and <br/><span className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent">Create Something Extraordinary!</span>
                </h1>
                <div className="mt-50">
                  <h2 className="text-2xl text-white font-medium mb-3">Follow Us</h2>
                  <p className="text-xs text-white mb-6 font-normal">
                    Stay connected and inspired! Follow us on our social media platforms to keep up with the latest design trends, project updates, and behind-the-scenes insights
                  </p>
                  <div className="flex space-x-6">
                  {data.socialMediaLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="size-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <img 
                      src={social.icon} 
                      alt={`Social media icon ${index + 1}`} 
                      className="size-12"
                    />
                  </a>
                ))}
                  </div>
                </div>
              </div>
    
              {/* Right Side - Contact Form */}
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-[10px] justify-center  item ml-20 w-[480px] ">
                <h2 className="text-3xl text-white text-center mb-8">Let's Work Together!</h2>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <textarea 
                    name="case"
                    placeholder="Describe Your Case" 
                    className="w-full h-52 p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                    value={formData.case}
                    onChange={handleChange}
                  ></textarea>
                  <button className="w-full py-3 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
    

    
            {/* Medium Screen Layout */}
            <div className="lg:hidden grid md:grid-cols-2 gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Let's Work Together and <span className='bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent'>Create Something Extraordinary!</span>
            </h1>
            <div className="mt-8">
              <h2 className="text-xl text-white font-medium mb-3">Follow Us</h2>
              <p className="text-sm text-white mb-6">
                Stay connected on social media for updates!
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
              {data.socialMediaLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="size-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
              >
                <img 
                  src={social.icon} 
                  alt={`Social media icon ${index + 1}`} 
                  className="size-10"
                />
              </a>
            ))}
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-[10px]">
            <h2 className="text-2xl text-white text-center mb-6">Let's Work Together!</h2>
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                value={formData.name}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea 
                name="case"
                placeholder="Describe Your Case" 
                className="w-full h-40 p-3 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
                value={formData.case}
                onChange={handleChange}
              ></textarea>
              <button className="w-full py-3 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition">
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Extra-Large Screen Layout */}
        <div className="hidden 2xl:grid grid-cols-2 gap-1">
  {/* Left Side - Headline */}
  <div className="flex flex-col">
    <h1 className="text-5xl 2xl:text-6xl font-medium text-zinc-300 leading-tight mb-6 2xl:mb-8">
      Let's Work Together and <br/>
      <span className="bg-gradient-to-b from-gray-300 to-gray-500 bg-clip-text text-transparent">
        Create Something Extraordinary!
      </span>
    </h1>
    <div className="mt-50 2xl:mt-60">
      <h2 className="text-2xl 2xl:text-3xl text-white font-medium mb-3 2xl:mb-4">Follow Us</h2>
      <p className="text-xs 2xl:text-sm text-white mb-6 2xl:mb-8 font-normal">
        Stay connected and inspired! Follow us on our social media platforms to keep up with the latest design trends, project updates, and behind-the-scenes insights
      </p>
      <div className="flex space-x-6 2xl:space-x-8">
        {data.socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12 2xl:size-16 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition"
          >
            <img
              src={social.icon}
              alt={`Social media icon ${index + 1}`}
              className="size-20 2xl:size-14"
            />
          </a>
        ))}
      </div>
    </div>
  </div>
    
  {/* Right Side - Contact Form */}
  <div className="bg-white/10 rounded-3xl p-8 2xl:p-10 backdrop-blur-[10px] justify-center item ml-20 2xl:ml-24 w-[480px] 2xl:w-[540px]">
    <h2 className="text-3xl 2xl:text-4xl text-white text-center mb-8 2xl:mb-10">Let's Work Together!</h2>
    <div className="space-y-4 2xl:space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="case"
        placeholder="Describe Your Case"
        className="w-full h-52 2xl:h-60 p-3 2xl:p-4 bg-neutral-400/10 rounded-xl text-white outline-1 outline-gray-200"
        value={formData.case}
        onChange={handleChange}
      ></textarea>
      <button className="w-full py-3 2xl:py-4 bg-lime-400 rounded-full text-zinc-900 font-medium hover:bg-lime-500 transition">
        Send Message
      </button>
    </div>
  </div>
        </div>

       
    
            {/* Bottom Navigation - Consistent across screen sizes */}
            <div className="mt-20 pt-6 justify-evenly">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                {['Home', 'About Me', 'Portfolio', 'Service'].map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-medium">{section}</h3>
                    <div className="space-y-2 text-sm font-normal">
                      <p>UI/UX Design</p>
                      <p>Brand Identity</p>
                      <p>Product Branding</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-18 flex flex-col md:flex-row justify-between text-sm text-white/70">
                <p>Privacy Policy / Terms</p>
                <p>© 2024 Kitpersona, All rights reserved</p>
              </div>
            </div>
          </div>
          </div>
      );
    }
