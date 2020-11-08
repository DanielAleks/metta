import React from 'react'
import styled from 'styled-components';
import forestBg from '../assets/images/forest-bg.jpg'

function Section3() {
  return (
    <div className='container'>
      <Gradient></Gradient>
      <Img src={forestBg} alt="image" />
      <GradientBot></GradientBot>

    </div>
  )
}

export default Section3

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
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