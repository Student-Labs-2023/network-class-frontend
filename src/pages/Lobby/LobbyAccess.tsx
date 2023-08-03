import React from 'react';
import Header from '../../widgets/layout/Header';
import Navbar from '../../widgets/layout/Navbar';
import RoomsList from '../../widgets/RoomsList';

const LobbyAccess: React.FC = () => {  
  return (
    <>
      <Header/>
      <Navbar activeLink='access' accessLength={5}/>
      <RoomsList/>
    </>
  )
}

export default LobbyAccess