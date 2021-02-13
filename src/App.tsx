import React from 'react';
import styled from 'styled-components';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import flowerCard from './assets/images/flower-card.jpg'
import manCard from './assets/images/man-card.jpg'
import rockCard from './assets/images/rock-card.jpg'
import 'aos/dist/aos.css';

 export const card1 = {
  title: 'Zen meditation',
  description: 'This ancient Buddhist tradition involves sitting upright and following the breath, particularly the way it moves in and out of the belly, and letting the mind “just be.” Its aim is to foster a sense of presence and alertness.',
  img: flowerCard
}

 export const card2 = {
  title: 'Mantra meditation',
  description: 'Focus on a mantra (which could be a syllable, word, or phrase). The idea here is that the subtle vibrations associated with the repeated mantra can encourage positive change — and help you enter an even deeper state of meditation.',
  img: manCard
}

 export const card3 = {
  title: 'Yoga meditation',
  description: 'Yoga meditation is aimed at strengthening the nervous system, so we are better able to cope with everyday stress and problems. A very powerful yoga pose is the savasana (relaxation pose). In order to relax the body and relieve tension.',
  img: rockCard
}
export const card4 = {
  title: 'Vipassana meditation',
  description: 'Another ancient tradition, this one invites you to use your concentration to think of the existential questions with the intention of eventual transformation. Vipassana pushes us to find "insight into the true nature of reality,"',
  img: flowerCard
}

 export const card5 = {
  title: 'Body Scan',
  description: 'Often, our body is doing one thing while our mind is elsewhere. Designed to sync body and mind by performing a mental scan of the top of the head to the end of your toes. Focus on any discomfort, sensations, tensions, or aches that exist',
  img: manCard
}

 export const card6 = {
  title: 'Focused attention',
  description: 'This form of meditation is fairly straightforward because it uses the object of our breath to focus attention, to anchor the mind and maintain awareness. Notice your mind starting to wander? Simply return to the breath.',
  img: rockCard
}
export const card7 = {
  title: 'Reflection',
  description: 'Ask yourself a question: perhaps something such as, “What are you most grateful for?” (Ask in second person, as this will discorage shallow rational answers). While meditating, be aware of the feelings, not the thoughts.',
  img: flowerCard
}

 export const card8 = {
  title: 'Resting awareness',
  description: 'Rather than focusing on the breath or a visualization, this technique involves letting the mind truly rest; thoughts may enter, but instead of distracting you and pulling you away from the present moment, they simply drift away.',
  img: manCard
}

 export const card9 = {
  title: 'Skillful compassion',
  description: 'Focus on a person you know or love and pay attention to the sensations arising from the heart. By opening our hearts and minds for the benefit of other people, we have the opportunity to foster a feeling of happiness in our own mind.',
  img: rockCard
}

function App() { 
  
  return (
      <Bg>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Bg>
  );
}

export default App;

const Bg = styled.div`
  background: black
`;