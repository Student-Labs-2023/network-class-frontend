import React from 'react';
import { useRoomsList } from '../../entities/room/api/useRoomsList';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import RoomsList from '../../widgets/RoomsList';

const LobbyAccess: React.FC = () => {  
  const { rooms, loading, error } = useRoomsList();

  return (
    <>
      <Header/>
      <Navbar activeLink='access' accessLength={5}/>
      <RoomsList rooms={rooms} loading={loading} error={error}/>
    </>
  )
}

export default LobbyAccess;
