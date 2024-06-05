import { useState } from "react";
import SidebarFilter from "../components/SidebarFilter";

const Products = () => {
 

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="flex">
        <SidebarFilter/>
        {/* <div className="hidden sm:block p-3 mt-2 mb-2 fixed ">
          <h2 className="text-center py-2 border text-gray-300 rounded-full mb-2">
            Filter by Categories
          </h2>

          <div className="p-5 w-[15rem] overflow-y-auto max-h-[80vh] scrollbar-thumb-rounded-full scrollbar-thin">
            {categories?.map((c, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center mr-4 my-5">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    className="checkbox checkbox-info"
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="ml-2 text-white dark:text-gray-300"
                  >
                    {c.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="projectContainer  flex flex-wrap justify-center md:justify-start gap-8 p-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="card max-w-80 sm:max-w-96 bg-base-100 shadow-xl relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <figure className="rounded">
                <img
                  src="https://img.freepik.com/premium-photo/geometric-facades-residential-building_294094-27.jpg"
                  alt="Shoes"
                  className="rounded"
                />
                {hoveredIndex === index && (
                  <div className="overlay rounded px-6 absolute inset-0 flex items-center justify-center bg-black overflow-hidden bg-opacity-60 text-white text-center">
                    <div className="">
                      <h2 className="text-2xl font-bold mb-2 text-gray-200">Industrial Building</h2>
                      <p className="mb-4 text-xl font-semibold text-gray-200">
                        Jio Building Jaipur
                      </p>
                      <button className="btn btn-primary text-white ">Read More</button>
                    </div>
                  </div>
                )}
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
