import React from 'react'
import styled from 'styled-components';
import womanBuilding from '../assets/images/woman-building.jpg'

function Section5() {
  return (
    <Bg className='container'>
      <CenterText>"Lorem ipsum dolor sit aa. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
      oris nisi ut aliquip ex ea commodo consequa"Lorem ipsum
      dolor sit aa. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut al
      <By>Begin Meditating Today...</By>
      </CenterText>
      <Img src={womanBuilding} alt="image" />
    </Bg>
  )
}

export default Section5

const Bg = styled.div`
  align-items: center;
`;

const Img = styled.img`
 height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 70%;
  
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
  letter-spacing: 0.1em;
`;