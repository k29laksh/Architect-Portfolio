import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function SingleProject() {
  const slides = [
    {
      url: "https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_1600%2Cc_limit/GettyImages-1143278588.jpg",
      name: "Beautiful Scenery",
      location: "Jaipur, Rajasthan",
      readMoreLink: "#",
    },
    {
      url: "https://housing.com/news/wp-content/uploads/2022/11/ground-floor-house-design-compressed.jpg",
      name: "Mountain Adventure",
      readMoreLink: "#",
    },
    {
      url: "https://www.hlx.co.in/images/slide5.jpg",
      name: "City Lights",
      readMoreLink: "#",
    },
    {
      url: "https://www.weddingsbyneerajkamra.com/wedding-venue/jaipur/chomu-palace/images/slide2.jpg",
      name: "Desert Safari",
      readMoreLink: "#",
    },
    {
      url: "https://www.zricks.com/img/UpdatesBlog/30de4052-3001-49bd-89a6-6d1c81ff8f21Weekend%20Homes%20or%20Vacation%20Homes-compressed.jpg",
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
      <div className="flex flex-wrap justify-center">
        <div className=" h-[350px] sm:h-[500px] lg:h-[550px]  w-[400px] sm:w-[650px] px-4 sm:ml-10 relative group mt-4 md:mt-8 lg:mt-12">
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
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2 ">
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
        <div className="mt-12 relative ">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-wrap gap-1 w-[400px] justify-center md:justify-normal">
              {slides.map((img, index) => (
                <div
                  key={index}
                  className="h-40 w-44 cursor-pointer"
                  onClick={() => openModal(img.url)}
                >
                  <img
                    className="rounded-sm h-40 object-cover"
                    src={img.url}
                    alt={img.name}
                  />
                </div>
              ))}
            </div>

            {/* date */}
            <div className=" py-4 lg:py-0 lg:absolute lg:bottom-0  font-semibold">
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
              <span className="text-lg">
                {" "}
                <RxCross2 />
              </span>
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
      <div className=" min-h-[350px] sm:h-[450px] bg-zinc-800 sm:w-[350px] text-white p-6 rounded-md mt-12">
        {/* info div */}
        <div>
          <div className="mb-4">
            <span className="text-white">Client :</span>
            <div className="ml-4 text-gray-200">
              Abhinandan Developers Pvt. Ltd., Jaipur
            </div>
          </div>
          <div className="mb-4">
            <span className="text-white">Location :</span>
            <Link
              to="https://www.google.com/maps/place/6MX2%2BMHC,+Govindgarh,+Rajasthan+303712/@27.2485048,75.6501975,17.75z/data=!4m15!1m8!3m7!1s0x396cfeec0a6c9053:0xd395424d46ed9bb!2sGovindgarh,+Rajasthan!3b1!8m2!3d27.2472518!4d75.6491269!16s%2Fg%2F1tm0rkf8!3m5!1s0x396cfeecca94998f:0xa8fa651f9f0573dd!8m2!3d27.2492146!4d75.6514707!16s%2Fg%2F11f5dmxfm4?entry=ttu"
              target="_blank"
              className="ml-4 flex items-center hover:underline text-gray-200"
            >
              Mansarovar, Jaipur{" "}
              <span className="ml-1">
                <SlLocationPin />
              </span>
            </Link>
          </div>
          <div className="mb-4">
            <span className="text-white">Built Up Area :</span>
            <div className="ml-4 text-gray-200">90000 Sq. M.</div>
          </div>

          <div className="mb-4">
            <span className="text-white">Status :</span>
            <div className="ml-4 text-gray-200">Under Construction</div>
          </div>

          {/* contact div */}
          <div className="py-4 ">
            <p className=" font-semibold text-blue-500 ">
              ARE YOU LOOKING FOR A NEW PROJECT?
            </p>

            <button className="btn border-blue-500 border py-2 px-3  rounded-md text-blue-500 mt-4">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
