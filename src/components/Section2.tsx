import React from 'react'
import styled from 'styled-components';

function Section2() {
  return (
    
      <BlackBg className= 'container-full'>
          <CenterText>"Lorem ipsum dolor sit amet, consectetur adipiscing ela. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor
            is nisi ut aliquip ex ea commodo consequa</CenterText>
      </BlackBg>
  )
}

export default Section2

const BlackBg = styled.div`
  background: black;
  height: 50vh;
  width: 100%;
  align-items: center;
  
`;

const CenterText = styled.h2  `
  color: #C9CAC5;
  width: 60%;
  text-align: center;
`;