import React from 'react'
import styled from 'styled-components';
import womanBuilding from '../assets/images/woman-building.jpg'

function Section5() {
  return (
    <Align className='container'>
      <CenterText>"Lorem ipsum dolor sit aa. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
      oris nisi ut aliquip ex ea commodo consequa"Lorem ipsum
      dolor sit aa. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al
      <By>Begin Meditating Today...</By>
      </CenterText>
      <Img src={womanBuilding} alt="image" />
      <Gradient></Gradient>
      <GradientBot></GradientBot>
    </Align>
  )
}

export default Section5

const Align = styled.div`
  align-items: center;
`;

const Img = styled.img`
 height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 70%;
  opacity: 35%
`;

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

const By = styled.h1`
font-size: 25px;
color: #D4D4D4;
text-align: end
`;

const CenterText = styled.h1`
  position: absolute;
  color: #D4D4D4;
  width: 60%;
  font-size: 22px;
`;