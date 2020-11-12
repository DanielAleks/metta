import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cards from "./Cards";
import { card1, card2, card3, card4, card5, card6, card7, card8, card9} from "../App";

export default function SimpleSlider({slidesToShow}) {
  const [isSmallScreen, setIsSmallScreen] = useState(true)

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

  // useEffect(() => {
  //   console.log(isSmallScreen, 'isSmallScreen')
  // }, [isSmallScreen])

  // const fireMePlase = () => {
  //   if (window.innerWidth < 800) {
  //     setIsSmallScreen(true)
  //   } else {
  //     setIsSmallScreen(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', fireMePlase)
  //   return () => window.removeEventListener('resize', fireMePlase)
  // }, [])

  const arrOfCardInfo = [

  ]
  return (
    <Div className='container-full'>

      <Slider  {...settings} className='sliderrrr'>
        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>

              <Cards cardProps={card1} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className=' cardContainerInner '>
              <Cards cardProps={card2} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>
              <Cards cardProps={card3} />
            </div>
          </div>
        </div>

        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>

              <Cards cardProps={card4} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>
              <Cards cardProps={card5} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>
              <Cards cardProps={card6} />
            </div>
          </div>
        </div>

        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>

              <Cards cardProps={card7} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>
              <Cards cardProps={card8} />
            </div>
          </div>
        </div>


        <div>
          <div className='cardContainer'>
            <div className='cardContainerInner'>
              <Cards cardProps={card9} />
            </div>
          </div>
        </div>



        {arrOfCardInfo.map((val, index) => {
          return (
            <div>
              <Cards
                cardProps={val}
              />
            </div>
          )
        })}
      </Slider>
    </Div>
  );
}

const Div = styled.div`
display: flex;
justify-content: center;
margin: auto;
`;
