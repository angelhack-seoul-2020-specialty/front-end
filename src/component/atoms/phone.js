import React from 'react';
import styled from 'styled-components';

const Phone = styled.div`
  width: 100vw;
  height: 100vh;
  
  @media (min-width: 720px) or (min-height: 1000px) {
    background-image: url("/static/images/phone.png");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const Container = styled.div`
  @media (min-width: 720px) or (min-height: 1000px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 362px;
    max-height: 670px;
    overflow-y: auto;
    background: white;
  }
`

const PhoneUI = ({ children }) => (
    <Phone>
      <Container>
        {children}
      </Container>
    </Phone>
)

export { PhoneUI }
