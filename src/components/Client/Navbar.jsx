import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import img from "../../assets/dp.png";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { ChevronDownIcon } from '@heroicons/react/solid';
import {FaBars} from "react-icons/fa6";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inp, setInp] = useState('');
  const [category, setCategory] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isPlayOpen, setIsPlayOpen] = useState(false);
  const [isDrawOpen, setIsDrawOpen] = useState(false);

 
  const togglePlayDropdown = () => setIsPlayOpen(!isPlayOpen);
  const toggleDrawDropdown = () => setIsDrawOpen(!isDrawOpen);

  const handleLinkClick = () => {
    setIsPlayOpen(false);
    setIsDrawOpen(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Hide the hamburger menu when "Enter" is pressed
      setHamburgerVisible(false);
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsPortfolioOpen(false); // Close Portfolio when Services is opened
};

const togglePortfolio = () => {
  setIsPortfolioOpen(!isPortfolioOpen);
  setIsServicesOpen(false); // Close Services when Portfolio is opened
};

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg font-acumin">
      {/* Top Navbar */}
      <div className="flex flex-wrap justify-between items-center px-4 sm:px-8 py-4 border-b border-gray-200">
        {/* Logo Section */}
        <div>
  <a href="/">
    <img src={img} alt="Logo" className="h-10 sm:ml-32" />
  </a>
</div>


        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-blue-400 dark:text-white"
            >
              <FaBars />
            </button>
          </div>
        <div
        className={`${isOpen ? "block" : "hidden"
          } sm:hidden bg-white dark:bg-gray-900 p-4 w-full transition-all duration-300`}
      >
        <div className="flex flex-col items-center gap-4">
       

          
          
          
          

          <ul className="w-full">
            <Link to="/buynow"
            onClick={() => setIsOpen(!isOpen)}
             className="block w-full text-center hover:bg-blue-400 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
              Buy now
            </Link>
            {category &&
              category.map((item) => (
                <Link to={`/view/${item.categoryName}`} className="block w-full text-center hover:bg-blue-400 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
                  {item.categoryName}
                </Link>
              ))}
              {/* play */}

              <div className="space-y-6">
      {/* Play Dropdown */}
      <div className="flex flex-col items-center">
        <button
          onClick={togglePlayDropdown}
          className="flex items-center justify-center w-full max-w-md px-4 py-2 text-black font-semibold hover:bg-blue-200"
        >
          <span>Play</span>
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isPlayOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        <div className={`${isPlayOpen ? 'block' : 'hidden'} mt-2`}>
          <Link
            to="/howtowithdraw"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            How To Withdraw
          </Link>
          <Link
            to="/faq"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            FAQ
          </Link>
        </div>
      </div>

      {/* Draw Dropdown */}
      <div className="flex flex-col items-center">
        <button
          onClick={toggleDrawDropdown}
          className="flex items-center justify-center w-full max-w-md px-4 py-2 text-black font-semibold hover:bg-blue-200"
        >
          <span>Draw</span>
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300 ${
              isDrawOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
        <div className={`${isDrawOpen ? 'block' : 'hidden'} mt-2`}>
          <Link
            to="/previouslivedraws"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Previous Live Withdraw
          </Link>
          <Link
            to="/r"
            onClick={handleLinkClick}
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Winners
          </Link>
        </div>
      </div>
    </div>
           
           
          
            <Link to='/servicerequest'
            onClick={() => setIsOpen(!isOpen)}
             className="block w-full text-center hover:bg-red-600 dark:hover:bg-primary/80 duration-300 py-2 text-lg rounded-md">
              Latest News
            </Link>
            <div>
                <button
                    onClick={togglePortfolio}
                    className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black hover:bg-white"
                >
                    <span>Community</span>
                    <ChevronDownIcon
                        className={`h-5 w-5 transform transition-transform duration-300 ${isPortfolioOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {/* Dropdown menu for Portfolio */}
                <div className={`${isPortfolioOpen ? 'block' : 'hidden'}`}>
      <Link to="/office" className="block px-4 py-2 text-black hover:bg-white" onClick={handleLinkClick}>
       Support Initiatives
      </Link>
      <Link to="/distributer" className="block px-4 py-2 text-black hover:bg-white" onClick={handleLinkClick}>
        Fraud Awareness
      </Link>
      
    </div>
            </div>
          </ul>
        </div>
      </div>

        {/* Right Section */}
        <div className="hidden sm:flex items-center gap-6">
          <button className="text-blue-400 font-medium hover:underline">
            Buy Now
          </button>
          <Link to="/login" className="text-gray-800 font-medium hover:underline">
  Log In
</Link>
          <button className="text-gray-800 font-medium hover:underline">
            Create Account
          </button>
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          {/* Cart Section */}
          <div className="relative flex items-center gap-2 cursor-pointer">
            <div className="bg-black p-2 rounded-full relative">
              <FaShoppingCart className="text-white text-xl" />
              <div className="absolute -top-1 -right-1 bg-yellow-400 text-xs rounded-full px-1">
                0
              </div>
            </div>
            <span className="text-sm font-medium text-gray-800">My Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div
        className={`sm:flex ${
          menuOpen ? "block" : "hidden"
        } bg-white border-t sm:border-none`}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-2">
          {/* Left Menu with Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center text-blue-400 font-semibold">
            {/* PLAY Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1">
                PLAY
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible visibility-hidden transition-all duration-200">
                <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
                  <Link to="/games">How To Withdraw</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
                  <Link to="/faq">FAQ</Link>
                </li>
               
              </ul>
            </div>

            {/* DRAWS Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1">
                DRAWS
                <FiChevronDown className="transition-transform group-hover:rotate-180" />
              </button>
              <ul className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible visibility-hidden transition-all duration-200">
                <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
                  <Link to="/upcoming-draws">Upcoming Draws</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
                  <Link to="/results">Results</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
                  <Link to="/winners">Winners</Link>
                </li>
              </ul>
            </div>

            {/* COMMUNITY Dropdown */}
            <div className="relative group">
  <button className="flex items-center gap-1">
    COMMUNITY
    <FiChevronDown className="transition-transform group-hover:rotate-180" />
  </button>
  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible visibility-hidden transition-all duration-200">
    <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
      <Link to="/support-initiatives">Support Initiatives</Link>
    </li>
    <li className="px-4 py-2 hover:bg-blue-400 hover:text-white">
      <Link to="/fraud-awareness">Fraud Awareness</Link>
    </li>
  </ul>
</div>


            {/* Static Links */}
            <Link to="/latest-news" className="hover:underline">
              LATEST NEWS
            </Link>
            <Link to="/about-us" className="hover:underline">
              ABOUT US
            </Link>
          </div>

          {/* Buy Now, Login, etc. for Mobile */}
          <div className="flex flex-col gap-4 sm:hidden">
            <button className="text-blue-400 font-medium hover:underline">
              Buy Now
            </button>
            <button className="text-gray-800 font-medium hover:underline">
              Log In
            </button>
            <button className="text-gray-800 font-medium hover:underline">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
