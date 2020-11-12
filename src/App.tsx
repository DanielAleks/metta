import React from 'react';
import styled from 'styled-components';
import './App.css';
import Cards from './components/Cards';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import flowerCard from './assets/images/flower-card.jpg'
import manCard from './assets/images/man-card.jpg'
import rockCard from './assets/images/rock-card.jpg'
import RefToListeners from './components/RefToListeners';






 export const card1 = {
  title: 'Sati (mindfulness)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: flowerCard
}

 export const card2 = {
  title: 'Apanasati (breath meditation)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: manCard
}

 export const card3 = {
  title: 'Samadhi (concentration)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: rockCard
}
export const card4 = {
  title: 'Annussati (recollections)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: flowerCard
}

 export const card5 = {
  title: 'Samatha (tranquility)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: manCard
}

 export const card6 = {
  title: 'Vipassana (insight)',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: rockCard
}
export const card7 = {
  title: 'Asubha-Bhavana',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: flowerCard
}

 export const card8 = {
  title: 'Pratityasamutpada',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: manCard
}

 export const card9 = {
  title: 'Brahma-Viharas',
  description: 'e et dolore magna a3iqua. Ut enim ad mliquin proident, sunt in culpa qui officia deserunt mollitanim id est laborum. culpa qui officia deserunt mollit anim id est laborum.',
  img: rockCard
}


function App() {
  
  

  
  
  return (
    <div>
      <RefToListeners />
      <Bg>

        <Section1 />
        <Section2 />
        <Section3 />
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
