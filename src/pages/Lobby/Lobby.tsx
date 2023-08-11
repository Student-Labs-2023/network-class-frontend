import React from 'react';
import { useRoomsList } from '../../entities/room/api/useRoomsList';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import RoomsList from '../../widgets/RoomsList';
import user from './store/user';

const Lobby: React.FC = () => {
  const { rooms, loading, error } = useRoomsList();
  console.log(user.state);
  
  return (
    <>
      <Header/>
      <Navbar activeLink='all' allLength={121}/>
      <RoomsList rooms={rooms} loading={loading} error={error}/>
    </>
  )
}

export default Lobby;
