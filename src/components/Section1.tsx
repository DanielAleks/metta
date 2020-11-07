import React from 'react'
import styled from 'styled-components';
import womenMountain from '../assets/images/woman-mountian.jpg'

function Section1() {
  return (
    <div className= 'container-full'>
      <HeaderText>
        “To understand the immeasurable, the mind must be extraordinarily quiet, still.”
        <By>- Jiddu Krishnamurti </By>
      </HeaderText>
      <Img src={womenMountain} alt="img"/>
    </div>
  )
}

export default Section1

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: 50% 70%;
    
    
`;

const HeaderText = styled.h1`
  position: absolute;
  margin-top: 5%;

`;

const By = styled.div`
  font-size: 20px;
  text-align: end;
`;
  


