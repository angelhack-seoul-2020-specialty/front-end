import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Icon} from '../atoms/iconButton';
import {IoMdEye, IoMdEyeOff} from 'react-icons/io';
import {TextField} from './textField';

const Cont = styled.div`
  position: relative;
  
  // 비밀번호 시각화 버튼
  .sc-AxhCb.cXtruK {
    position: absolute;
    bottom: 13px;
    right: 30px;
    font-size: 1.65em;
    cursor: pointer;
  }
`;

const PasswordField = ({onChange, required}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [valueLength, setValueLength] = useState(0);
  
  const toggleShowPassword = useCallback((e) => {
    e.preventDefault();
    setShowPassword(prevState => !prevState);
  }, []);
  
  const handleChange = useCallback((e) => {
    const {value} = e.target;
    setValueLength(value.length);
    onChange(e)
  }, [onChange]);
  
  return (
      <Cont>
        <TextField
            _label="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleChange}
            required={required}
        />
        
        {valueLength ? (
            <Icon onClick={toggleShowPassword}>
              {showPassword ? <IoMdEyeOff/> : <IoMdEye/>}
            </Icon>
        ) : null}
      </Cont>
  );
};

export {PasswordField};
