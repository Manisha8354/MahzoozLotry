import React, { useState } from "react";

const Water = () => {
  const [lines, setLines] = useState(1);

  return (
    <div className="font-sans bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
          {/* Left Side */}
          <div className="lg:w-3/4 flex flex-col gap-6">
            {/* Heading and Quantity Control */}
            <div className="lg:flex justify-between items-center gap-6 mb-6">
              {/* Heading */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 text-center lg:text-left">
                BUY ONE <br /> WATER BOTTLE <br /> FOR AED{" "}
                <span className="text-blue-400">35</span>
              </h1>

              {/* Image Quantity Control */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  className="bg-yellow-400 w-10 h-10 text-xl font-bold rounded-full"
                  onClick={() => setLines((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <div className="text-lg font-semibold">{lines}</div>
                <button
                  className="bg-yellow-400 w-10 h-10 text-xl font-bold rounded-full"
                  onClick={() => setLines((prev) => prev + 1)}
                >
                  +
                </button>
                <img
                  src="https://cmsapi.mahzooz.ae/uploads/bottle_image_f827071a62.png"
                  alt="Water Bottle"
                  className="w-24 sm:w-32 lg:w-14 h-32 sm:h-40 lg:h-48"
                />
              </div>
            </div>

            {/* Line Selection */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Line 1 */}
              <div className="border-2 border-blue-500 rounded-lg p-4 md:p-6 flex flex-col items-center w-full md:w-1/2">
                <div className="bg-blue-500 text-white px-4 py-1 rounded-t-md -mt-6">
                  Line 1
                </div>
                <div className="grid grid-cols-7 gap-2 mt-4">
                  {Array.from({ length: 49 }, (_, i) => (
                    <button
                      key={i + 1}
                      className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs sm:text-sm text-gray-700 hover:bg-blue-200"
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <div className="flex mt-4 gap-2">
                  <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                    &#8634;
                  </button>
                  <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                    &#x2715;
                  </button>
                </div>
              </div>

              {/* Add Line */}
              <div className="border-2 border-blue-300 rounded-lg p-4 md:p-6 flex flex-col items-center w-full md:w-1/2">
                <div className="bg-blue-300 text-white px-4 py-1 rounded-t-md -mt-6">
                  Line 2
                </div>
                <div className="grid grid-cols-7 gap-2 mt-4 opacity-50">
                  {Array.from({ length: 49 }, (_, i) => (
                    <button
                      key={i + 1}
                      className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-full flex items-center justify-center text-xs sm:text-sm"
                      disabled
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button className="text-blue-500 mt-6 text-sm font-medium hover:underline">
                  Add another line for AED 35
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-gradient-to-b from-green-300 to-blue-300 p-4 md:p-6 lg:p-8 text-center h-auto lg:h-[70vh]">
            {/* Timer Section */}
            <div className="flex flex-wrap justify-center gap-4 text-blue-700 font-bold text-lg md:text-xl lg:text-2xl mb-4">
              {["Days", "Hours", "Mins", "Secs"].map((label, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl">0</div>
                  <div>{label}</div>
                </div>
              ))}
            </div>

            {/* Prize Section */}
            <div className="flex flex-col items-center gap-6">
              {/* Top Prize */}
              <div className="relative bg-gradient-to-b from-yellow-400 to-yellow-500 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex flex-col justify-center items-center shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs md:text-sm px-2 py-1 rounded-full shadow-md uppercase">
                  NEW
                </div>
                <div className="text-white font-bold text-lg md:text-xl">AED</div>
                <div className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
                  20
                </div>
                <div className="text-white font-bold text-sm md:text-base">
                  MILLION
                </div>
              </div>
              <div className="text-blue-900 font-bold text-base md:text-lg lg:text-xl uppercase">
                Top Prize
              </div>

              {/* Triple Raffle Section */}
              <div className="relative bg-gradient-to-b from-blue-400 to-blue-600 w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex flex-col justify-center items-center shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-2 -left-2 bg-yellow-500 text-white text-xs md:text-sm px-2 py-1 rounded-full shadow-md uppercase">
                  HOT
                </div>
                <div className="text-white font-bold text-lg md:text-xl">AED</div>
                <div className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl">
                  300
                </div>
                <div className="text-white font-bold text-sm md:text-base">
                  THOUSAND
                </div>
              </div>
              <div className="text-blue-900 font-bold text-base md:text-lg lg:text-xl uppercase">
                Triple 100 Raffle*
              </div>
              <div className="text-blue-700 font-medium text-xs md:text-sm lg:text-base mt-1">
                *AED 100,000 guaranteed for 3 winners
              </div>

              {/* Our Prizes Button */}
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold text-sm md:text-lg lg:text-xl px-5 py-3 rounded-full shadow-lg hover:shadow-2xl hover:from-yellow-500 hover:to-yellow-700 transform transition duration-300">
                OUR PRIZES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Water;
