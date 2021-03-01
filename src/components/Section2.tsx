import React from 'react'
import Aos from 'aos';

function Section2() {
  Aos.init()
  return (
    <div className='container-full section2-bg'>
      <h2 data-aos="fade-left" data-aos-duration='10000' data-aos-once="true" className='section2-text'>
        Reality is often filled with all sorts of illusions which are amplified in size. Close your eyes, take a deep breath and enjoy the darkness for a while.
            </h2>
    </div>
  )
}

export default Section2