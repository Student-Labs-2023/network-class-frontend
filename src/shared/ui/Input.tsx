import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--grey-3);
`

interface Props {
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

const Input: React.FC<Props> = ({ placeholder, type, value, onChange }) => {
  return (
    <InputStyled placeholder={placeholder} type={type ? type : 'text'} value={value} onChange={onChange}/>
  )
}

export default Input