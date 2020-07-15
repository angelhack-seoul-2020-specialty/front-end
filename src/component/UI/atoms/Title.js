import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${(props) => props.card ? '1.2em' : '2em'};
  letter-spacing: 0.72px;
`;

export { Title }
