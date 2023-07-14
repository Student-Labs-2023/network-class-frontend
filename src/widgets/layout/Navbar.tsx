import React, { useState } from 'react';
import styled from 'styled-components';
import roomsState from '../../pages/Lobby/store/roomsListState.ts';
import { AddRoomButton } from '../../features/AddRoom.tsx/index.ts';
import { SearchInput } from '../../features/Search/index.ts';

const Container = styled.div`
    display: flex;
    width: 1224px;
    justify-content: space-between;
    margin: 66px auto 25px;
    border-bottom: 0.5px var(--grey_4) solid;
`

const Left = styled.div`
    display: flex;
    width: 434px;
    justify-content: space-between;
`

const Link = styled.button`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    padding: 12px 0 21px;

    color: var(--grey_3);
`

const Right = styled.div`
    display: flex;
    width: 360px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 13px;
`

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState('all');

    function activateAll() {
        roomsState.choiceAll();
        setActiveLink(roomsState.state);
    }

    function activateAccess() {
        roomsState.choiceAccess();
        setActiveLink(roomsState.state);
    }

    function activateMy() {
        roomsState.choiceMy();
        setActiveLink(roomsState.state);
    }

    function addRoom() {
        roomsState.choiceMy();
        setActiveLink(roomsState.state);
    }

  return (
    <Container>
        <Left>
            <Link onClick={activateAll} style={roomsState.state === 'all' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Все классы(121)</Link>
            <Link onClick={activateAccess} style={roomsState.state === 'access' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Доступные(5)</Link>
            <Link onClick={activateMy} style={roomsState.state === 'my' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Мои(2)</Link>
        </Left>
        <Right>
            <AddRoomButton onClick={addRoom} />
            <SearchInput/>
        </Right>
    </Container>
  )
}

export default Navbar