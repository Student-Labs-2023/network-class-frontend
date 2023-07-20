import React from 'react';
import styled from 'styled-components';
import { AddRoomButton } from '../../features/AddRoom.tsx/index.ts';
import { SearchInput } from '../../features/Search/index.ts';
import roomsFormState from '../../pages/Lobby/store/roomsFormState.ts';
import roomsState from '../../pages/Lobby/store/roomsState.ts';

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

const Link = styled.a`
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

interface Props {
    activeLink: string,
    allLength?: number,
    accessLength?: number,
    myLength?: number,
}

const Navbar: React.FC<Props> = ({ activeLink, allLength, accessLength, myLength }) => {

    function addRoom() {
        roomsFormState.openCreateForm();
    }

    function editRooms() {
        if (roomsState.state === '') {
            roomsState.openEditForm();
            return 0;
        }
        if (roomsState.state === 'edit') {
            roomsState.closeEditForm();
            return 0;
        }
    }

  return (
    <Container>
        <Left>
            <Link href='/lobby' style={activeLink === 'all' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Все классы({121})</Link>
            <Link href='/lobby/access' style={activeLink === 'access' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Доступные({5})</Link>
            <Link href='/lobby/my' style={activeLink === 'my' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Мои({2})</Link>
        </Left>
        <Right>
            {activeLink === 'my' ?
                <>
                    <AddRoomButton onClick={addRoom} />
                    <button onClick={editRooms}>изменить</button>
                </>
            :
            <></>}
            <SearchInput/>
        </Right>
    </Container>
  )
}

export default Navbar;