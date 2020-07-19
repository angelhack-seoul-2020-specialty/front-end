import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../component/UI/atoms/icon';
import {MdChevronLeft} from 'react-icons/md';
import {Button} from '../component/UI/atoms/button';
import {query} from '../lib/query';
import {classContent} from '../lib/classContent';

const Cont = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 30px calc(100% - 30px);
  padding: 25px 35px;
`

const Back = styled.div`
  color: #3e4958;

  svg {
    height: 30px;
    font-size: 30px;
    margin-left: -14px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: 12% 25% 13% 31% 19%;
  margin-left: -4px;
  
  & > div {
    display: flex;
    align-items: center;
    
    h2, input {
      width: 100%;
    }
  }
 
  h1 {
    font-size: 32px;
    letter-spacing: -0.48px;
  }
  
  h2 {
    text-align: center;
    font-size: 72px;
    letter-spacing: -1.08px;
  }
  
  button {
    margin-top: 15%;
  }
`

const Grids = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 80px 80px 80px;
  grid-column-gap: 30px;
  grid-template-rows: 40px 40px;
  grid-row-gap: 10px;
  
  div {
    line-height: 35px;
    border-radius: 40px;
    border: solid 2px #f2f2f2;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    
    &:hover, &.current {
      border-color: #582c0d;
    }
  }
`

function Request({history}) {
  const [reqAmount, setReqAmount] = useState(0);
  
  const handleRequest = useCallback(() => {
    if (!reqAmount) {
      alert('요청할 수 있는 커피박은 0kg 이상이여야 합니다!');
      return
    }
    
    query({
      method: 'post',
      url: '/api/coffee',
      data: {
        amount : reqAmount
      }
    })
        .then((res) => {
          console.log(res);
          if (res.status === 'success') {
            alert('요청이 완료되었습니다.')
          } else {
            alert('요청을 하던 도중 문제가 발생했습니다.\n다시 시도해주세요.')
          }
        })
        .catch(err => {
          console.error(err);
        })
  }, [reqAmount])
  
  const handleChange = useCallback((e) => {
    setReqAmount(e.target.value)
  }, [])
  
  const handleClick = useCallback((num) => {
    setReqAmount(num)
  }, [])
  
  return (
      <Cont>
        <Back>
          <Icon onClick={() => history.go(-1)}>
            <MdChevronLeft />
          </Icon>
        </Back>
        
        <Content>
          <div>
            <h1>커피박 {classContent('있어', '필요해')}요!</h1>
          </div>
          
          <div>
            <h2>{reqAmount}kg</h2>
          </div>
  
          <div>
            <input type="range" step="0.5" min="0" max="4" onChange={handleChange} value={reqAmount} />
          </div>
          
          <div>
            <Grids>
              <div onClick={() => handleClick(0.5)}>
                0.5kg
              </div>
    
              <div onClick={() => handleClick(1)}>
                1kg
              </div>
    
              <div onClick={() => handleClick(1.5)}>
                1.5kg
              </div>
    
              <div onClick={() => handleClick(2)}>
                2kg
              </div>
    
              <div onClick={() => handleClick(3)}>
                3kg
              </div>
    
              <div onClick={() => handleClick(4)}>
                4kg
              </div>
            </Grids>

          </div>
  
          <Button background round onClick={handleRequest}>
            {classContent('수거', '커피박')} 요청하기
          </Button>
        </Content>
      </Cont>
  )
}

export default Request
