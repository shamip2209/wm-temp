import React from 'react'

function About() {
  return (
<div className="w-full h-full relative bg-zinc-900 overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
  {/* Background Blurs */}
  <div className="size-96 absolute bg-lime-400 blur-[250px] top-[-5%] right-[5%]" />
  <div className="size-96 absolute bg-lime-400 blur-[250px] bottom-[-5%] left-[5%]" />

  {/* Contact Box */}
  <div className="w-full max-w-2xl mt-[5%] bg-white/10 rounded-3xl backdrop-blur-md p-6 md:p-10 text-center flex flex-col gap-6">
    <h2 className="text-white text-3xl sm:text-4xl font-medium leading-tight">Let’s Work Together!</h2>
    
    <div className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-none" />
      <input type="email" placeholder="Your Email" className="w-full p-3 bg-neutral-400/10 rounded-xl text-white outline-none" />
      <textarea placeholder="Describe Your Case" className="w-full h-40 p-3 bg-neutral-400/10 rounded-xl text-white outline-none"></textarea>
    </div>

    <button className="w-full py-3 bg-lime-400 rounded-full text-zinc-900 text-lg font-medium hover:scale-105 transition-transform">
      Send Message
    </button>
  </div>

  {/* Follow Us Section */}
  <div className="w-full max-w-lg mt-10 text-center">
    <h3 className="text-white text-2xl font-medium">Follow Us</h3>
    <p className="text-white text-sm mt-2">Stay connected on social media for updates!</p>

    <div className="flex justify-center gap-6 mt-4">
      <div className="size-12 bg-white/20 rounded-xl"></div>
      <div className="size-12 bg-white/20 rounded-xl"></div>
      <div className="size-12 bg-white/20 rounded-xl"></div>
      <div className="size-12 bg-white/20 rounded-xl"></div>
    </div>
  </div>

  {/* Footer Links */}
  <div className="w-full max-w-6xl mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
    {["Home", "About Me", "Portfolio", "Service"].map((title, index) => (
      <div key={index} className="flex flex-col gap-3">
        <h4 className="text-white text-lg font-medium">{title}</h4>
        <p className="text-white text-sm opacity-80">UI/UX Design</p>
        <p className="text-white text-sm opacity-80">Brand Identity</p>
        <p className="text-white text-sm opacity-80">Product Branding</p>
      </div>
    ))}
  </div>

  {/* Footer Bottom */}
  <div className="w-full max-w-6xl mt-10 flex flex-col md:flex-row justify-between items-center text-white text-sm opacity-80 border-t border-gray-700 pt-4">
    <p>Privacy Policy / Terms</p>
    <p>2024 Kitpersona, All rights reserved</p>
  </div>
</div>


  )
}

export default About
