import React from 'react'
import styled from 'styled-components';
import womenMountain from '../assets/images/woman-mountian.jpg'
import Aos from 'aos';

function Section1() {
  Aos.init()
  return (
    <div className='container-full' >

      <h1 className='headerText' >
        “To understand the immeasurable, the mind must be extraordinarily quiet, still.”
      <h3 className='authorHeader'>- Jiddu Krishnamurti </h3>
      </h1>
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
  width: 100vw;
  max-width:100%; 
  object-fit: cover;
  object-position: 50% 70%;
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 154px;
  left: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  bottom: 0px;
`;



