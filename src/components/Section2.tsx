import React from 'react'
import styled from 'styled-components';
import Aos from 'aos';

function Section2() {
  Aos.init()
  return (
      <div className='container-full section2-bg'>
          <h2 data-aos="fade-left" data-aos-once="true" className='section2-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing ela. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor
            is nisi ut aliquip ex ea commodo consequa</h2>
      </div>
  )
}

export default Section2