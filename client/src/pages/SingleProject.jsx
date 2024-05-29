import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";




function SingleProject() {
  const slides = [
    {
      url: "https://i.pinimg.com/736x/fc/43/17/fc4317e44c842b3f3f1f922d9fba9b96.jpg",
      name: "Beautiful Scenery",
      location: "Jaipur, Rajasthan",
      readMoreLink: "#",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      name: "Mountain Adventure",
      readMoreLink: "#",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      name: "City Lights",
      readMoreLink: "#",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      name: "Beach Vibes",
      readMoreLink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Set up the autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      const id = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
      setIntervalId(id);

      // Clean up the interval on component unmount
      return () => clearInterval(id);
    } else if (intervalId) {
      clearInterval(intervalId);
    }
  }, [currentIndex, isHovered]);

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:justify-around ">
      <div className="flex flex-col sm:flex-row">
        <div className=" h-[350px] sm:h-[500px] w-[400px] sm:w-[550px] px-4 sm:ml-10 relative group mt-24">
          <div
            className="relative w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className="w-full h-full rounded-md bg-center bg-cover duration-500 absolute top-0 left-0"
            ></div>
          </div>
          {/* Left Arrow */}
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* multiple images */}
        <div className="mt-24 relative ">
          <div className="flex flex-col">
          <div className="flex flex-wrap gap-3 w-[400px]">
            {slides.map((img, index) => (
              <div
                key={index}
                className="h-44 w-48 cursor-pointer"
                onClick={() => openModal(img.url)}
              >
                <img
                  className="rounded-sm h-44 object-cover"
                  src={img.url}
                  alt={img.name}
                />
              </div>
            ))}
          </div>

          {/* date */}
<div className="absolute bottom-0">
  29 june 2020
</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg overflow-hidden">
            <button
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-3 "
              onClick={closeModal}
            >
            <span className="text-lg"> <RxCross2 /></span>

            </button>
            
            <img
              src={modalImage}
              alt="Modal"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Project details */}
      <div className="bg-white/5 min-h-[350px] sm:h-[450px]  sm:w-[350px] text-white p-6 rounded-md mt-24">
      {/* info div */}
      <div >
      <div className="mb-4">
        <span className="text-gray-400">Client :</span>
        <div className="ml-4">Abhinandan Developers Pvt. Ltd., Jaipur</div>
      </div>
      <div className="mb-4">
        <span className="text-gray-400">Location :</span>
        <Link to="https://www.google.com/maps/place/6MX2%2BMHC,+Govindgarh,+Rajasthan+303712/@27.2485048,75.6501975,17.75z/data=!4m15!1m8!3m7!1s0x396cfeec0a6c9053:0xd395424d46ed9bb!2sGovindgarh,+Rajasthan!3b1!8m2!3d27.2472518!4d75.6491269!16s%2Fg%2F1tm0rkf8!3m5!1s0x396cfeecca94998f:0xa8fa651f9f0573dd!8m2!3d27.2492146!4d75.6514707!16s%2Fg%2F11f5dmxfm4?entry=ttu" target="_blank" className="ml-4 flex items-center hover:underline">Mansarovar, Jaipur <span className="ml-1"><SlLocationPin />
</span></Link>
      </div>
      <div className="mb-4">
        <span className="text-gray-400">Built Up Area :</span>
        <div className="ml-4">90000 Sq. M.</div>
      </div>
    
      <div className="mb-4">
        <span className="text-gray-400">Status :</span>
        <div className="ml-4">Under Construction</div>
      </div>

      {/* contact div */}
      <div className="py-4 ">
      <p className=" font-semibold text-blue-500 ">
      ARE YOU LOOKING FOR A NEW PROJECT?
      </p>

      <button className="btn  btn-primary rounded-md text-white mt-4">Contact Us</button>


      </div>
      </div>
    </div>

    </div>
  );
}

export default SingleProject;