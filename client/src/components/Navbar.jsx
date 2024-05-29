// src/components/Navbar.js
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isinputOpen, setIsInputOpen] = useState(false);

  return (
    <nav className="bg-white shadow font-text font-semibold text-base">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Architecture</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
           
              <Link className="text-gray-700 hover:text-blue-600">Home</Link>
              
             
            
            <div className="relative">
            
              <button 
                className="text-gray-700 hover:text-blue-600 flex items-center" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Projects
                
                <RiArrowDropDownLine className='h-7 w-7 -ml-1' />

              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-md mt-2 rounded-md z-50 min-w-36">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Healthcare</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Industrial</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Hospitals</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Institutional</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Offices</a>
                </div>
              )}
            </div>
            <Link className="text-gray-700 hover:text-blue-600">Favorites</Link>
            <Link className="text-gray-700 hover:text-blue-600">About</Link>
            <Link className="text-gray-700 hover:text-blue-600">Contact</Link>
            
          </div>
          <div className=" items-center space-x-4 hidden md:flex">
            {
              isinputOpen? (<input type="text" className='border border-gray-400 h-10 rounded-md outline-none px-2 w-44 text-gray-600' />):""
            }
            <button className="text-blue-600 border-blue-600 border hover:scale-105 hover:ease-out duration-75   px-4 py-2 rounded-md font-medium ">Search</button>
          </div>
          <div className="md:hidden">
            <button 
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16m-7 6h7" 
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden z-50 absolute bg-white pt-4 pb-8 px-12 right-0">
            <div className="space-y-4 ">
              <button className="text-gray-700 hover:text-blue-600 block w-full text-left">Use Cases</button>
              <button className="text-gray-700 hover:text-blue-600 block w-full text-left">AI Design</button>
              <button className="text-gray-700 hover:text-blue-600 block w-full text-left">Templates</button>
              <button className="text-gray-700 hover:text-blue-600 block w-full text-left">Resources</button>
              <button className="text-gray-700 hover:text-blue-600 block w-full text-left">Pricing</button>
              <button className="text-pink-500 hover:text-pink-700 block w-full text-left">Why Visily?</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
