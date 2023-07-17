import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--orange);

    display: flex;
    height: 44px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    border-radius: 8px;
    border: 1px solid var(--orange);
    background: var(--white);
    box-shadow: 0px 2px 6px 0px #C5CCD5;
    transition: all .3s ease;
    &:hover {
        color: var(--white);
        background: var(--orange);
    }    
`

interface Props {
    children: React.ReactNode,
}

const FormButton: React.FC<Props> = ({ children }) => {
  return (
    <Button>{children}</Button>
  )
}

export default FormButton