import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineTrash } from "react-icons/hi2";

const CategoryList = () => {
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
    <div className="  font-text shadow-md">
      <h3 className="font-semibold text-lg text-center py-4">Categories (8)</h3>

      <div className="list flex flex-col py-2 overflow-y-auto h-[530px] scrollbar-thumb-rounded-full scrollbar-thin">
        {categories.map((category, index) => (
          <div
            id={index}
            className="category-name sm:pr-8 flex justify-between items-center font-medium border-b py-2 px-4 text-lg border-black"
          >
            <div className="flex items-center">
              <span className="w-6">{index + 1}.</span>
              <p className="">{category.name}</p>
            </div>

            <div className="flex items-center gap-6">
              <button>
                <FaRegEdit className="h-6 w-6 text-gray-800" />
              </button>
              <button>
                <HiOutlineTrash className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
