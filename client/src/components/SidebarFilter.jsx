import React, { useState } from "react";
import { LuBookmark } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SidebarFilter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const categories = [
    { name: "Hospitals" },
    { name: "Home" },
    { name: "Hotels" },
    { name: "Industrial" },
    { name: "Schools" },
    { name: "Hospitals" },
    { name: "Home" },
    { name: "Hotels" },
    { name: "Industrial" },
    { name: "Schools" },
    { name: "Hospitals" },
    { name: "Home" },
    { name: "Hotels" },
    { name: "Industrial" },
    { name: "Schools" },
  ];

  return (
    <div className="relative md:sticky md:top-0 md:h-screen z-50 md:z-0  ">
      <div
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:transform-none transition-transform duration-300`}
      >
        <div className="p-4 border-b  mt-14 md:mt-0">
          <div className="flex-col flex space-y-4">
            <input
              type="text"
              placeholder="Search"
              className="border w-full border-gray-500 h-10 rounded-md outline-none px-2 text-zinc-700"
            />
            <button className="text-gray-500 border-gray-500 border hover:scale-105 hover:ease-out duration-75 px-4 py-2 rounded-md font-medium">
              Search
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
          <h2 className="text-center py-2 border mx-4 border-blue-600 text-blue-600 font-text font-medium rounded-full mb-2">
            Filter by Categories
          </h2>
          <div className="p-5 w-[15rem] overflow-y-auto h-96 scrollbar-thumb-rounded-full scrollbar-thin">
            {categories?.map((c, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center mr-4 my-5">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className="checkbox checkbox-info h-4 w-4"
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="ml-2 text-zinc-700"
                  >
                    {c.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
         
          </ul>
    
        </nav>
      </div>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <FiArrowLeft className="h-6 w-6 text-gray-700" />
        ) : (
          <FiArrowRight className="h-6 w-6 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default SidebarFilter;
