import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
 
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h1>1kjhgfdfghjklkjhgf</h1>
      </div>
      <div>
        <h1>hihihih</h1>
      </div>
      <div>
        <h1>kdlsjfhdshdsjfkhasdkfjhlasjkfhasjdklfhsafkjhdsajflhsafjkhsdakflhsdfjkahsdfkjlh</h1>
      </div>
 
    </Slider>
  );
}

