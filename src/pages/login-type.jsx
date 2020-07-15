import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../component/UI/atoms/button';

const Cont = styled.div`
  display: grid;
  padding: 66px 20px;
  grid-row-gap: 50px;
  grid-template-rows: auto auto 50px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  div {
    position: relative;
    
    span {
      position: absolute;
      top: -15px;
      right: -30px;
    }
  }
  
  h2 {
    margin-top: 20px;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.2px;
    color: #4b545a;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-template-rows: 230px;
  grid-column-gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  cursor: pointer;
  
  ${(props) => props.current ? 'border: solid 2px #592a0e;' : ''}
  
  h3 {
    margin-top: 33px;
    font-size: 15px;
    color: #4b545a;
  }
  
  &:hover {
    border: solid 2px #592a0e;
  }
`;

const LoginType = ({history}) => {
  const [field, setField] = useState('');
  
  const handleSetField = useCallback((e) => {
    setField(e);
  }, []);
  
  const handleChoose = useCallback(() => {
    history.push('/')
  }, [history])
  
  return (
      <Cont>
        <Profile>
          <div>
            <img src="/static/asset/profile/user.svg" alt=""/>
            
            <span>
              <img src="/static/asset/profile/edit.svg" alt=""/>
            </span>
          </div>
          
          <h2>Sam's Coffee</h2>
        </Profile>
        
        <Container>
          <Field onClick={() => handleSetField('provider')} current={field === 'provider'}>
            <img src="/static/asset/field/provide.svg" alt=""/>
            <h3>제공 업체</h3>
          </Field>
          
          <Field onClick={() => handleSetField('demand')} current={field === 'demand'}>
            <img src="/static/asset/field/demand.svg" alt=""/>
            <h3>업사이클 업체</h3>
          </Field>
        </Container>
        
        {field ? <Button onClick={handleChoose} background round>계속 하기</Button> : null}
      </Cont>
  );
};

export default LoginType;
