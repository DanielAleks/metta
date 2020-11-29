import React from 'react'
import styled from 'styled-components';




interface cardsT {
  cardProps: {
    title: string,
    description: string,
    img: string,
  },
}
function Cards({ cardProps }: cardsT) {



  return (
    <Component>
      <Img src={cardProps.img } alt="image" />
      <FrontBg>

          <h2>{cardProps.title}</h2>
          <h4>{cardProps.description}</h4>
      </FrontBg>
    </Component>
  )
}

export default Cards

const Component = styled.div`
  position: relative;
  height: 100%;
  width: 700px;
  border-radius: 30px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
    width: 100%;
    position: absolute;
    z-index: 1;
    border-radius: 30px 30px 0px 0px;

`;

const FrontBg = styled.div`
  background: #3F4039;
  width: 100%;
  height: 220px;
  bottom: 0px;
  position: absolute;
  z-index: 2;
  border-radius: 30px;
  justify-content: center;
  padding-top: 0px

`;

