import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {Content} from '../component/UI/organisims/content';
import {Card} from '../component/UI/molecules/card.jsx';
import {FaCrown} from 'react-icons/fa'
import {Icon} from '../component/UI/atoms/icon';
import {TitleWithLink} from '../component/UI/molecules/titleWithLink';
import {Link} from 'react-router-dom'
import {query} from '../lib/query';
import {decodeToken, getToken} from '../lib/token';
import {classContent} from '../lib/classContent';

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 30% 30%;
  grid-column-gap: 3%;
  grid-row-gap: 30px;
  
  p {
    color: #666;
    text-align: center;
  }
  
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

const Main = ({history}) => {
  const [amount, setAmount] = useState(0);
  const [badges, setBadges] = useState([])
  const [ranking, setRanking] = useState([])
  
  useEffect(() => {
    const user = decodeToken(getToken());
  
    query({
      method: 'get',
      url: `/api/${user.identity}/amount`,
    })
        .then(res => setAmount(res.amount))
        .catch(err => console.error(err));
  
    query({
      method: 'get',
      url: `/api/${user.identity}/badge`,
    })
        .then(res => setBadges(res))
        .catch(err => console.error(err));
  
    query({
      method: 'get',
      url: `/api/ranking`,
    })
        .then(res => setRanking(res))
        .catch(err => console.error(err));
  }, [])
  
  const onLogout = useCallback(() => {
    const check = window.confirm('정말로 로그아웃 하시겠습니까?');
    if (!check) return;
  
  
    document.cookie = "access_token_cookie=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
    console.log('redirect')
    history.replace('/login')
  }, [])
  
  return (
      <Content>
        <TitleWithLink title={decodeToken(getToken()).user_claims.username} href="/request" text={`${classContent('수거', '커피박')} 요청하기`} />
        
        <Link to="/history">
          <Card title={`이번달 ${classContent('기부', '요청')}량`}>
            <h4>{amount} kg</h4>
          </Card>
        </Link>
        
        <Card title={`${badges.length} Badges`} fold>
          <Grid>
            {badges.map(i => (
                <div key={i.name}>
                  <img src={i.image_src} alt="뱃지" />
                  <h4>{i.name}</h4>
                </div>
            ))}
          </Grid>
  
          {!badges.length ? (<p>뱃지가 없습니다 😰</p>) : ""}
        </Card>
        
        <Card title={`누적 ${classContent('기부', '요청')}량 랭킹`} fold>
          <List>
            {ranking.map((_i, i) => (
                <li key={_i.name}>
                  <Icon>{i < 3 ? <FaCrown /> : `${i}위`}</Icon>
                  {_i.name} {decodeToken(getToken()).user_claims.username === _i.name ? "(You)" : null}
                  <span>{_i.amount.toFixed(1)} kg</span>
                </li>
            ))}
          </List>
        </Card>
  
        <b onClick={onLogout}>로그아웃</b>
      </Content>
  )
};

export default Main
