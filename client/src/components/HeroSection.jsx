import React from "react";
import Carousel from "./Carousel";

const HeroSection = () => {
  return (
    <>
      <div className="flex py-16 lg:py-0 flex-col lg:flex-row justify-center w-full text-white gap-8 lg:gap-16 items-center bg-custom-gradient h-auto min-h-[666px] p-4 lg:p-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-heading">
            Mapping Masterpieces, Building Dreams
          </h1>
          <p className="text-base lg:text-lg text-gray-100 font-text">
            Precision in design, excellence in construction—your trusted partner
            for architectural projects.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-[#7657E4] font-semibold px-5 py-3 rounded-lg hover:scale-105 transition-transform duration-150">
              View All Projects
            </button>
          </div>
        </div>
        <div className=" border-2 border-gray-300 rounded-md lg:rounded-lg w-full sm:w-auto  flex justify-center lg:justify-end">
        
            <Carousel />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
