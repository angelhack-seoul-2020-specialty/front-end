import React, {useCallback, useState} from 'react';
import {Title} from '../atoms/Title';
import {Icon} from '../atoms/iconButton';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: -4px 4px 15px 0 rgba(75, 0, 0, 0.08);
  background-color: #ffffff;
  
  h2 {
    flex: 0 1 60%;
  }
  
  div:nth-child(2) {
    display: inline-flex;
    justify-content: flex-end;
    flex: 0 1 40%;
  }
  
  div[type="toggle"] {
    font-size: 1.3em;
  }
  
  div:nth-child(3) {
    margin-top: 10px;
  }
`;

const Content = styled.div`
`;

const Card = ({title, fold, children}) => {
  const [isShowContent, setIsShowContent] = useState(false);
  
  const handleToggle = useCallback(() => {
    setIsShowContent(prevState => !prevState);
  }, []);
  
  return (
      <Cont>
        <Title card>{title}</Title>
        
        {fold ? (
            <div onClick={handleToggle} type="toggle">
              <Icon>
                {isShowContent ? <FiChevronUp/> : <FiChevronDown/>}
              </Icon>
            </div>
        ) : null}
        
        {!fold || isShowContent ? (
            <Content>
              {children}
            </Content>
        ) : null}
      </Cont>
  );
};

export {Card};
