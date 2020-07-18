import React from 'react';
import styled from 'styled-components';
import {Icon} from '../component/UI/atoms/icon';
import {MdChevronLeft} from 'react-icons/md';

const Cont = styled.div`
  padding: 30px;
`;

const Back = styled.div`
  color: #3e4958;

  svg {
    height: 30px;
    font-size: 30px;
    margin-left: -9px;
  }
`;

const List = styled.div`
  display: grid;
  grid-column-gap: 27px;
  
  & > div {
    display: grid;
    grid-template-columns: 50% 25% 25%;
    font-size: 16px;
    letter-spacing: 0.64px;
    font-weight: normal !important;
    padding: 20px 5px;
    
    &:not(:last-child) {
      border-bottom: solid 1px #ddd;
    }
  }
`;

const Content = styled.div``;

const status = (stat) => {
  switch (stat) {
    case 0 :
      return "#582c0d";
    case 1 :
      return "#2ac1bc";
    case 2 :
      return "#e3cec5";
    default :
      return "#582c0d";
  }
}

const Status = styled.span`
  font-size: 14.3px;
  line-height: 29.95px;
  font-weight: bold;
  letter-spacing: -0.34px;
  color: #ffffff;
  border-radius: 20.2px;
  background-color: ${(props) => status(props.stat)};
  text-align: center;
`;

function History({history}) {
  return (
      <Cont>
        <Back>
          <Icon onClick={() => history.go(-1)}>
            <MdChevronLeft/>
          </Icon>
        </Back>
        
        <Content>
          <h1>수요 누적 History</h1>
          
          <List>
            <div>
              <h3>
                2020.07.08
              </h3>
              
              <div>100kg</div>
              
              <Status stat={0}>수요 요청</Status>
            </div>
            <div>
              <h3>
                2020.07.08
              </h3>
    
              <div>100kg</div>
    
              <Status stat={1}>오는 중</Status>
            </div>
            <div>
              <h3>
                2020.07.08
              </h3>
    
              <div>100kg</div>
    
              <Status stat={2}>수거 완료</Status>
            </div>
            <div>
              <h3>
                2020.07.08
              </h3>
    
              <div>100kg</div>
    
              <Status stat={2}>수거 완료</Status>
            </div>
            <div>
              <h3>
                2020.07.08
              </h3>
    
              <div>100kg</div>
    
              <Status stat={2}>수거 완료</Status>
            </div>
          </List>
        </Content>
      </Cont>
  );
}

export default History;
