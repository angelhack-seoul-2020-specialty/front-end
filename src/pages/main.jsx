import React from 'react';
import styled from 'styled-components';
import {Content} from '../component/UI/organisims/content';
import {Card} from '../component/UI/molecules/card.jsx';
import {FaCrown} from 'react-icons/fa'
import {Icon} from '../component/UI/atoms/icon';
import {TitleWithLink} from '../component/UI/molecules/titleWithLink';

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 3%;
  grid-row-gap: 30px;
  
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    img {
      width: 40px;
      height: 40px;
    }
    
    h4 {
      margin-top: 15px;
      -webkit-text-stroke: 0 #592a0e;
      font-size: 12px;
      line-height: 1.36;
      color: #3e4958;
    }
  }
`

const List = styled.ul`
  list-style: none;
  
  div {
    padding: 2.5px 0;
    text-align: center;
  }
  
  li {
    padding: 2.5px 0;
    display: grid;
    grid-template-columns: 35px auto 100px;
    font-size: 14px;
    
    &:nth-child(1) span:first-child {
      color: #ffed4a;
    }
    
    &:nth-child(2) span:first-child {
      color: #a9a9a9;
    }
    
    &:nth-child(3) span:first-child {
      color: #b87d5d;
    }
    
    span:first-child {
      margin-right: 5px;
    }
    
    span:last-child {
      text-align: right;
    }
  }
`

const Main = () => {
  return (
      <Content>
        <TitleWithLink title={"Sam's Cafe"} href={"/#"} text={"수거 요청하기"} />
        
        <Card title="이번달 기부량">
          <h4>37kg</h4>
        </Card>
        
        <Card title="5 Badges" fold>
          <Grid>
            <div><img src="/static/asset/badge/badge_1.svg" alt=""/> <h4>우리는 방법을...</h4></div>
            <div><img src="/static/asset/badge/badge_2.svg" alt=""/> <h4>우수 커피점</h4></div>
            <div><img src="/static/asset/badge/badge_3.svg" alt=""/> <h4>badge 3</h4></div>
            <div><img src="/static/asset/badge/badge_4.svg" alt=""/> <h4>badge 4</h4></div>
            <div><img src="/static/asset/badge/badge_5.svg" alt=""/> <h4>badge 5</h4></div>
          </Grid>
        </Card>
        
        <Card title="누적 기부량 랭킹" fold>
          <List>
            <li>
              <Icon><FaCrown /></Icon>
              이원준 커피
              <span>1,242 kg</span>
            </li>
            <li>
              <Icon><FaCrown /></Icon>
              김동준 커피
              <span>944.1 kg</span></li>
            <li>
              <Icon><FaCrown /></Icon>
              임지현 커피
              <span>871.2 kg</span></li>
            <li>
              <span>4위</span>
              강동현 커피
              <span>821.5 kg</span>
            </li>
            <li>
              <span>5위</span>
              조준형 커피
              <span>768.2 kg</span>
            </li>
            <div>...</div>
            <li>
              <span>7위</span>
              Sam's Cafe (You)
              <span>528.3 kg</span>
            </li>
          </List>
        </Card>
      </Content>
  )
};

export default Main
