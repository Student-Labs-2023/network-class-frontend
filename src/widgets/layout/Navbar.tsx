// import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { AddRoomButton } from '../../features/AddRoom.tsx/index.ts';
import { SearchInput } from '../../features/Search/index.ts';
import roomsFormState from '../../pages/Lobby/store/roomsFormState.ts';
import roomsState from '../../pages/Lobby/store/roomsState.ts';
import editIcon from '../../../public/icons/edit.svg';
import navbarState from '../../pages/Lobby/store/navbarState.ts';

const Container = styled.div`
    display: flex;
    width: 1224px;
    justify-content: space-between;
    margin: 0 auto 25px;
    border-bottom: 0.5px var(--grey_4) solid;
    padding-top: 66px;
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

const Navbar: React.FC = observer(() => {

    function openAll() {
        navbarState.openAll();
    }

    function openAccess() {
        navbarState.openAccess();
    }

    function openMy() {
        navbarState.openMy();
    }

    function addRoom() {
        navbarState.openMy();
        if (roomsFormState.state === '' && navbarState.state === 'my') {
            roomsFormState.openCreateForm();
            return 0;
        }
        if (roomsFormState.state === 'create') {
            roomsFormState.closeCreateForm();
            return 0;
        }    
    }

    function editRooms() {
        navbarState.openMy();
        if (navbarState.state === 'my') {
            if (roomsState.state === '') {
                roomsState.openEditForm();
                return 0;
            }
            if (roomsState.state === 'edit') {
                roomsState.closeEditForm();
                return 0;
            }
        }
    }

  return (
    <Container>
        <Left>
            <Link onClick={openAll} style={navbarState.state === 'all' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Все классы</Link>
            <Link onClick={openAccess} style={navbarState.state === 'access' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Доступные</Link>
            <Link onClick={openMy} style={navbarState.state === 'my' ? {borderBottom: '2px var(--blue) solid', color: 'var(--blue)'} : {}}>Мои</Link>
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
})

export default Navbar;