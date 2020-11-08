import React from 'react'
import styled from 'styled-components';
import forestBg from '../assets/images/forest-bg.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slixk';

function Section3() {
  return (
    <div>

      <div className='container'>
        <Img src={forestBg} alt="image" />
        <Gradient></Gradient>
        <GradientBot></GradientBot>
        <Slide>
          
        <SimpleSlider />
        </Slide>


      </div>
    </div>
  )
}

export default Section3

const Slide = styled.div`
  position: absolute;
  width: 100%;
  bottom: 400px;
  background-color: orange;
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  opacity: 80%;
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 579px;
  top: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 5.01%, #000000 97.34%);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const GradientBot = styled.div`
  position: absolute;
  width: 100%;
  height: 251px;
  bottom: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.33%);
`;