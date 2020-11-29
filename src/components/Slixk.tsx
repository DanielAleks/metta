import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cards from "./Cards";
import { card1, card2, card3, card4, card5, card6, card7, card8, card9 } from "../App";

export default function SimpleSlider({ slidesToShow }) {

  const flashcard = [
    <Cards cardProps={card1} />,
    <Cards cardProps={card2} />,
    <Cards cardProps={card3} />,
    <Cards cardProps={card4} />,
    <Cards cardProps={card5} />,
    <Cards cardProps={card6} />,
    <Cards cardProps={card7} />,
    <Cards cardProps={card8} />,
    <Cards cardProps={card9} />
  ]



  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (

    <div className='container-full'>
      <Slider  {...settings} className='sliderrrr'>

        {flashcard.map((item) =>
          <div>
            <div className='cardContainer'>
              <div className='cardContainerInner'>
                {item}
              </div>
            </div>
          </div>
        )}


      </Slider>
    </div>
  );
}

