import React from 'react';
import styled from 'styled-components';
import {Icon} from '../component/UI/atoms/icon';
import {MdChevronLeft} from 'react-icons/md';
import {Button} from '../component/UI/atoms/button';

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
  return (
      <Cont>
        <Back>
          <Icon onClick={() => history.go(-1)}>
            <MdChevronLeft />
          </Icon>
        </Back>
        
        <Content>
          <div>
            <h1>커피박 있어요!</h1>
          </div>
          
          <div>
            <h2>1kg</h2>
          </div>
  
          <div>
            <input type="range" />
          </div>
          
          <div>
            <Grids>
              <div>
                0.5kg
              </div>
    
    
              <div>
                1kg
              </div>
    
    
              <div>
                1.5kg
              </div>
    
    
              <div>
                2kg
              </div>
    
              <div>
                3kg
              </div>
    
              <div>
                4kg
              </div>
            </Grids>

          </div>
  
          <Button background round>
            수거 요청하기
          </Button>
        </Content>
      </Cont>
  )
}

export default Request
