import React from "react";

const Youtube = () => {
  return (
    <div className="p-4 bg-gradient-to-b ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Watch Our Winners Stories Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg p-6 text-white shadow-lg w-full max-w-xl h-[480px] mx-auto lg:mr-74">
  <h2 className="text-xl lg:text-3xl font-bold mb-6 text-center">
    WATCH OUR <span className="text-yellow-300">WINNERS'</span> STORIES
  </h2>
  <div
    className="rounded-lg overflow-hidden shadow-lg"
    style={{ height: "280px", width: "100%" }} // Adjusted height
  >
    <iframe
      src="https://www.youtube.com/embed/--_aqOHwxp8"
      title="Winners' Stories"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
  <button className="mt-6 px-10 py-3 bg-white text-blue-500 font-bold rounded-full hover:bg-yellow-300 hover:text-white transition duration-300">
    MORE STORIES
  </button>
</div>




        {/* Latest Draw Results Section */}
          {/* Latest Draw Results Section */}
          <div className="bg-gradient-to-r from-green-300 to-blue-500 rounded-lg p-4 text-white shadow-lg h-[480px]">
  <h2 className="text-xl lg:text-2xl font-bold mb-4">LATEST DRAW RESULTS</h2>
  {/* Grand Draw */}
  <div className="mb-4">
    <h3 className="text-lg font-bold">GRAND DRAW</h3>
    <div className="flex gap-2 justify-start mt-2">
      {[7, 13, 24, 31, 43].map((num) => (
        <div
          key={num}
          className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-700 rounded-full flex items-center justify-center text-lg font-bold"
        >
          {num}
        </div>
      ))}
    </div>
  </div>
  {/* Triple 100 Raffle */}
  <div className="mb-4">
    <h3 className="text-lg font-bold">TRIPLE 100 RAFFLE</h3>
    <ul className="space-y-2 mt-2">
      {[
        { id: 42436810, prize: "AED 100,000" },
        { id: 42517438, prize: "AED 100,000" },
        { id: 42646189, prize: "AED 100,000" },
      ].map((raffle, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-blue-600 rounded-lg px-4 py-2"
        >
          <span className="text-sm lg:text-base">RAFFLE ID {raffle.id}</span>
          <span className="text-sm lg:text-base font-bold">{raffle.prize}</span>
        </li>
      ))}
    </ul>
  </div>
  <button className="px-6 py-2 bg-white text-blue-500 font-bold rounded-full hover:bg-yellow-300 hover:text-white transition duration-300">
    PREVIOUS RESULTS
  </button>
    
  </div>
</div>
      </div>

  );
};

export default Youtube;