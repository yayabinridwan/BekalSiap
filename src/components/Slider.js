import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541323958/cover.png" alt="cover" height="200px" widht="100%"/>
          </div>
          <div>
            <img src="https://res.cloudinary.com/bekalsiap/image/upload/v1541324485/rect1537.png" alt="discount" height="200px" widht="100%"/>
          </div>
        </Slider>
      </div>
    );
  }
}