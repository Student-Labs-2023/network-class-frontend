import React from 'react';
import styled from 'styled-components';
import join from '../../../../public/icons/join.svg';

const Button = styled.button`
    font-family: var(--font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    color: var(--blue);

    display: flex;
    height: 44px;
    padding: 10px;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    border: 1px solid var(--blue);
`

interface Props {
    disabled: boolean,
}

const JoinButton = () => {
  return (
    <Button onClick={() => {location.href="/lesson"}}>
        Подключиться
        <img src={join} alt="Подключиться" />
    </Button>
  )
}

export default JoinButton;
