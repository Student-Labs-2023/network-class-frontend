import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../../public/icons/search.svg';

const Container = styled.div`
    display: flex;
    width: 280px;
    height: 46px;
    padding: 10px;
    align-items: center;
    gap: 6px;

    border-radius: 10px;
    background: var(--white);
    box-shadow: 0px 0px 8px 0px #E5EAF8;
`

const Input = styled.input`
    color: var(--grey-3);
    font-family: Noto Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SearchInput: React.FC = () => {

  return (
    <Container>
        <img src={searchIcon} alt="поиск" />
        <Input placeholder='Поиск'/>
    </Container>
  )
}
