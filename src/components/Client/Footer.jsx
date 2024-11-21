import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import img from "../../assets/DP1.png"

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-base lg:text-lg font-bold">
      <div className="container mx-auto px-4 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Logo and Navigation */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-6 lg:mb-0">
          <img
            src={img}
            alt="Mahzooz"
            className="w-36 lg:w-40 mb-4 lg:mb-0"
          />
          <nav className="flex space-x-8">
            <a href="#about-us" className="hover:text-yellow-300 transition">
              ABOUT US
            </a>
            <a href="#legal" className="hover:text-yellow-300 transition">
              LEGAL
            </a>
            <a href="#faq" className="hover:text-yellow-300 transition">
              FAQ
            </a>
          </nav>
        </div>

        {/* Contact and Social Media */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-2xl" />
            <a
              href="tel:1234567890"
              className="hover:text-yellow-300 transition"
            >
              CONTACT US
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="#facebook"
              className="p-3 bg-white rounded-full text-blue-500 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#instagram"
              className="p-3 bg-white rounded-full text-blue-500 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#twitter"
              className="p-3 bg-white rounded-full text-blue-500 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#youtube"
              className="p-3 bg-white rounded-full text-blue-500 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="#tiktok"
              className="p-3 bg-white rounded-full text-blue-500 hover:bg-yellow-300 hover:text-white transition"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-white mt-6"></div>
      <div className="text-center py-6 text-lg">
        © MAHZOOZ 2024. LICENSE NO: CN-2965688. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
