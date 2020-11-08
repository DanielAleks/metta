import React from 'react'
import styled from 'styled-components';
import womenMountain from '../assets/images/woman-mountian.jpg'

function Section1() {
  return (
    <div className='container-full'>
      <HeaderText>
        “To understand the immeasurable, the mind must be extraordinarily quiet, still.”
        <By>- Jiddu Krishnamurti </By>
      </HeaderText>
      <div >
        
        <Gradient></Gradient>

        <Img src={womenMountain} alt="img" />

      </div>
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

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 154px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  align-items: center;
  justify-content: center;
  bottom: 0px;
`;

const Div = styled.div`

`;


const HeaderText = styled.h1`
  position: absolute;
  margin-top: 5%;

`;

const By = styled.div`
  font-size: 20px;
  text-align: end;
`;



