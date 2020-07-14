import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { TextField } from '../component/UI/molecules/textField';
import { PasswordField } from '../component/UI/molecules/passwordField';
import { Button } from '../component/UI/atoms/button';
import { query } from '../lib/qyery';

const Cont = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto auto auto;
  grid-row-gap: 30px;
  padding: 30px 36px;
  color: #3e4958;
`

const Title = styled.h1`
  font-size: 1.24em;
  line-height: 1.4;
  letter-spacing: 0.2px;
  text-align: center;
`

const Form = styled.form`
  display: grid;
  grid-row-gap: 16px;
  grid-template-rows: 90px 90px 80px;
  
  button {
    margin-top: 20px;
  }
`

const Register = styled.h2`
  font-size: 13px;
  line-height: 1.54;
  text-align: center;
  
  a {
    color: #582c0d;
  }
`

const Login = ({history}) => {
  const [frmData, setFrmData] = useState({});
  
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    
    setFrmData(prevState => ({
      ...prevState,
      [name] : value
    }))
  }, [])
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    
    if (!frmData.email || !frmData.password) {
      return;
    }
    
    query({
      method: 'post',
      url: '/api/user',
      data: frmData
    })
        .then(() => {
          history.push('/login-type');
        })
        .catch((err) => {
          console.log(err)
          if (err.include('401')) {
              alert('올바르지 않은 이메일입니다.')
          } else {
              alert('서버에서 요청을 처리하던 도중 문제가 발생했습니다.')
          }
        });
  }, [frmData, history])
  
  return (
      <Cont>
        <Title>Sign in</Title>
  
        <Form onSubmit={handleSubmit}>
          <TextField _label="email" name="email" type="email" onChange={handleChange} required />
          <PasswordField onChange={handleChange} required />
          
          <Button background round type="submit">Sign In</Button>
        </Form>
        
        <Register>
          Don't have an account? <a href="/#">Sign Up</a>
        </Register>
      </Cont>
  )
};

export default Login
