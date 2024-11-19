import React from "react";
import Data from "./assets/data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full m-auto'>
      <div className='m-20 text-white'>
        <Slider {...settings}>
          {Data.map((d, index) => (
            <div
              key={index}
              className='p-4 border border-gray-400 rounded mb-4 flex flex-col items-center justify-center text-center'
            >
              <div className='mb-4 flex justify-center'>
                <img
                  src={d.image}
                  alt={`${d.name}'s review`}
                  className='w-16 h-16 rounded-full'
                />
              </div>
              <div>
                <p className='font-bold'>
                  {d.name}
                </p>
                <p className='text-sm'>
                  {d.review}
                </p>
                <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded'>
                  Read Only
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
