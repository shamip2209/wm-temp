      // Create logo components with different styles
      const LogoRed = () => (
        <div className="flex items-center">
          <div className="bg-red-500 rounded-full w-6 h-6 mr-2 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span className="text-gray-800 font-semibold">Logoipsum</span>
        </div>
      );
    
      const LogoGreen = () => (
        <div className="flex items-center">
          <div className="bg-green-500 rounded-md w-6 h-6 mr-2 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </div>
          <span className="text-gray-800 font-bold uppercase">LOGOIPSUM</span>
        </div>
      );
    
      const LogoOrange = () => (
        <div className="flex items-center">
          <div className="text-orange-500 mr-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
          </div>
          <span className="text-gray-800 font-semibold">Logoipsum</span>
        </div>
      );
    
      const LogoFlower = () => (
        <div className="flex items-center">
          <div className="mr-1">
            <div className="relative w-6 h-6">
              <div className="absolute top-0 left-1 w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="absolute top-0 right-1 w-2 h-2 rounded-full bg-green-400"></div>
              <div className="absolute bottom-0 left-1 w-2 h-2 rounded-full bg-blue-400"></div>
              <div className="absolute bottom-0 right-1 w-2 h-2 rounded-full bg-red-400"></div>
            </div>
          </div>
          <span className="font-semibold">Logo <span className="text-gray-800">Ipsum</span></span>
        </div>
      );
    
      const LogoColorful = () => (
        <div className="flex items-center">
          <div className="rounded-full overflow-hidden w-6 h-6 mr-2 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500"></div>
          <span className="text-gray-800 font-bold">logo<span className="text-blue-600">•</span></span>
        </div>
      );
    
      const LogoRainbow = () => (
        <div className="flex items-center">
          <div className="mr-2">
            <div className="w-6 h-6 relative">
              <div className="absolute top-0 left-0 w-3 h-3 bg-yellow-500 rounded-tl-md"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-tr-md"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-bl-md"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-500 rounded-br-md"></div>
            </div>
          </div>
          <span className="text-gray-800 font-semibold">Logoipsum</span>
        </div>
      );
    
      const LogoHex = () => (
        <div className="flex items-center">
          <div className="mr-2 bg-gray-700 w-6 h-6 rounded-md transform rotate-45"></div>
          <span className="text-gray-800 font-medium">Logoipsum</span>
        </div>
      );
    
      return (
        <div className="w-full">
          {/* Top colored section */}
          <div className="bg-white py-12 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
              {/* Heading and button */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-0">
                  Collaborated with<br />Esteemed Brands
                </h2>
                <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 px-8 py-3 rounded-full font-medium transition duration-300">
                  See All
                </button>
              </div>
    
              {/* Colored logos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                <LogoFlower />
                <LogoGreen />
                <LogoColorful />
                <LogoGreen />
                <LogoFlower />
                <LogoRainbow />
                <LogoColorful />
                <LogoRed />
                <LogoOrange />
                <LogoFlower />
                <LogoRed />
                <LogoOrange />
              </div>
            </div>
          </div>
    
          {/* Bottom gray section */}
          <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-12">
                <h3 className="text-xl md:text-2xl text-gray-700 font-medium">
                  Trusted by Leading Brands to Deliver Exceptional Design Solutions
                </h3>
              </div>
    
              {/* Gray scale logos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 opacity-80">
                <div className="flex items-center text-gray-600">
                  <div className="mr-2 bg-gray-600 w-6 h-6 rounded-lg"></div>
                  <span className="font-medium">Logoipsum</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="mr-2 bg-gray-600 w-6 h-6 transform rotate-45"></div>
                  <span className="font-medium">Logoipsum</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="mr-2">
                    <div className="w-6 h-2 bg-gray-600"></div>
                    <div className="w-2 h-4 bg-gray-600 mt-px"></div>
                  </div>
                  <span className="font-bold">logo<span>•</span></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="mr-2 bg-gray-600 w-6 h-6 rounded-full"></div>
                  <span className="font-bold uppercase">LOGOIPSUM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="mr-1">
                    <div className="relative w-6 h-6">
                      <div className="absolute top-0 left-1 w-2 h-2 rounded-full bg-gray-600"></div>
                      <div className="absolute top-0 right-1 w-2 h-2 rounded-full bg-gray-600"></div>
                      <div className="absolute bottom-0 left-1 w-2 h-2 rounded-full bg-gray-600"></div>
                      <div className="absolute bottom-0 right-1 w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                  </div>
                  <span className="font-semibold">Logo <span>Ipsum</span></span>
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="bg-gray-600 rounded-full w-6 h-6 mr-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium">Logoipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );