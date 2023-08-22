import React, { useState, useEffect } from 'react';
import { IRoom } from '../entities/room/api/models';
import { useRoomsList } from '../entities/room/api/useRoomsList';
import { useMyRooms } from '../entities/room/api/useMyRooms';
import { useAccessRooms } from '../entities/room/api/useAccessRooms';
import navbarState from '../pages/Lobby/store/navbarState';
import socket from '../pages/Lobby/store/socket';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import roomsState from '../pages/Lobby/store/roomsState';
import RoomCard from '../entities/room/ui/RoomCard';
import { EditRoomForm } from '../features/editRoom';
import ErrorListMessage from '../shared/ui/ErrorListMessage';
import ZeroListMessage from '../shared/ui/ZeroListMessage';

const Container = styled.div`
    width: 100%;
    max-width: 1196px;
    padding-right: 5px;
    margin: 0 auto;
    max-height: 642px;
    min-height: 542px;

    overflow: hidden;
    &:hover {
        padding-right: 0;
        overflow: scroll;
        overflow-x: hidden;
    }
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        opacity: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: rgba(126, 138, 152, .3);
    }
`

const Header = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0 auto 27px;
`

const Head = styled.h3`
    font-family: var(--font);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    color: var(--grey_2);
`

const RoomsList: React.FC = observer(() => {
    const [searchedRooms, setSearchedRooms] = useState([]);
    const { rooms, loading, error } = useRoomsList();
    const { myRooms, myLoading, myError } = useMyRooms();
    const { accessRooms, accessLoading, accessError } = useAccessRooms();

    const st = socket.state;

    useEffect(() => {
      st.onopen = function() {
        st.send('connected');
      };
    }, []);

    st.onmessage = function(event) {
        const response = event.data;
        setSearchedRooms(JSON.parse(response as any));
        console.log(searchedRooms);
    };

  return (
    <Container>
        <Header>
            <Head style={{ marginLeft: 93 }}>Название</Head>
            <Head style={{ marginLeft: 216 }}>Владелец</Head>
            <Head style={{ marginLeft: 234 }}>Статус</Head>
            <Head style={{ marginLeft: 110 }}>Доступ</Head>
        </Header>
        {navbarState.state === 'all' ? <>
            {searchedRooms.length > 0 ?
                <>
                    {searchedRooms.map((room: IRoom) => 
                        <RoomCard room={room} key={room.id}/>
                    )}
                </> 
                :
                <>
                    {loading && <p>loading...</p>}
                    {error && <ErrorListMessage>{error}</ErrorListMessage>}
                    {rooms.length > 0 ?
                        <>
                            {rooms.map(room => 
                                <RoomCard room={room} key={room.id}/>    
                            )}
                        </> :
                        <ZeroListMessage>У Вас пока нет созданных классов</ZeroListMessage>
                    }
                </>
            } </> :
        navbarState.state === 'access' ? <>
            {searchedRooms.length > 0 ?
                <>
                    {searchedRooms.map((room: IRoom) => 
                        <RoomCard room={room} key={room.id}/>
                    )}
                </> 
                :
                <>
                    {accessLoading && <p>loading...</p>}
                    {accessError && <ErrorListMessage>{accessError}</ErrorListMessage>}
                    {accessRooms.length > 0 ?
                        <>
                            {accessRooms.map(room => 
                                <RoomCard room={room} key={room.id}/>    
                            )}
                        </> :
                        <ZeroListMessage>У Вас пока нет созданных классов</ZeroListMessage>
                    }
                </>
            } </> :
        navbarState.state === 'my' ? <>
            {searchedRooms.length > 0 ? <>
                {searchedRooms.map((room: IRoom) => 
                    <RoomCard room={room} key={room.id}/>
                )} </> :
                <>
                    {myLoading && <p>loading...</p>}
                    {myError && <ErrorListMessage>{myError}</ErrorListMessage>}
                        {myRooms.length > 0 ?
                            <>
                                {roomsState.state === 'edit' ? <>
                                    {myRooms.map(room => 
                                        <EditRoomForm room={room} key={room.id}/>   
                                    )} </> : <>
                                    {myRooms.map(room => 
                                        <RoomCard room={room} key={room.id}/>    
                                    )} </>
                                } </> :
                            <ZeroListMessage>У Вас пока нет созданных классов</ZeroListMessage>
                        }
                </>
            } </> : null
        }
    </Container>
  )
})

export default RoomsList;
