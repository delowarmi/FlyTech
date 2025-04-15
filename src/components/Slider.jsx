import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const visaSlides = [
  "/src/assets/sliderimg1.png",
  "/src/assets/sliderimg2.png",
  "/src/assets/sliderimg3.png",
  "/src/assets/sliderimg4.png",
  "/src/assets/sliderimg5.png",
 
];

export default function VisaSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="rounded-lg overflow-hidden w-[1320px] mx-auto">
        <Slider {...settings}>
          {visaSlides.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Visa Slide ${index + 1}`}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
