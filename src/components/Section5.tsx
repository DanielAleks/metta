import React from 'react'
import styled from 'styled-components';
import Aos from 'aos';

function Section5() {
  Aos.init()
  return (
    <Align className='container'>
      <div className='buildingBg'></div>
      <CenterText data-aos="fade-down" data-aos-once="true" >
        To get to know who you truly are and not just be wandering in life, you must take the time to
        understand yourself in solitude just like you would with your loved ones.
        Meditation is not running away, rather comfronting your inner demons.
      <By>Wasn't the darkness nice...</By>
      </CenterText>
      <Gradient></Gradient>
      <GradientBot></GradientBot>
    </Align>
  ) 
}

export default Section5

const Align = styled.div`
  align-items: center;
`;

// const Img = styled.img`
//   height: 100vh;
//   width: 100%;
//   object-fit: cover;
//   object-position: 50% 70%;
//   opacity: 35%;
//   background-image:
// `;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 390px;
  top: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.33%);
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const GradientBot = styled.div`
  position: absolute;
  width: 100%;
  height: 428px;
  bottom: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.33%);
`;

const By = styled.h3`
font-size: 25px;
color: #D4D4D4;
text-align: end;
padding: 10px 50px 0px 0px;
`;

const CenterText = styled.h2`
  position: absolute;
  color: #D4D4D4;
    
`;