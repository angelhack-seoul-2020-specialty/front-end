import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../component/UI/atoms/icon';
import {MdChevronLeft} from 'react-icons/md';
import moment from 'moment';
import {query} from '../lib/qyery';
import {decodeToken, getToken} from '../lib/token';

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
    case "waiting" :
      return '#582c0d';
    case "on_way" :
      return '#2ac1bc';
    case "complete" :
      return '#e3cec5';
    default :
      return '#582c0d';
  }
};

const status_kor = (stat) => {
  switch (stat) {
    case "waiting" :
      return '대기중';
    case "on_way" :
      return '가는중';
    case "complete" :
      return '수거 완료';
    default :
      return '대기중';
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
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const user = decodeToken(getToken());
    
    query({
      method: 'get',
      url: `/api/${user.identity}/coffee`,
    })
        .then(res => setData(res))
        .catch(err => console.error(err));
  }, []);
  
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
            {data.map(i => (
                <div key={i.timestamp}>
                  <h3>
                    {moment(i.timestamp).format('YYYY.MM.DD')}
                  </h3>
                  
                  <div>{i.amount}kg</div>
                  
                  <Status stat={i.status}>{status_kor(i.status)}</Status>
                </div>
            ))}
          </List>
        </Content>
      </Cont>
  );
}

export default History;
