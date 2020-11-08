import React from 'react';
import styled from 'styled-components';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';



function App() {
  return (
    <div>
      <Bg>

        <Section1 />
        <Section2 />
        <Section3/>
        <Section4 />
        <Section5 />
      </Bg>

    </div>
  );
}

export default App;

const Bg = styled.div`
  background: black
`;

//:gradients, fonts
