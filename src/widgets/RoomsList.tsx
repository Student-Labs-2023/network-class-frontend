import React, { useState, useEffect } from 'react';
import { IRoom } from '../entities/room/api/models';
import socket from '../pages/Lobby/store/socket';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import roomsState from '../pages/Lobby/store/roomsState';
import RoomCard from '../entities/room/ui/RoomCard';
import { EditRoomForm } from '../features/editRoom';
import { useRoomsList } from '../entities/room/api/useRoomsList';
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
    width: 80%;
    justify-content: space-between;
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
            <Head>Название</Head>
            <Head>Владелец</Head>
            <Head>Статус</Head>
            <Head>Доступ</Head>
        </Header>
        {searchedRooms.length > 0 ?
        <>
            {searchedRooms.map((room: IRoom) => 
                <RoomCard room={room} key={room.id}/>
            )}
        </> 
        :
        <>
            {loading ? <p>loading...</p> :
                <>
                    {error ? <ErrorListMessage>{error}</ErrorListMessage> :
                        <>
                        {rooms.length > 0 ?
                            <>
                                {roomsState.state === 'edit' ?
                                    <>
                                        {rooms.map(room => 
                                            <EditRoomForm room={room} key={room.id}/>   
                                        )}
                                    </>
                                    :
                                    <>
                                        {rooms.map(room => 
                                            <RoomCard room={room} key={room.id}/>    
                                        )}
                                    </>
                                }
                            </> 
                            :
                            <ZeroListMessage>У Вас пока нет созданных классов</ZeroListMessage>
                        }
                        </>
                    }
                </>
            }
        </>
        }
    </Container>
  )
})

export default RoomsList