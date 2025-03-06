import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f6c2fbe6b103cb71.jpg?q=20",
      alt: "Big Sale - Up to 50% Off",
    },
    {
      id: 2,
      src: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/f957904d5145986d.jpg?q=20",
      alt: "Limited Time Offer - Grab Now!",
    },
    {
      id: 3,
      src: "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/c928b14a5cddaf18.jpg?q=20",
      alt: "Best Deals on Electronics",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
