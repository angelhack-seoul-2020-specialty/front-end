import React from 'react';
import styled from 'styled-components';
import {Title} from '../atoms/Title';
import {LinkWithBG} from '../atoms/linkWithBG'
import {Link} from 'react-router-dom'

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TitleWithLink = ({title, href, text}) => {
  return (
      <Cont>
        <Title>{title}</Title>
        
        <LinkWithBG>
          <Link to={href}>{text}</Link>
        </LinkWithBG>
      </Cont>
  )
}

export {TitleWithLink}
