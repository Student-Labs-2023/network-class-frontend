import React, { useRef } from 'react';
import styled from 'styled-components';
import searchIcon from '../../../../public/icons/search.svg';
import socket from '../../../pages/Lobby/store/socket';
import navbarState from '../../../pages/Lobby/store/navbarState';
import { useAuth0 } from "@auth0/auth0-react";

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
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SearchInput: React.FC = () => {
  const dataRef = useRef<HTMLInputElement>(null);
  const { user } = useAuth0();
  const st = socket.state;

  function inputData(data: any) {
    const message = {
      filter: navbarState.state,
      search_string: data,
      user_email: user?.email
    }
    console.log(message);
    st.send(JSON.stringify(message));
    st.close(1, "closed");
  }

  return (
    <Container>
      <img src={searchIcon} alt="поиск" />
      <Input type='text' placeholder='Название' ref={dataRef} onChange={() => inputData(dataRef.current?.value)}/>
    </Container>
  )
}
