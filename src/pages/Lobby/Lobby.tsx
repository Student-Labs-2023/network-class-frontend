import React from 'react';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import RoomsList from '../../widgets/RoomsList';

const Lobby: React.FC = () => {
  
  return (
    <>
      <Header/>
      <Navbar activeLink='all' allLength={121}/>
      <RoomsList/>
    </>
  )
}

export default Lobby;
