import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100%;
  font-size: 1.25em;
  padding: 15px 0;
  border: none;
  font-weight: bold;
  letter-spacing: 0.2px;
  background-color: ${(props) => props.background ? "#582c0d" : "transparent"};
  color: ${(props) => props.background ? "#fff" : "inherit"};
  border-radius: ${(props) => props.round ? "500px" : 0};
`;

export {Button}
