import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Carousel() {
  const slides = [
    {
      url: 'https://media.architecturaldigest.com/photos/5d3f6c8084a5790008e99f37/master/w_1600%2Cc_limit/GettyImages-1143278588.jpg',
      name: 'Beautiful Scenery',
      location:'Jaipur, Rajasthan',
      readMoreLink: '#'
    },
    {
      url: 'https://housing.com/news/wp-content/uploads/2022/11/ground-floor-house-design-compressed.jpg',
      name: 'Mountain Adventure',
      readMoreLink: '#'
    },
    {
      url: 'https://www.hlx.co.in/images/slide5.jpg',
      name: 'City Lights',
      readMoreLink: '#'
    },
    {
      url: 'https://www.weddingsbyneerajkamra.com/wedding-venue/jaipur/chomu-palace/images/slide2.jpg',
      name: 'Desert Safari',
      readMoreLink: '#'
    },
    {
      url: 'https://www.zricks.com/img/UpdatesBlog/30de4052-3001-49bd-89a6-6d1c81ff8f21Weekend%20Homes%20or%20Vacation%20Homes-compressed.jpg',
      name: 'Beach Vibes',
      readMoreLink: '#'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

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
    <div className=' h-[400px] sm:h-[450px] w-full sm:w-[600px] xl:w-[700px] m-auto  relative group '>
      <div 
        className='relative w-full h-full'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded lg:rounded-none lg:rounded-bl-[3rem] bg-center bg-cover duration-500  absolute top-0 left-0'
        ></div>
        <div className='absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-center md:items-end md:justify-end p-4 text-center sm:text-start sm:p-10 text-white'>
          <a href={slides[currentIndex].readMoreLink} className=" bg-black/40 border-2 z-20 shadow-lg  font-semibold px-5 py-3 rounded-md hover:scale-105 hover:ease-out duration-75">
            View Project
          </a>
        </div>
      </div>
      {/* Left Arrow */}
      <div className='lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
