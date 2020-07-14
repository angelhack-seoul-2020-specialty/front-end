import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms/label';
import { Field } from '../atoms/field';

const Cont = styled.div`
  display: grid;
  grid-row-gap: 5px;
`;

const TextField = (props) => {
  const { _label, _name } = props;
  
  return (
      <Cont>
        <Label htmlFor={`field_${_name}`}>{_label}</Label>
        <Field {...props} id={`field_${_name}`} />
      </Cont>
  );
};

export { TextField }
