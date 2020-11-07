import React from 'react'
import styled from 'styled-components';
import forestBg from '../assets/images/forest-bg.jpg'

function Section3() {
  return (
    <div className='container'>
      <Img src={forestBg} alt=""/>
    </div>
  )
}

export default Section3

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`;