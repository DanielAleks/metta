import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './Slixk';

function Section3() {
  return (
    <div className='container'>

      <div className='forestBg '>
        
        <Gradient></Gradient>
        <GradientBot></GradientBot>
        <Slider>
        hihihihihih
        <SimpleSlider />
        </Slider>


      </div>
    </div>
  )
}

export default Section3

const LargeBg = styled.div`

`;

const Slider = styled.div`
  top: 0px;
`;

const Img = styled.img`
 
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