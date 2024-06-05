// src/components/Navbar.js
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isinputOpen, setIsInputOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);


  return (
    <nav className="bg-white shadow font-text font-medium text-base">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">
              Architecture
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-lg">
            <Link className="text-gray-700 hover:text-blue-600">Home</Link>

            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Projects
                <RiArrowDropDownLine className="h-7 w-7 -ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute text-base bg-white shadow-md mt-2 rounded-sm z-50 min-w-36 py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Houses
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Healthcare
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Industrial
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Hospitals
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Institutional
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Offices
                  </a>
                </div>
              )}
            </div>
            <Link className="text-gray-700 hover:text-blue-600">Favorites</Link>
            <Link className="text-gray-700 hover:text-blue-600">About</Link>
            <Link className="text-gray-700 hover:text-blue-600">Contact</Link>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
              >
                Dashboard
                <RiArrowDropDownLine className="h-7 w-7 -ml-1" />
              </button>
              {isDashboardDropdownOpen && (
                <div className="absolute text-base bg-white shadow-md mt-2 rounded-sm z-50 min-w-44 py-3">
                  <Link
                    to="/manageprojects"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Manage Projects
                  </Link>
                  <Link
                    to="/managecategory"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Manage Category
                  </Link>
                 
                </div>
              )}
            </div>
          </div>
          <div className=" items-center space-x-4 hidden lg:flex">
            {isinputOpen ? (
              <input
                type="text"
                className="border border-gray-400 h-10 rounded-md outline-none px-2 w-44 text-gray-600"
              />
            ) : (
              ""
            )}
            <button className="text-blue-600 border-blue-600 border hover:scale-105 hover:ease-out duration-75   px-4 py-2 rounded-md font-medium ">
              Search
            </button>
          </div>
          <div className="md:hidden ">
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
          <div className="md:hidden  z-50 absolute min-h-64 bg-white pt-4 pb-8 w-52 px-6 rounded-bl-sm right-0 shadow-md">
            <div className="space-y-4 flex flex-col items-start">
              <Link className="text-gray-700 hover:text-blue-600">Home</Link>

              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Projects
                  <RiArrowDropDownLine className="h-7 w-7 -ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className=" bg-white  mt-2 rounded-md z-50 min-w-36">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Healthcare
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Industrial
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Hospitals
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Institutional
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Offices
                    </a>
                  </div>
                )}
              </div>
              <Link className="text-gray-700 hover:text-blue-600">
                Favorites
              </Link>
              <Link className="text-gray-700 hover:text-blue-600">About</Link>
              <Link className="text-gray-700 hover:text-blue-600">Contact</Link>
              <Link className="text-gray-700 hover:text-blue-600">Search</Link>
             
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-blue-600 flex items-center"
                  onClick={() => setIsDashboardDropdownOpen(!isDashboardDropdownOpen)}
                >
                  Dashboard
                  <RiArrowDropDownLine className="h-7 w-7 -ml-1" />
                </button>
                {isDashboardDropdownOpen && (
                  <div className=" bg-white  mt-2 rounded-md z-50 min-w-36">
                   <Link
                    to="/manageprojects"
                    className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Manage Projects
                  </Link>
                  <Link
                    to="/managecategory"
                    className="block px-2 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    Manage Category
                  </Link>
                 
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
