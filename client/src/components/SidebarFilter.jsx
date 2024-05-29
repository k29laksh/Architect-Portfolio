// src/App.js
import React from 'react';

const SidebarFilter = () => {
  return (
    <div className="flex absolute top-0 left-0 z-50 h-screen ">
      {/* Sidebar */}
      <div className="w-64 bg-white h-screen shadow-md">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-white">R</span>
            </div>
            <span className="ml-4 text-lg font-semibold">Robin Hood's Team</span>
          </div>
        </div>
        {/* Menu */}
        <nav className="mt-4">
          <ul>
            <li>
              <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
                </svg>
                Explore Visily <span className="ml-2 text-xs text-red-500 bg-red-100 rounded px-1">NEW</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
                Recent boards
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
                Search projects & boards
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="px-4 text-sm font-semibold text-gray-500">Team space</h3>
            <ul>
              <li>
                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h3m0 0h3m-3-3v6m0 0v6m-9 0h18" />
                  </svg>
                  Welcome to Visily
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h3m0 0h3m-3-3v6m0 0v6m-9 0h18" />
                  </svg>
                  Getting Started
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="px-4 text-sm font-semibold text-gray-500">Shared with me</h3>
          </div>
          <div className="mt-6">
            <h3 className="px-4 text-sm font-semibold text-gray-500">Personal space</h3>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SidebarFilter;
