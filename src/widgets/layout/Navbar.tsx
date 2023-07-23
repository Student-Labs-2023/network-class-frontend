// import React from 'react';
import styled from 'styled-components';
import { AddRoomButton } from '../../features/AddRoom.tsx/index.ts';
import { SearchInput } from '../../features/Search/index.ts';
import roomsFormState from '../../pages/Lobby/store/roomsFormState.ts';
import roomsState from '../../pages/Lobby/store/roomsState.ts';
import editIcon from '../../../public/icons/edit.svg';

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
    width: 420px;
    align-items: center;
    padding-bottom: 13px;
    gap: 16px;
`

const EditButton = styled.button`
    display: flex;
    width: 44px;
    height: 44px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--white, #FFF);

    box-shadow: 0px 3px 6px 0px #E5EAF8;
`

interface Props {
    activeLink: string,
    allLength?: number,
    accessLength?: number,
    myLength?: number,
}

const Navbar: React.FC<Props> = ({ activeLink, /*allLength, accessLength, myLength*/ }) => {

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
            <AddRoomButton onClick={addRoom} />
            <EditButton onClick={editRooms}>
                <img src={editIcon} alt='Изменить'/>
            </EditButton>
            <SearchInput/>
        </Right>
    </Container>
  )
}

export default Navbar;